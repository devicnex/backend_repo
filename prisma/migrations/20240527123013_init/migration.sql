-- CreateTable
CREATE TABLE `pets` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `apelido` VARCHAR(191) NOT NULL,
    `data_nascimento` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `especie` VARCHAR(191) NOT NULL,
    `idade` VARCHAR(191) NOT NULL,
    `meses` VARCHAR(191) NOT NULL,
    `raca` VARCHAR(191) NOT NULL,
    `chip` VARCHAR(191) NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,
    `temperamento` VARCHAR(191) NOT NULL,
    `tamanho` VARCHAR(191) NOT NULL,
    `detalhes` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pets` ADD CONSTRAINT `pets_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
