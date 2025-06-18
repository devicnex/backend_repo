/*
  Warnings:

  - Added the required column `id_veterinario` to the `receitas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `receitas` ADD COLUMN `id_veterinario` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `receitas` ADD CONSTRAINT `receitas_id_veterinario_fkey` FOREIGN KEY (`id_veterinario`) REFERENCES `veterinarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
