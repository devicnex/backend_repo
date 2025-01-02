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
exports.UpdateUserDataService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateUserDataService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id, name, email, cpfcnpj, telefone, cep, endereco, complemento, numero, bairro, cidade, estado, status, img_usuario }) {
            try {
                const userAlreadyExists = prisma_1.default.user.findFirst({
                    where: {
                        id
                    }
                });
                if (!userAlreadyExists) {
                    throw Error("Usuário não encontrado");
                }
                else {
                    const updateUser = yield prisma_1.default.user.update({
                        where: {
                            id: id
                        }, data: {
                            name, email, cpfcnpj, telefone, cep, endereco, complemento, numero, bairro, cidade, estado, status, img_usuario,
                        }
                    });
                    return updateUser;
                }
            }
            catch (err) {
                return err;
            }
        });
    }
}
exports.UpdateUserDataService = UpdateUserDataService;
