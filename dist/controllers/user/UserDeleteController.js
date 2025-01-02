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
exports.UserDeleteController = void 0;
const UserDeleteService_1 = require("../../services/users/UserDeleteService");
class UserDeleteController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req);
            const { id } = req.body;
            if (!id) {
                console.log("Usuário Não encontrado, verifique");
            }
            const deleteUserService = new UserDeleteService_1.UserDeleteService();
            try {
                const user = yield deleteUserService.execute(id);
                return res.json(user);
            }
            catch (err) {
                console.log("Erro ao excluir usuário" + err);
            }
        });
    }
}
exports.UserDeleteController = UserDeleteController;
