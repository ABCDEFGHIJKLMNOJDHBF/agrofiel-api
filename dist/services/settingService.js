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
exports.getSettingByFarmId = getSettingByFarmId;
exports.createSetting = createSetting;
exports.updateSetting = updateSetting;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getSettingByFarmId(farmId) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.setting.findUnique({ where: { farmId } });
    });
}
function createSetting(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const existing = yield prisma.setting.findUnique({ where: { farmId: data.farmId } });
        if (existing)
            throw new Error('Setting already exists for this farm');
        return prisma.setting.create({ data });
    });
}
function updateSetting(farmId, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma.setting.update({
            where: { farmId },
            data,
        });
    });
}
