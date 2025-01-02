/*
  Warnings:

  - You are about to drop the column `status` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lote` on the `vacinas` table. All the data in the column will be lost.
  - Added the required column `img_lote` to the `vacinas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `status`,
    MODIFY `bairro` VARCHAR(191) NULL,
    MODIFY `cep` VARCHAR(191) NULL,
    MODIFY `cidade` VARCHAR(191) NULL,
    MODIFY `complemento` VARCHAR(191) NULL,
    MODIFY `cpfcnpj` VARCHAR(191) NULL,
    MODIFY `endereco` VARCHAR(191) NULL,
    MODIFY `estado` VARCHAR(191) NULL,
    MODIFY `numero` VARCHAR(191) NULL,
    MODIFY `telefone` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `vacinas` DROP COLUMN `lote`,
    ADD COLUMN `img_lote` VARCHAR(191) NOT NULL;
