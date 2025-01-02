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
exports.UpdatePetController = void 0;
const UpdatePetService_1 = require("../../services/pets/UpdatePetService");
class UpdatePetController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, apelido, idade, meses, raca, sexo, chip, temperamento, tamanho, detalhes } = req.body;
            let img_perfil;
            if (req.file) {
                img_perfil = req.file.filename;
            }
            const updatePet = new UpdatePetService_1.UpdatePetService();
            try {
                const update = updatePet.execute({ id, name, apelido, idade, meses, raca, sexo, chip, temperamento, tamanho, detalhes, img_perfil });
                return res.json({
                    message: "Pet Atualizado com sucesso!",
                    pet: update
                });
            }
            catch (err) {
                console.error("Erro ao atualizar Pet!" + err);
            }
        });
    }
}
exports.UpdatePetController = UpdatePetController;
