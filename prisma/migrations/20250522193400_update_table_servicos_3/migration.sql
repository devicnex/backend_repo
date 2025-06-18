/*
  Warnings:

  - You are about to drop the column `id_clinica` on the `servicos` table. All the data in the column will be lost.
  - Added the required column `clinica_id` to the `servicos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `servicos` DROP FOREIGN KEY `servicos_id_clinica_fkey`;

-- AlterTable
ALTER TABLE `servicos` DROP COLUMN `id_clinica`,
    ADD COLUMN `clinica_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `servicos` ADD CONSTRAINT `servicos_clinica_id_fkey` FOREIGN KEY (`clinica_id`) REFERENCES `clinicas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
