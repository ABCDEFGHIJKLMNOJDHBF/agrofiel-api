import { prisma } from '../index.js';

export async function createSetting(data) {
  return prisma.setting.create({ data });
}

export async function getSettingByFarmId(farmId) {
  return prisma.setting.findUnique({ where: { farmId } });
}

export async function updateSetting(farmId, data) {
  return prisma.setting.update({ where: { farmId }, data });
}
