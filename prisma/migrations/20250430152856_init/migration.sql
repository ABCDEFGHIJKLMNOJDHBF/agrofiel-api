/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `FarmOwner` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ownerId` to the `Farm` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FarmOwner" DROP CONSTRAINT "FarmOwner_farmId_fkey";

-- DropForeignKey
ALTER TABLE "FarmOwner" DROP CONSTRAINT "FarmOwner_userId_fkey";

-- AlterTable
ALTER TABLE "Farm" ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "role",
DROP COLUMN "updatedAt";

-- DropTable
DROP TABLE "FarmOwner";

-- DropEnum
DROP TYPE "Role";

-- AddForeignKey
ALTER TABLE "Farm" ADD CONSTRAINT "Farm_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
