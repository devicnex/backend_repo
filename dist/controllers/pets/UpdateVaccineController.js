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
exports.UpdateVaccineController = void 0;
const UpdateVaccineService_1 = require("../../services/pets/UpdateVaccineService");
class UpdateVaccineController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, data_vacinacao, vacina, clinica, intervalo, observacao } = req.body;
            const updateVaccine = new UpdateVaccineService_1.UpdateVaccineService();
            try {
                const update = updateVaccine.execute({ id, data_vacinacao, vacina, clinica, intervalo, observacao });
                return res.json(update);
            }
            catch (err) {
                console.error("Erro ao atualizar vacina!" + err);
                throw Error("Erro ao atualizar vacina!" + err);
            }
        });
    }
}
exports.UpdateVaccineController = UpdateVaccineController;
