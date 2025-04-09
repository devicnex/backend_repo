/*
  Warnings:

  - You are about to drop the column `crm` on the `veterinarios` table. All the data in the column will be lost.
  - Added the required column `cpf` to the `veterinarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `crmv` to the `veterinarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `veterinarios` DROP COLUMN `crm`,
    ADD COLUMN `cpf` VARCHAR(191) NOT NULL,
    ADD COLUMN `crmv` VARCHAR(191) NOT NULL;
