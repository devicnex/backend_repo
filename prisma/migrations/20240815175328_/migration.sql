-- AlterTable
ALTER TABLE `curiosidades` MODIFY `conteudo` LONGTEXT NOT NULL;

-- CreateTable
CREATE TABLE `exame` (
    `id` VARCHAR(191) NOT NULL,
    `data_exame` VARCHAR(191) NOT NULL,
    `exame` VARCHAR(191) NOT NULL,
    `clinica` VARCHAR(191) NOT NULL,
    `observacao` VARCHAR(191) NOT NULL,
    `pet_id` VARCHAR(191) NOT NULL,
    `img_laudo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `exame` ADD CONSTRAINT `exame_pet_id_fkey` FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
