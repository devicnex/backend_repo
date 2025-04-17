/*
  Warnings:

  - You are about to drop the column `id_empresa` on the `agendamentos` table. All the data in the column will be lost.
  - Added the required column `id_clinica` to the `agendamentos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `agendamentos` DROP FOREIGN KEY `agendamentos_id_empresa_fkey`;

-- AlterTable
ALTER TABLE `agendamentos` DROP COLUMN `id_empresa`,
    ADD COLUMN `id_clinica` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `agendamento_id_clinica_fkey` ON `agendamentos`(`id_clinica`);

-- AddForeignKey
ALTER TABLE `agendamentos` ADD CONSTRAINT `agendamentos_id_clinica_fkey` FOREIGN KEY (`id_clinica`) REFERENCES `clinicas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
