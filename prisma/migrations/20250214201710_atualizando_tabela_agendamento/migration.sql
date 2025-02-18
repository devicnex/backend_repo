/*
  Warnings:

  - Added the required column `horario_agendamento` to the `agendamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agendamentos` ADD COLUMN `data_agendamento` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `horario_agendamento` VARCHAR(191) NOT NULL;
