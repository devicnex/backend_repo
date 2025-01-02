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
exports.DeleExamController = void 0;
const DeleteExamService_1 = require("../../services/pets/DeleteExamService");
class DeleExamController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            if (!id) {
                //console.log("Exame não encontrado!")
            }
            const deleteExamService = new DeleteExamService_1.DeleteExamService();
            try {
                const exame = yield deleteExamService.execute(id);
                return res.json(exame);
            }
            catch (error) {
                console.error("Erro ao deletar exame" + error);
            }
        });
    }
}
exports.DeleExamController = DeleExamController;
