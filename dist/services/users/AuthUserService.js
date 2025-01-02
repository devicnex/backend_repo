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
exports.AuthUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthUserService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password }) {
            try {
                // Verifica se o email existe
                const user = yield prisma_1.default.user.findFirst({
                    where: {
                        email: email
                    }
                });
                if (!user) {
                    console.error('User not found');
                    throw new Error('Usuário ou senha incorreto');
                }
                // Verifica se a senha está correta
                const passwordMatch = yield (0, bcryptjs_1.compare)(password, user.password);
                if (!passwordMatch) {
                    console.error('Incorrect password');
                    throw new Error('Usuário ou senha incorreto');
                }
                // Gera o token JWT
                const token = (0, jsonwebtoken_1.sign)({
                    name: user.name,
                    email: user.email
                }, process.env.JWT_SECRET, {
                    subject: user.id,
                    expiresIn: '30d'
                });
                // Normaliza a data para o formato MySQL
                const data = new Date();
                const dataFormatadaISO = data.toISOString(); // Gera a string no formato ISO-8601 completo
                console.log('Data formatada para Prisma:', dataFormatadaISO);
                try {
                    const updateAtividade = yield prisma_1.default.user.update({
                        where: {
                            id: user.id
                        },
                        data: {
                            updated_at: dataFormatadaISO // Passa a string ISO-8601 completa
                        }
                    });
                    // console.log('Update realizado com sucesso:', updateAtividade);
                }
                catch (err) {
                    console.error('Erro ao atualizar a data do usuário:', err);
                }
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    token: token,
                    update_data: user.updated_at // Retorna a data atualizada
                };
            }
            catch (error) {
                console.error('Authentication error:', error);
                throw error;
            }
        });
    }
}
exports.AuthUserService = AuthUserService;
