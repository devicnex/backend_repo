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
exports.RegisterVaccinesService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class RegisterVaccinesService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ data_vacinacao, vacina, clinica, intervalo, img_lote, observacao, pet_id }) {
            const vacinas = yield prisma_1.default.vacina.create({
                data: {
                    data_vacinacao: data_vacinacao,
                    vacina: vacina,
                    clinica: clinica,
                    intervalo: intervalo,
                    img_lote: img_lote,
                    observacao: observacao,
                    pet_id: pet_id,
                },
                select: {
                    data_vacinacao: true,
                    vacina: true,
                    clinica: true,
                    intervalo: true,
                    img_lote: true,
                    observacao: true,
                    pet_id: true,
                }
            });
            return vacinas;
        });
    }
}
exports.RegisterVaccinesService = RegisterVaccinesService;
