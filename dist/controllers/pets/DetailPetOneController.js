"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailPetOneController = void 0;
const DetailPetOneService_1 = require("../../services/pets/DetailPetOneService");
class DetailPetOneController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_pet } = req.params;
            // console.log(id_pet + ' passou pelo controle'); // Verifique o valor aqui
            if (!id_pet) {
                return res.status(400).json({ error: "Esperando paramentro id do Pet Selecionado!" });
            }
            const detailPetOneService = new DetailPetOneService_1.DetailPetOneService();
            try {
                const response = yield detailPetOneService.execute(id_pet);
                // console.log(response);
                return res.json(response);
            }
            catch (erro) {
                console.error("Erro ao retornar os dados do pet: " + erro);
                return res.status(500).json({ error: "Erro ao retornar os dados do pet" });
            }
        });
    }
}
exports.DetailPetOneController = DetailPetOneController;
