import prismaClient from "../../prisma";

type Horarios = {
    data_servico: string
    horario_servico: string
    tipo: number
    sub_categoria?: string | null
    id_clinica: string
    status: number
}

class HorarioService {
    async execute({ data_servico, horario_servico, tipo, id_clinica, status, sub_categoria }: Horarios) {
        if ((tipo === 1 || tipo === 2) && sub_categoria) {
            throw new Error('Subcategoria só pode ser adicionada para o tipo 3 (exames).');
        }

        if (tipo === 3 && !sub_categoria) {
            throw new Error('O tipo 3 (exames) exige a definição de uma subcategoria.');
        }

        const horario = await prismaClient.horarios.create({
            data: {
                data_servico: data_servico,
                horario_servico: horario_servico,
                tipo: tipo,
                sub_categoria: sub_categoria || null,
                id_clinica: id_clinica,
                status: status,
            },
            select: {
                data_servico: true,
                horario_servico: true,
                tipo: true,
                sub_categoria: true,
                id_clinica: true,
                status: true,
            },
        });
        return horario;
    }
}

export { HorarioService };
