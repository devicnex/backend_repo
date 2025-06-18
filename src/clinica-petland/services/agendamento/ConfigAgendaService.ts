    import prismaClient from "../../../prisma";

    interface ConfigAgendaInput {
    id_clinica: string;
    dia_semana: number;
    inicio_turno: string;
    fim_turno: string;
    servico: number;
    }

    class CriarConfiguracaoAgendaService {
    async execute(data: ConfigAgendaInput) {
        const config = await prismaClient.configAgenda.create({
        data,
        });

        return config;
    }
    }

    export { CriarConfiguracaoAgendaService };