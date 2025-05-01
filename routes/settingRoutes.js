// routes/settingRoutes.js
import { createSettingHandler, getSettingByFarmIdHandler, updateSettingHandler, deleteSettingHandler } from '../controllers/settingController.js';

export async function settingRoutes(fastify) {
  fastify.get('/settings/:farmId', getSettingByFarmIdHandler);
  fastify.post('/settings', createSettingHandler);
  fastify.put('/settings/:farmId', updateSettingHandler);
  fastify.delete('/settings/:farmId', deleteSettingHandler);  // Nouvelle route pour DELETE
}
