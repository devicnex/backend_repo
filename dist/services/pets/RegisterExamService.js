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
exports.RegisterExamService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class RegisterExamService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data_exame, exame, clinica, observacao, img_laudo, pet_id }) {
            const exames = yield prisma_1.default.exame.create({
                data: {
                    data_exame: data_exame,
                    exame: exame,
                    clinica: clinica,
                    observacao: observacao,
                    img_laudo: img_laudo,
                    pet_id: pet_id,
                },
                select: {
                    data_exame: true,
                    exame: true,
                    clinica: true,
                    observacao: true,
                    img_laudo: true,
                    pet_id: true,
                }
            });
            return exames;
        });
    }
}
exports.RegisterExamService = RegisterExamService;
