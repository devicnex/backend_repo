/*
  Warnings:

  - Added the required column `id_servico` to the `agendamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agendamentos` ADD COLUMN `id_servico` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `agendamento_id_servico_fket` ON `agendamentos`(`id_servico`);

-- AddForeignKey
ALTER TABLE `agendamentos` ADD CONSTRAINT `agendamentos_id_servico_fkey` FOREIGN KEY (`id_servico`) REFERENCES `servicos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
