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
exports.UpdateUserService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateUserService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ user_id, password }) {
            try {
                const userAlreadyExists = yield prisma_1.default.user.findFirst({
                    where: {
                        id: user_id,
                    }
                });
                if (!userAlreadyExists) {
                    throw new Error("User not found!");
                }
                const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
                const userUpdate = yield prisma_1.default.user.update({
                    where: {
                        id: user_id
                    },
                    data: {
                        password: hashedPassword,
                    },
                    select: {
                        password: true,
                    }
                });
                return userUpdate;
            }
            catch (err) {
                console.log(err);
                throw new Error("Error updating password!");
            }
        });
    }
}
exports.UpdateUserService = UpdateUserService;
