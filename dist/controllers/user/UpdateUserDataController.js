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
exports.UpdateUserDataController = void 0;
const UpdateUserDataService_1 = require("../../services/users/UpdateUserDataService");
class UpdateUserDataController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, email, cpfcnpj, telefone, cep, endereco, complemento, numero, bairro, cidade, estado, status, } = req.body;
            console.log('caiu aqyu');
            const updateUser = new UpdateUserDataService_1.UpdateUserDataService();
            let img_usuario;
            if (req.file) {
                img_usuario = req.file.filename; // Nome do arquivo salvo pelo multer
                console.log('Arquivo recebido com sucesso:', req.file);
            }
            else {
                console.log('Nenhuma imagem foi enviada.', req.file);
            }
            try {
                const update = yield updateUser.execute({
                    id,
                    name,
                    email,
                    cpfcnpj,
                    telefone,
                    cep,
                    endereco,
                    complemento,
                    numero,
                    bairro,
                    cidade,
                    estado,
                    status,
                    img_usuario, // Adicionando a imagem ao registro
                });
                return res.json(update);
            }
            catch (err) {
                console.error('Erro ao gravar os dados:', err);
                return res.status(500).json({ error: 'Erro ao gravar os dados' });
            }
        });
    }
}
exports.UpdateUserDataController = UpdateUserDataController;
