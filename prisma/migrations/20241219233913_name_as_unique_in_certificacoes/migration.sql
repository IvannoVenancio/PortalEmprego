/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Certificacoes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Certificacoes_nome_key` ON `Certificacoes`(`nome`);
