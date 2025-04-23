-- AddForeignKey
ALTER TABLE `horarios` ADD CONSTRAINT `horarios_id_clinica_fkey` FOREIGN KEY (`id_clinica`) REFERENCES `clinicas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
