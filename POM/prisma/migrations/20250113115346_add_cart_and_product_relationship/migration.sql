/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "status" AS ENUM ('order_recieved', 'conformed', 'dispatched', 'delivered', 'cancelled');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "admin" (
    "admin_id" SERIAL NOT NULL,
    "mail" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("admin_id")
);

-- CreateTable
CREATE TABLE "cart" (
    "cart_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("cart_id")
);

-- CreateTable
CREATE TABLE "cartItems" (
    "id" SERIAL NOT NULL,
    "cart_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "cartItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer" (
    "customer_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contact" INTEGER NOT NULL,
    "mail" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "pincode" INTEGER NOT NULL,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "orders" (
    "order_id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "products" TEXT[],
    "bill_amount" DOUBLE PRECISION NOT NULL,
    "order_status" "status" NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "products" (
    "ws_Id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "package_size" INTEGER NOT NULL,
    "tags" TEXT[],
    "images" TEXT[],
    "description" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("ws_Id")
);

-- AddForeignKey
ALTER TABLE "cartItems" ADD CONSTRAINT "cartItems_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "cart"("cart_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartItems" ADD CONSTRAINT "cartItems_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("ws_Id") ON DELETE RESTRICT ON UPDATE CASCADE;
