-- CreateTable
CREATE TABLE `data_disponivel` (
    `id` VARCHAR(191) NOT NULL,
    `clinica` VARCHAR(191) NOT NULL,
    `data_servico` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `horario_servico` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
