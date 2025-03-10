/*
  Warnings:

  - Added the required column `user_id` to the `vacinas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vacinas` ADD COLUMN `user_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `vacinas_user_id_fkey` ON `vacinas`(`user_id`);

-- AddForeignKey
ALTER TABLE `vacinas` ADD CONSTRAINT `vacinas_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
