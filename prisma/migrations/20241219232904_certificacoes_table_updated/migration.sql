/*
  Warnings:

  - You are about to drop the column `ano_obtencao` on the `certificacoes` table. All the data in the column will be lost.
  - You are about to drop the column `instituicoes` on the `certificacoes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `certificacoes` DROP COLUMN `ano_obtencao`,
    DROP COLUMN `instituicoes`;
