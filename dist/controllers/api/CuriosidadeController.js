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
exports.CuriosidadeController = void 0;
const CuriosidadeService_1 = require("../../services/api/CuriosidadeService");
let currentIndex = 0; // Variável estática para rastrear o índice atual
class CuriosidadeController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const curiosidadeService = new CuriosidadeService_1.CuriosidadeService();
            try {
                const curiosidade = yield curiosidadeService.getOneByIndex(currentIndex);
                if (curiosidade) {
                    currentIndex++;
                    return res.json(curiosidade);
                }
                else {
                    return res.status(404).json({ error: "Nenhuma curiosidade encontrada" });
                }
            }
            catch (error) {
                return res.status(500).json({ error: error.message });
            }
        });
    }
}
exports.CuriosidadeController = CuriosidadeController;
