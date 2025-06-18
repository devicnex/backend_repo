/*
  Warnings:

  - You are about to drop the column `tipo` on the `servicos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[seq_id]` on the table `servicos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_clinica` to the `servicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seq_id` to the `servicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tempo` to the `servicos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `servicos` DROP COLUMN `tipo`,
    ADD COLUMN `id_clinica` VARCHAR(191) NOT NULL,
    ADD COLUMN `seq_id` INTEGER NOT NULL,
    ADD COLUMN `tempo` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `servicos_seq_id_key` ON `servicos`(`seq_id`);

-- CreateIndex
CREATE INDEX `servico_id_clinica_fkey` ON `servicos`(`id_clinica`);

-- AddForeignKey
ALTER TABLE `servicos` ADD CONSTRAINT `servicos_id_clinica_fkey` FOREIGN KEY (`id_clinica`) REFERENCES `clinicas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
