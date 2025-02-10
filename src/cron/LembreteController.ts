import { Request, Response } from 'express';
import { BuscarHorarioAllService } from "../../src/services/clinicas/BuscarHorariosAll";

// Função auxiliar para adicionar zero à esquerda (ex: 09 em vez de 9)
const adicionarZeroEsquerda = (num: number): string => (num < 10 ? "0" + num : num.toString());

// Função para formatar datas corretamente
const formatarData = (data: Date): string => {
    const ano = data.getFullYear();
    const mes = adicionarZeroEsquerda(data.getMonth() + 1);
    const dia = adicionarZeroEsquerda(data.getDate());
    const horas = adicionarZeroEsquerda(data.getHours());
    const minutos = adicionarZeroEsquerda(data.getMinutes());

    return `${ano}-${mes}-${dia} ${horas}:${minutos}`;
};

class LembreteController {
    async handle(req: Request, res: Response) {
        try {
            const buscarHorarioService = new BuscarHorarioAllService();
            const response = await buscarHorarioService.execute();

            if (!Array.isArray(response) || response.length === 0) {
                return res.json({ notificacoes: [] });
            }

            const agora = new Date();
            const agoraUTC = new Date(agora.getTime() - agora.getTimezoneOffset() * 60000);
            const agoraFormatado = formatarData(agoraUTC);

            console.log(`🕒 Agora (ISO): ${agoraUTC.toISOString()}`);

            const horariosParaNotificar = response.filter(horario => {
                if (!horario.data_servico || !horario.horario_servico) return false;

                // Criando a data correta sem erro de conversão
                const dataServico = new Date(horario.data_servico);

                if (isNaN(dataServico.getTime())) {
                    console.error(`❌ Data Serviço inválida após conversão: ${horario.data_servico} (ID: ${horario.id})`);
                    return false;
                }

                // Define corretamente as horas e minutos sem alterar o fuso horário
                const [horas, minutos] = horario.horario_servico.split(':').map(Number);
                dataServico.setUTCHours(horas, minutos, 0, 0);

                // Ajusta para o fuso horário local
                const dataServicoLocal = new Date(dataServico.getTime());
                const dataServicoFormatado = formatarData(dataServicoLocal);
                console.log(`🔍 Data Serviço (ISO): ${dataServicoLocal.toISOString()}`);

                // Calcular notificação 10 min antes
                const tempoNotificacao = new Date(dataServicoLocal.getTime() - 10 * 60 * 1000);
                const tempoNotificacaoFormatado = formatarData(tempoNotificacao);

                const notificacaoSemSegundos = tempoNotificacaoFormatado.slice(0, 16);
                const servicoSemSegundos = dataServicoFormatado.slice(0, 16);

                return agoraFormatado >= notificacaoSemSegundos && agoraFormatado < servicoSemSegundos;
            });

            if (horariosParaNotificar.length > 0) {
                console.log("🔔 Lembretes encontrados:", horariosParaNotificar);
            } else {
                console.log("⏳ Nenhum lembrete no momento.");
            }

            return res.json({ notificacoes: horariosParaNotificar });

        } catch (error) {
            console.error("Erro ao buscar notificações:", error);
            return res.status(500).json({ error: "Erro ao buscar notificações" });
        }
    }
}

export { LembreteController };
