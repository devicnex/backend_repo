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
exports.UpdateVaccineService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateVaccineService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, data_vacinacao, vacina, clinica, intervalo, observacao }) {
            try {
                const vaccineAlreadyExists = prisma_1.default.vacina.findFirst({
                    where: {
                        id
                    }
                });
                if (!vaccineAlreadyExists) {
                    throw Error("Vacina não encontrada!");
                }
                else {
                    const updateVaccine = prisma_1.default.vacina.update({
                        where: {
                            id: id
                        }, data: {
                            data_vacinacao, vacina, clinica, intervalo, observacao
                        }
                    });
                    return updateVaccine;
                }
            }
            catch (err) {
                console.error("Erro ao atualizar vacina!" + err);
                return err;
            }
        });
    }
}
exports.UpdateVaccineService = UpdateVaccineService;
