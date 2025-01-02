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
exports.DetailVaccinesController = void 0;
const DetailVaccinesService_1 = require("../../services/pets/DetailVaccinesService");
class DetailVaccinesController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pet_id } = req.params;
            // console.log(pet_id)
            if (!pet_id) {
                return res.json('Paramentro ID Vazio');
            }
            const datailVaccines = new DetailVaccinesService_1.DetailVaccinesService();
            try {
                const detail = yield datailVaccines.execute(pet_id);
                return res.json(detail);
            }
            catch (error) {
                console.log("erro ao realizar a busca" + error);
            }
        });
    }
}
exports.DetailVaccinesController = DetailVaccinesController;
