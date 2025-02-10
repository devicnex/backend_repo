/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `expo_token` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `expo_token_user_id_key` ON `expo_token`(`user_id`);
