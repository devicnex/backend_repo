-- CreateTable
CREATE TABLE `vacinas` (
    `id` VARCHAR(191) NOT NULL,
    `data_vacinacao` VARCHAR(191) NOT NULL,
    `vacina` VARCHAR(191) NOT NULL,
    `clinica` VARCHAR(191) NOT NULL,
    `intervalo` VARCHAR(191) NOT NULL,
    `lote` VARCHAR(191) NOT NULL,
    `observacao` VARCHAR(191) NOT NULL,
    `pet_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `vacinas` ADD CONSTRAINT `vacinas_pet_id_fkey` FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
