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
exports.DeletePetController = void 0;
const DeletePetService_1 = require("../../services/pets/DeletePetService");
class DeletePetController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req);
            const { id } = req.body;
            //console.log(id)
            if (!id) {
                //console.log("Pet Não encontrado, verifique");
            }
            const deletePetService = new DeletePetService_1.DeletePetService();
            try {
                const pet = yield deletePetService.execute(id);
                return res.json(pet);
            }
            catch (err) {
                //console.log("Erro ao excluir o pet" + err);
            }
        });
    }
}
exports.DeletePetController = DeletePetController;
