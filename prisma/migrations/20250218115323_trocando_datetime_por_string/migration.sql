/*
  Warnings:

  - Made the column `data_agendamento` on table `agendamentos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `data_servico` on table `horarios` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `agendamentos` MODIFY `data_agendamento` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `horarios` MODIFY `data_servico` VARCHAR(191) NOT NULL;
