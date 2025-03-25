/*
  Warnings:

  - You are about to drop the column `nomeRazaoSocial` on the `clinicas` table. All the data in the column will be lost.
  - Added the required column `razaoSocial` to the `clinicas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clinicas` DROP COLUMN `nomeRazaoSocial`,
    ADD COLUMN `razaoSocial` VARCHAR(191) NOT NULL;
