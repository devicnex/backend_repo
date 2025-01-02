
import prismaClient from "../../prisma";


export class DetailPetVaccinesOneService {
    async execute(id_vacinne: string) {
        try {
            const SearchVaccine = await prismaClient.vacina.findFirst({
                where: {
                    id: id_vacinne
                }
            })
            return SearchVaccine;
        }catch(error) {
            console.log("erro na merda" + error);
        }
        
    }
}