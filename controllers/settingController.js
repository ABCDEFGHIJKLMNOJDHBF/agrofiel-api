// controllers/settingController.js

export async function createSettingHandler(request, reply) {
    const { farmId, currency, salaryBase } = request.body;
    try {
      const setting = await request.server.prisma.setting.create({
        data: { farmId, currency, salaryBase },
      });
      reply.send(setting);
    } catch (err) {
      reply.status(500).send({ message: 'Error creating setting', error: err.message });
    }
  }
  
  export async function getSettingByFarmIdHandler(request, reply) {
    const { farmId } = request.params;
    try {
      const setting = await request.server.prisma.setting.findUnique({
        where: { farmId },
      });
      if (!setting) return reply.status(404).send({ message: 'Not found' });
      reply.send(setting);
    } catch (err) {
      reply.status(500).send({ message: 'Error fetching setting', error: err.message });
    }
  }
  
  export async function updateSettingHandler(request, reply) {
    const { farmId } = request.params;
    const { currency, salaryBase } = request.body;
    try {
      const setting = await request.server.prisma.setting.update({
        where: { farmId },
        data: { currency, salaryBase },
      });
      reply.send(setting);
    } catch (err) {
      reply.status(500).send({ message: 'Error updating setting', error: err.message });
    }
  }
  
  // Nouvelle méthode pour supprimer un réglage
  export async function deleteSettingHandler(request, reply) {
    const { farmId } = request.params;
    try {
      const setting = await request.server.prisma.setting.delete({
        where: { farmId },
      });
      reply.send({ message: 'Setting deleted successfully', setting });
    } catch (err) {
      reply.status(500).send({ message: 'Error deleting setting', error: err.message });
    }
  }
  