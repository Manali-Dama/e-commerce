/*
  Warnings:

  - Added the required column `package_size` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "images" TEXT[],
ADD COLUMN     "package_size" INTEGER NOT NULL;
