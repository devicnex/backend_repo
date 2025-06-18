-- CreateTable
CREATE TABLE `ConfigAgenda` (
    `id` VARCHAR(191) NOT NULL,
    `id_clinica` VARCHAR(191) NOT NULL,
    `dia_semana` INTEGER NOT NULL,
    `inicio_turno` VARCHAR(191) NOT NULL,
    `fim_turno` VARCHAR(191) NOT NULL,
    `servico` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
