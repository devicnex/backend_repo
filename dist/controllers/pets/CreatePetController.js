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
exports.CreatePetController = void 0;
const CreatePetService_1 = require("../../services/pets/CreatePetService");
class CreatePetController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('📦 Body:', req.body);
            try {
                console.log('Recebendo os dados do pet...');
                const { name, apelido, especie, idade, meses, raca, chip, sexo, temperamento, tamanho, detalhes, user_id } = req.body;
                console.log('Arquivo recebido pelo multer:', req.file, "Dados REQ BODY", req.body);
                let img_perfil = "avatar_standard.png";
                if (req.file) {
                    img_perfil = req.file.filename;
                }
                else {
                    console.log('⚠️ Arquivo não encontrado no req.file');
                }
                const createPetService = new CreatePetService_1.CreatePetService();
                const pet = yield createPetService.execute({
                    name,
                    apelido,
                    especie,
                    idade,
                    meses,
                    raca,
                    chip,
                    sexo,
                    temperamento,
                    tamanho,
                    detalhes,
                    img_perfil,
                    user_id
                });
                return res.json(pet);
            }
            catch (error) {
                console.error('Erro no upload:', error);
                return res.status(500).json({ error: 'Ocorreu um erro ao salvar o pet' });
            }
        });
    }
}
exports.CreatePetController = CreatePetController;
