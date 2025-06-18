    import prismaClient from "../../../prisma";

    interface GerarHorariosInput {
    id_veterinario: string;
    id_clinica: string;
    mes: string; // formato "2025-06"
    datas_excluidas?: string[]; // formato yyyy-mm-dd
    }

    class GerarHorariosMensalService {
    async execute({ id_clinica, id_veterinario, mes, datas_excluidas = [] }: GerarHorariosInput) {
        const configuracoes = await prismaClient.configAgenda.findMany({ where: { id_clinica } });

        const servicoDuracoes: Record<number, number> = {
        1: 15,  // Vacina
        2: 60,  // Banho e Tosa
        3: 30   // Exames (ajuste por subcategoria se necessário)
        };

        const diasDoMes = this.getDiasDoMes(mes);
        const horariosGerados: any[] = [];

        const ultimo = await prismaClient.horarios.findFirst({
        orderBy: { seq_id: 'desc' },
        select: { seq_id: true }
        });

        let proximoSeqId = (ultimo?.seq_id || 0) + 1;

        for (const dia of diasDoMes) {
        if (datas_excluidas.includes(dia)) continue;

        const diaSemana = new Date(dia).getDay();
        const configuracoesDoDia = configuracoes.filter(c => c.dia_semana === diaSemana);

        for (const config of configuracoesDoDia) {
            const duracao = servicoDuracoes[config.servico] || 30;
            const ignorar = config.ignorar_horarios
                ? config.ignorar_horarios.split(',').map(h => h.trim())
                : [];
            const horarios = this.gerarHorariosTurno(config.inicio_turno, config.fim_turno, duracao, ignorar);

            for (const hora of horarios) {
            horariosGerados.push({
                seq_id: proximoSeqId++,
                data_servico: this.formatarData(dia),
                horario_servico: hora,
                tipo: config.servico,
                sub_categoria: null,
                id_clinica,
                id_veterinario,
                status: 1
            });
            }
        }
        }

        if (horariosGerados.length === 0) {
        throw new Error("Nenhuma configuração encontrada para o mês informado.");
        }

        await prismaClient.horarios.createMany({
        data: horariosGerados
        });

        return { total: horariosGerados.length };
    }

    getDiasDoMes(mes: string): string[] {
        const [ano, mesStr] = mes.split('-').map(Number);
        const dias: string[] = [];
        const ultimoDia = new Date(ano, mesStr, 0).getDate();

        for (let dia = 1; dia <= ultimoDia; dia++) {
        const data = new Date(ano, mesStr - 1, dia);
        dias.push(data.toISOString().split('T')[0]);
        }

        return dias;
    }

    gerarHorariosTurno(inicio: string, fim: string, duracaoMin: number, ignorar_horarios: string[] = []): string[] {
        const horarios: string[] = [];
        let [h, m] = inicio.split(':').map(Number);
        const [hFim, mFim] = fim.split(':').map(Number);

        while (h < hFim || (h === hFim && m < mFim)) {
        const horaFormatada = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

        if (!ignorar_horarios.includes(horaFormatada)) {
            horarios.push(horaFormatada);
        }

        m += duracaoMin;
        if (m >= 60) {
            h += Math.floor(m / 60);
            m %= 60;
        }
        }

        return horarios;
    }

    formatarData(dataISO: string): string {
        const [ano, mes, dia] = dataISO.split('-');
        return `${dia}/${mes}/${ano}`;
    }
    }

    export { GerarHorariosMensalService };
