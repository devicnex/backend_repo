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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlogService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateBlogService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, conteudo }) {
            if (!id || !conteudo) {
                throw new Error("Campos 'id' e 'conteudo' são obrigatórios");
            }
            try {
                const blogExistente = yield prisma_1.default.blog.findUnique({
                    where: { id },
                });
                if (!blogExistente) {
                    throw new Error("Blog não encontrado");
                }
                const updateBlog = yield prisma_1.default.blog.update({
                    where: { id },
                    data: { conteudo },
                });
                return updateBlog;
            }
            catch (err) {
                console.error("Erro ao atualizar conteúdo:", err);
                throw err;
            }
        });
    }
}
exports.UpdateBlogService = UpdateBlogService;
