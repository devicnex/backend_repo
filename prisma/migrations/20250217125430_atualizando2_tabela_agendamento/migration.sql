/*
  Warnings:

  - Added the required column `user_id` to the `agendamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `agendamentos` ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `agendamento_user_id_fkeyge` ON `agendamentos`(`user_id`);

-- AddForeignKey
ALTER TABLE `agendamentos` ADD CONSTRAINT `agendamentos_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
