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
exports.BlogPetService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class BlogPetService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ pet_id, conteudo, img_blog }) {
            const blog = yield prisma_1.default.blog.create({
                data: {
                    pet_id: pet_id,
                    conteudo: conteudo,
                    img_blog: img_blog,
                },
                select: {
                    pet_id: true,
                    conteudo: true,
                    img_blog: true,
                }
            });
            return blog;
        });
    }
}
exports.BlogPetService = BlogPetService;
