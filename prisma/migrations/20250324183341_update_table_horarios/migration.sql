/*
  Warnings:

  - You are about to drop the column `id_empresa` on the `horarios` table. All the data in the column will be lost.
  - Added the required column `id_clinica` to the `horarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `horarios` DROP COLUMN `id_empresa`,
    ADD COLUMN `id_clinica` VARCHAR(191) NOT NULL;
