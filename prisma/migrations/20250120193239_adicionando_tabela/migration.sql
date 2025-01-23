-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `bairro` VARCHAR(191) NULL,
    `cep` VARCHAR(191) NULL,
    `cidade` VARCHAR(191) NULL,
    `complemento` VARCHAR(191) NULL,
    `cpfcnpj` VARCHAR(191) NULL,
    `endereco` VARCHAR(191) NULL,
    `estado` VARCHAR(191) NULL,
    `numero` VARCHAR(191) NULL,
    `telefone` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `img_usuario` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `banner` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `category_id` VARCHAR(191) NOT NULL,

    INDEX `products_category_id_fkey`(`category_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` VARCHAR(191) NOT NULL,
    `table` INTEGER NOT NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `draft` BOOLEAN NOT NULL DEFAULT true,
    `name` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `items` (
    `id` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `order_id` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NOT NULL,

    INDEX `items_order_id_fkey`(`order_id`),
    INDEX `items_product_id_fkey`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
    `detalhes` LONGTEXT NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `img_perfil` VARCHAR(191) NOT NULL,

    INDEX `pets_user_id_fkey`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `curiosidades` (
    `id` VARCHAR(191) NOT NULL,
    `conteudo` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vacinas` (
    `id` VARCHAR(191) NOT NULL,
    `data_vacinacao` VARCHAR(191) NOT NULL,
    `vacina` VARCHAR(191) NOT NULL,
    `clinica` VARCHAR(191) NOT NULL,
    `intervalo` VARCHAR(191) NOT NULL,
    `observacao` VARCHAR(191) NOT NULL,
    `pet_id` VARCHAR(191) NOT NULL,
    `img_lote` VARCHAR(191) NOT NULL,

    INDEX `vacinas_pet_id_fkey`(`pet_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
CREATE TABLE `publicacoes` (
    `id` VARCHAR(191) NOT NULL,
    `pet_id` VARCHAR(191) NOT NULL,
    `conteudo` LONGTEXT NOT NULL,
    `img_blog` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `publicacao_pet_id_fkey`(`pet_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `agendamentos` (
    `id` VARCHAR(191) NOT NULL,
    `pet_id` VARCHAR(191) NOT NULL,
    `id_horario` VARCHAR(191) NOT NULL,
    `id_empresa` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL DEFAULT 1,

    INDEX `agendamento_pet_id_fkey`(`pet_id`),
    INDEX `agendamento_id_horario_fkey`(`id_horario`),
    INDEX `agendamento_id_empresa_fkey`(`id_empresa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `servicos` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `tipo` INTEGER NOT NULL,
    `status` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `horarios` (
    `id` VARCHAR(191) NOT NULL,
    `tipo` INTEGER NOT NULL,
    `sub_categoria` VARCHAR(191) NULL,
    `id_empresa` VARCHAR(191) NOT NULL,
    `data_servico` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `horario_servico` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `empresa` (
    `id` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pets` ADD CONSTRAINT `pets_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vacinas` ADD CONSTRAINT `vacinas_pet_id_fkey` FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `exames` ADD CONSTRAINT `exames_pet_id_fkey` FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `publicacoes` ADD CONSTRAINT `publicacoes_pet_id_fkey` FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendamentos` ADD CONSTRAINT `agendamentos_pet_id_fkey` FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendamentos` ADD CONSTRAINT `agendamentos_id_horario_fkey` FOREIGN KEY (`id_horario`) REFERENCES `horarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `agendamentos` ADD CONSTRAINT `agendamentos_id_empresa_fkey` FOREIGN KEY (`id_empresa`) REFERENCES `empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
