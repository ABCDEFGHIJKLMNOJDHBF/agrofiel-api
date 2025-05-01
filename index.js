// index.js
import Fastify from 'fastify';
import prismaPlugin from './plugins/prisma.js';
import { settingRoutes } from './routes/settingRoutes.js';

const fastify = Fastify({ logger: true });

// Enregistrer Prisma
await fastify.register(prismaPlugin);

// Enregistrer les routes
await fastify.register(settingRoutes);

// Lancer le serveur
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
