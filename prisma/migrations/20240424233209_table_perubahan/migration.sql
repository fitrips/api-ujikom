/*
  Warnings:

  - You are about to drop the `daily_intake` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `daily_intake` DROP FOREIGN KEY `daily_intake_userId_fkey`;

-- DropTable
DROP TABLE `daily_intake`;

-- CreateTable
CREATE TABLE `amount` (
    `id` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `amount` ADD CONSTRAINT `amount_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
