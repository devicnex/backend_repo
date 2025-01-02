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
exports.DetailBlogController = void 0;
const DetailBlogService_1 = require("../../services/pets/DetailBlogService");
class DetailBlogController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const detailPost = new DetailBlogService_1.DetailBlogService();
            try {
                const response = yield detailPost.execute(); // Sem necessidade de passar id_blog
                if (!response || response.length === 0) {
                    return res.status(404).json({ error: "Nenhum post encontrado" });
                }
                return res.json(response);
            }
            catch (err) {
                console.error("Erro ao retornar dados dos posts:", err);
                return res.status(500).json({ error: "Erro ao retornar os dados dos POSTS!" });
            }
        });
    }
}
exports.DetailBlogController = DetailBlogController;
