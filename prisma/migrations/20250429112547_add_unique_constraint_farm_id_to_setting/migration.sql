/*
  Warnings:

  - You are about to drop the column `description` on the `Setting` table. All the data in the column will be lost.
  - You are about to drop the column `key` on the `Setting` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Setting` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[farmId]` on the table `Setting` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `farmId` to the `Setting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salaryBase` to the `Setting` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Setting_key_key";

-- AlterTable
ALTER TABLE "Setting" DROP COLUMN "description",
DROP COLUMN "key",
DROP COLUMN "value",
ADD COLUMN     "currency" TEXT NOT NULL DEFAULT 'DHs',
ADD COLUMN     "farmId" TEXT NOT NULL,
ADD COLUMN     "salaryBase" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "Farm" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Farm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Setting_farmId_key" ON "Setting"("farmId");

-- AddForeignKey
ALTER TABLE "Setting" ADD CONSTRAINT "Setting_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
