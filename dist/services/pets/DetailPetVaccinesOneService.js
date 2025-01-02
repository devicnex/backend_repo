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
exports.DetailPetVaccinesOneService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DetailPetVaccinesOneService {
    execute(id_vacinne) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const SearchVaccine = yield prisma_1.default.vacina.findFirst({
                    where: {
                        id: id_vacinne
                    }
                });
                return SearchVaccine;
            }
            catch (error) {
                console.log("erro na merda" + error);
            }
        });
    }
}
exports.DetailPetVaccinesOneService = DetailPetVaccinesOneService;
