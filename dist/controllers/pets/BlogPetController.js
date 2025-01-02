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
exports.BlogPetController = void 0;
const BlogPetService_1 = require("../../services/pets/BlogPetService");
class BlogPetController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Estou em cima do body !!!!   ! ! ! ! ! ! ! !! !1");
            const { conteudo, pet_id, } = req.body;
            console.log("Eu sou o body!!!!!!! ", req.body);
            const registerBlog = new BlogPetService_1.BlogPetService();
            let img_blog = '';
            console.log("Aqui é o FIILEEEEEEEEEEEEEEEE", req.file);
            if (req.file) {
                img_blog = req.file.filename;
            }
            try {
                const blog = yield registerBlog.execute({
                    conteudo,
                    pet_id,
                    img_blog,
                });
                return res.json(blog);
            }
            catch (err) {
                console.error("Erro ao publicar blog" + err);
            }
        });
    }
}
exports.BlogPetController = BlogPetController;
