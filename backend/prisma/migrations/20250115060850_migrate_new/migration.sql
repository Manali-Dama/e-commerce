/*
  Warnings:

  - You are about to drop the column `ereatedAt` on the `users` table. All the data in the column will be lost.
  - Added the required column `createdAt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "ereatedAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;
