/*
  Warnings:

  - A unique constraint covering the columns `[seq_id]` on the table `veterinarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `seq_id` to the `veterinarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `veterinarios` ADD COLUMN `seq_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `veterinarios_seq_id_key` ON `veterinarios`(`seq_id`);
