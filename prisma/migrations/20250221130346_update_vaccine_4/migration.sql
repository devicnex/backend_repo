/*
  Warnings:

  - Added the required column `proxima_aplicacao` to the `vacinas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vacinas` ADD COLUMN `proxima_aplicacao` VARCHAR(191) NOT NULL;
