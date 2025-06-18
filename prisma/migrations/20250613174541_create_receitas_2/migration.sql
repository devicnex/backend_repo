/*
  Warnings:

  - You are about to drop the `Receitas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Receitas`;

-- CreateTable
CREATE TABLE `receitas` (
    `id` VARCHAR(191) NOT NULL,
    `tutorNome` VARCHAR(191) NOT NULL,
    `tutorCPF` VARCHAR(191) NOT NULL,
    `petNome` VARCHAR(191) NOT NULL,
    `especie` VARCHAR(191) NOT NULL,
    `raca` VARCHAR(191) NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,
    `peso` VARCHAR(191) NOT NULL,
    `uso` VARCHAR(191) NOT NULL,
    `pdfUrl` VARCHAR(191) NOT NULL,
    `dataCriacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
