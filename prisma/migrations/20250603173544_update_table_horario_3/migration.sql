/*
  Warnings:

  - You are about to drop the column `servico` on the `horarios` table. All the data in the column will be lost.
  - Added the required column `id_servico` to the `horarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `horarios` DROP COLUMN `servico`,
    ADD COLUMN `id_servico` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `horarios` ADD CONSTRAINT `horarios_id_servico_fkey` FOREIGN KEY (`id_servico`) REFERENCES `servicos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
