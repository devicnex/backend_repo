-- CreateTable
CREATE TABLE `veterinarios` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `crm` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `clinica_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `veterinarios` ADD CONSTRAINT `veterinarios_clinica_id_fkey` FOREIGN KEY (`clinica_id`) REFERENCES `clinicas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
