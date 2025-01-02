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
exports.UpdatePetService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdatePetService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, name, apelido, idade, meses, raca, sexo, chip, temperamento, tamanho, detalhes, img_perfil }) {
            try {
                const EditPet = prisma_1.default.pet.findFirst({
                    where: {
                        id: id
                    }
                });
                console.log(id + "Aqui está o ID do seu PETOZO!");
                if (!EditPet) {
                    throw Error("Pet não encontrado!!");
                }
                else {
                    const updatePet = yield prisma_1.default.pet.update({
                        where: {
                            id: id
                        }, data: {
                            name, apelido, idade, meses, raca, sexo, chip, temperamento, tamanho, detalhes, img_perfil
                        }
                    });
                    return updatePet;
                }
            }
            catch (err) {
                console.error("Erro ao atualizar Pet!" + err);
            }
        });
    }
}
exports.UpdatePetService = UpdatePetService;
