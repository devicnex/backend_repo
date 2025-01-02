import { Request, Response } from "express";
import { DetailPetOneService } from "../../services/pets/DetailPetOneService";


class DetailPetOneController {
    async handle(req: Request, res: Response) {
      const { id_pet } = req.params;  
      // console.log(id_pet + ' passou pelo controle'); // Verifique o valor aqui
  
      if (!id_pet) {
        return res.status(400).json({ error: "Esperando paramentro id do Pet Selecionado!" });
      }
  
      const detailPetOneService = new DetailPetOneService();
      try {
        const response = await detailPetOneService.execute(id_pet);
        // console.log(response);
        return res.json(response);
      } catch (erro) {
        console.error("Erro ao retornar os dados do pet: " + erro);
        return res.status(500).json({ error: "Erro ao retornar os dados do pet" });
      }
    }
  }
  
  export { DetailPetOneController };
  