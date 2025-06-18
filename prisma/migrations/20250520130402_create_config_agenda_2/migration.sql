/*
  Warnings:

  - You are about to drop the `ConfigAgenda` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `ConfigAgenda`;

-- CreateTable
CREATE TABLE `configAgenda` (
    `id` VARCHAR(191) NOT NULL,
    `id_clinica` VARCHAR(191) NOT NULL,
    `dia_semana` INTEGER NOT NULL,
    `inicio_turno` VARCHAR(191) NOT NULL,
    `fim_turno` VARCHAR(191) NOT NULL,
    `servico` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
