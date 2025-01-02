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
exports.RegisterVaccinesController = void 0;
const RegisterVaccinesService_1 = require("../../services/pets/RegisterVaccinesService");
class RegisterVaccinesController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("ALI CAIUUUUUUUU AAAAAAAAAAAAAAAA LLIIIII");
            try {
                const { data_vacinacao, vacina, clinica, intervalo, observacao, pet_id } = req.body;
                console.log("Resultado do body: ", req.body);
                let img_lote;
                if (req.file) {
                    img_lote = req.file.filename;
                    console.log('Arquivo recebido com sucesso:', req.file);
                }
                else {
                    console.log('Nenhuma imagem foi enviada.', req.file);
                }
                const registerVaccines = new RegisterVaccinesService_1.RegisterVaccinesService();
                const pet = yield registerVaccines.execute({
                    data_vacinacao,
                    vacina,
                    clinica,
                    intervalo,
                    img_lote,
                    observacao,
                    pet_id,
                });
                return res.json(pet);
            }
            catch (error) {
                console.log("Error ao Gravar dados no Banco" + error);
            }
        });
    }
}
exports.RegisterVaccinesController = RegisterVaccinesController;
