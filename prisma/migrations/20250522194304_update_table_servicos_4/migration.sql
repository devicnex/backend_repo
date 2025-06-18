/*
  Warnings:

  - You are about to drop the column `clinica_id` on the `servicos` table. All the data in the column will be lost.
  - Added the required column `id_clinica` to the `servicos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `servicos` DROP FOREIGN KEY `servicos_clinica_id_fkey`;

-- AlterTable
ALTER TABLE `servicos` DROP COLUMN `clinica_id`,
    ADD COLUMN `id_clinica` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `servicos` ADD CONSTRAINT `servicos_id_clinica_fkey` FOREIGN KEY (`id_clinica`) REFERENCES `clinicas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
