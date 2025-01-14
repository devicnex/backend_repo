import prismaClient from "../../prisma";


interface UpdateUser {
    id: string;
    name: string;
    email: string;
    cpfcnpj: string;
    telefone: string;
    cep: string;
    endereco: string;
    complemento: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    status: string;
    img_usuario: string;
}

class UpdateUserDataService {
    async execute({id,name, email, cpfcnpj, telefone, cep, endereco, complemento, numero, bairro, cidade, estado, status, img_usuario}: UpdateUser) {
            try{
                const userAlreadyExists = prismaClient.user.findFirst({
                    where: {
                        id
                    }
                })
                if(!userAlreadyExists) {
                    throw Error("Usuário não encontrado");
                }else{
                    const updateUser = await prismaClient.user.update({
                        where: {
                            id: id
                        }, data: {
                            name, email, cpfcnpj, telefone, cep, endereco, complemento, numero, bairro, cidade, estado, status, img_usuario,
                        }
                    })
                    return updateUser;
                }

            }catch(err) {
                return err
            }
    }
}

export { UpdateUserDataService }