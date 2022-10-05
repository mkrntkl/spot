/*
  Warnings:

  - Added the required column `coverImage` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeToMake` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "coverImage" TEXT NOT NULL,
ADD COLUMN     "timeToMake" INTEGER NOT NULL;
