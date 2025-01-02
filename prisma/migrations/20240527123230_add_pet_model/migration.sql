/*
  Warnings:

  - Added the required column `img_perfil` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pets` ADD COLUMN `img_perfil` VARCHAR(191) NOT NULL;
