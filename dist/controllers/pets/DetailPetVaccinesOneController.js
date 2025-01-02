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
exports.DetailPetVaccinesOneController = void 0;
const DetailPetVaccinesOneService_1 = require("../../services/pets/DetailPetVaccinesOneService");
class DetailPetVaccinesOneController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_vacinne } = req.params;
            try {
                const instanceVaccine = new DetailPetVaccinesOneService_1.DetailPetVaccinesOneService();
                const resultVaccine = yield instanceVaccine.execute(id_vacinne);
                return res.json(resultVaccine);
            }
            catch (err) {
                return res.status(400).json(err);
            }
        });
    }
}
exports.DetailPetVaccinesOneController = DetailPetVaccinesOneController;
