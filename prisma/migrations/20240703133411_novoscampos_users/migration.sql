/*
  Warnings:

  - Added the required column `bairro` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complemento` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpfcnpj` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `bairro` VARCHAR(191) NOT NULL,
    ADD COLUMN `cep` VARCHAR(191) NOT NULL,
    ADD COLUMN `cidade` VARCHAR(191) NOT NULL,
    ADD COLUMN `complemento` VARCHAR(191) NOT NULL,
    ADD COLUMN `cpfcnpj` VARCHAR(191) NOT NULL,
    ADD COLUMN `endereco` VARCHAR(191) NOT NULL,
    ADD COLUMN `estado` VARCHAR(191) NOT NULL,
    ADD COLUMN `numero` VARCHAR(191) NOT NULL,
    ADD COLUMN `telefone` VARCHAR(191) NOT NULL;
