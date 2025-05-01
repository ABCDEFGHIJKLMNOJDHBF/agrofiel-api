export async function farmRoutes(fastify) {
    fastify.post('/farms', async (request, reply) => {
      const { name } = request.body;
      const farm = await fastify.prisma.farm.create({
        data: { name },
      });
      return farm;
    });
  }
  