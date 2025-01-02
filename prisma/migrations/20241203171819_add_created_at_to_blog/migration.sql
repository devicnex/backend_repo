/*
  Warnings:

  - You are about to drop the `exame` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `exame` DROP FOREIGN KEY `exame_pet_id_fkey`;

-- AlterTable
ALTER TABLE `pets` MODIFY `detalhes` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `img_usuario` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `exame`;

-- CreateTable
CREATE TABLE `exames` (
    `id` VARCHAR(191) NOT NULL,
    `data_exame` VARCHAR(200) NOT NULL,
    `exame` VARCHAR(200) NOT NULL,
    `clinica` VARCHAR(200) NOT NULL,
    `observacao` VARCHAR(200) NOT NULL,
    `pet_id` VARCHAR(200) NOT NULL,
    `img_laudo` VARCHAR(200) NOT NULL,

    INDEX `exame_pet_id_fkey`(`pet_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `blog` (
    `id` VARCHAR(191) NOT NULL,
    `pet_id` VARCHAR(191) NOT NULL,
    `conteudo` LONGTEXT NOT NULL,
    `img_blog` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `blog_pet_id_fkey`(`pet_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `exames` ADD CONSTRAINT `exames_pet_id_fkey` FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `blog` ADD CONSTRAINT `blog_pet_id_fkey` FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
