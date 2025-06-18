-- DropIndex
DROP INDEX `servicos_seq_id_key` ON `servicos`;

-- AlterTable
ALTER TABLE `servicos` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `status` INTEGER NOT NULL DEFAULT 1;
