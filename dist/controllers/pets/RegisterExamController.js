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
exports.RegisterExamController = void 0;
const RegisterExamService_1 = require("../../services/pets/RegisterExamService");
class RegisterExamController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data_exame, exame, clinica, observacao, pet_id, } = req.body;
            let img_laudo = 'img_padrao.png';
            if (req.file) {
                img_laudo = req.file.filename;
            }
            if (!data_exame || !exame || !clinica || !observacao || !img_laudo || !pet_id) {
                return res.status(400).json({ error: 'Algum campo está vazio, preencha!' });
            }
            const registerExam = new RegisterExamService_1.RegisterExamService();
            try {
                const pet = yield registerExam.execute({
                    data_exame,
                    exame,
                    clinica,
                    observacao,
                    img_laudo,
                    pet_id,
                });
                return res.json(pet);
            }
            catch (error) {
                console.error("Erro ao registrar exame:", error);
                return res.status(500).json({ error: 'Erro ao registrar exame' });
            }
        });
    }
}
exports.RegisterExamController = RegisterExamController;
