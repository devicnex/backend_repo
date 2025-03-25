-- CreateTable
CREATE TABLE `clinicas` (
    `id` VARCHAR(191) NOT NULL,
    `responsavel` VARCHAR(191) NOT NULL,
    `nomeRazaoSocial` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `cnjp` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `uf` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `complemento` VARCHAR(191) NULL,
    `img_clinica` VARCHAR(191) NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
