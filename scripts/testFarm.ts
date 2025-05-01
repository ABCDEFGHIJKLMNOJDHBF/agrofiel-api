import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const farm = await prisma.farm.findFirst(); // ← teste si la table "Farm" est accessible
  console.log(farm);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
