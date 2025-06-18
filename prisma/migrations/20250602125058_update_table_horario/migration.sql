/*
  Warnings:

  - You are about to drop the column `sub_categoria` on the `horarios` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `horarios` table. All the data in the column will be lost.
  - Added the required column `servico` to the `horarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `horarios` DROP COLUMN `sub_categoria`,
    DROP COLUMN `tipo`,
    ADD COLUMN `servico` VARCHAR(191) NOT NULL;
