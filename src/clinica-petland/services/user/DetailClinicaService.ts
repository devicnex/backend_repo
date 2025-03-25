import prismaClient from "../../../prisma";

class DetailClinicaService {
    async execute(clinica_id : string) {
        const clinica = await prismaClient.clinica.findFirst({
            where: {
                id: clinica_id
            },
            select: {
                id: true,
                responsavel : true,
                razaoSocial : true,
                password : true,
                email : true,
                telefone : true,
                cnjp : true,
                cep : true,
                endereco : true,
                numero : true,
                uf : true,
                cidade : true,
                complemento: true,
                img_clinica: true,
                status: true,
                updated_at: true,
            }
        })
        return clinica;
    }
}

export { DetailClinicaService }