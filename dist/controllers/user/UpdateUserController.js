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
exports.UpdateUserController = void 0;
const UpdateUserService_1 = require("../../services/users/UpdateUserService");
const bcryptjs_1 = require("bcryptjs");
class UpdateUserController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(request);
            const { password } = request.body;
            const user_id = request.user_id;
            const updateUpdate = new UpdateUserService_1.UpdateUserService();
            const user = yield updateUpdate.execute({
                user_id,
                password
            });
            const passwordMatch = yield (0, bcryptjs_1.compare)(password, user.password);
            if (!passwordMatch) {
                throw new Error("Senha Atual incorreta!");
            }
            return response.json(user);
        });
    }
}
exports.UpdateUserController = UpdateUserController;
