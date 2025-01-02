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
exports.UpdateExamService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateExamService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, data_exame, exame, clinica, observacao }) {
            try {
                const examAlreadyExists = prisma_1.default.exame.findFirst({
                    where: {
                        id
                    }
                });
                if (!examAlreadyExists) {
                    throw Error("Exame não encontrado");
                }
                else {
                    const updateExam = prisma_1.default.exame.update({
                        where: {
                            id: id
                        }, data: {
                            data_exame, exame, clinica, observacao
                        }
                    });
                    return updateExam;
                }
            }
            catch (err) {
                console.error("Erro ao atualizar exame");
            }
        });
    }
}
exports.UpdateExamService = UpdateExamService;
