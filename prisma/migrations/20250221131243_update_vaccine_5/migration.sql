/*
  Warnings:

  - A unique constraint covering the columns `[pet_id]` on the table `vacinas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `vacinas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `vacinas_pet_id_key` ON `vacinas`(`pet_id`);

-- CreateIndex
CREATE UNIQUE INDEX `vacinas_user_id_key` ON `vacinas`(`user_id`);
