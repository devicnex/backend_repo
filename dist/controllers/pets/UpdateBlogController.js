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
exports.UpdateBlogController = void 0;
const UpdateBlogService_1 = require("../../services/pets/UpdateBlogService");
class UpdateBlogController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, conteudo } = req.body;
            if (!id || !conteudo) {
                return res.status(400).json({ error: "Campos 'id' e 'conteudo' são obrigatórios" });
            }
            const updateBlog = new UpdateBlogService_1.UpdateBlogService();
            try {
                const update = yield updateBlog.execute({ id, conteudo });
                return res.json(update);
            }
            catch (err) {
                console.error("Erro ao atualizar:", err);
                return res.status(500).json({ error: "Erro interno ao atualizar o blog" });
            }
        });
    }
}
exports.UpdateBlogController = UpdateBlogController;
