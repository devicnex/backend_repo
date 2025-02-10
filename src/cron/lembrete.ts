import cron from 'node-cron';
import { BuscarHorarioAllService } from "../services/clinicas/BuscarHorariosAll";

// Função para adicionar zero à esquerda (caso o número tenha apenas um dígito)
const adicionarZeroEsquerda = (num: number): string => (num < 10 ? "0" + num : num.toString());

// Função para formatar datas sem GMT e sem textos desnecessários
const formatarData = (data: Date): string => {
    const ano = data.getFullYear();
    const mes = adicionarZeroEsquerda(data.getMonth() + 1);
    const dia = adicionarZeroEsquerda(data.getDate());
    const horas = adicionarZeroEsquerda(data.getHours());
    const minutos = adicionarZeroEsquerda(data.getMinutes());
    const segundos = adicionarZeroEsquerda(data.getSeconds());

    return `${ano}-${mes}-${dia} ${horas}:${minutos}`;
};


export const lembreteCron = cron.schedule('* * * * * ', async () => {
    try {
        const buscarHorarioService = new BuscarHorarioAllService();
        const response = await buscarHorarioService.execute(); 
        
        if (!Array.isArray(response) || response.length === 0) {
            console.log("Nenhum horário encontrado ou resposta inválida:", response);
            return;
        }

        console.log(response);
        
        const agora = new Date();
        const agoraUTC = new Date(agora.getTime() - agora.getTimezoneOffset() * 60000);
        const agoraFormatado = formatarData(agoraUTC);
        console.log(`🕒 Agora (ISO): ${agoraUTC.toISOString()}`);

        const horariosParaNotificar = response.filter(horario => {
            if (!horario.data_servico || !horario.horario_servico) return false;

            // Criar a data corretamente sem erro de conversão
            const dataServico = new Date(horario.data_servico);

            // Verifica se a data é válida antes de continuar
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

            const date_formated = agoraFormatado >= notificacaoSemSegundos && agoraFormatado < servicoSemSegundos;
            console.log(date_formated);
            return date_formated;
        });

        if (horariosParaNotificar.length > 0) {
            horariosParaNotificar.forEach(horario => {
                console.log(`🔔 Enviando notificação para ID: ${horario.id} - ${horario.sub_categoria || 'Sem categoria'} às ${horario.horario_servico}`);
            });
        }

    } catch (error) {
        console.error("Erro ao buscar horários:", error);
    }
});
