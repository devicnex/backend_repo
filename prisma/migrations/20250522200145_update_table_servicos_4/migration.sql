/*
  Warnings:

  - You are about to drop the column `nome` on the `servicos` table. All the data in the column will be lost.
  - Added the required column `servico` to the `servicos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `servicos` DROP COLUMN `nome`,
    ADD COLUMN `servico` VARCHAR(191) NOT NULL;
