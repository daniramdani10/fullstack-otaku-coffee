/*
  Warnings:

  - Added the required column `rating` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` ADD COLUMN `rating` DOUBLE NOT NULL,
    ADD COLUMN `tag` VARCHAR(100) NOT NULL;
