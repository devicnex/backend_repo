/*
  Warnings:

  - A unique constraint covering the columns `[seq_id]` on the table `horarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `seq_id` to the `horarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `horarios` ADD COLUMN `seq_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `horarios_seq_id_key` ON `horarios`(`seq_id`);
