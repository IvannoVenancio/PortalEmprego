# Esboço do projeto.
# URL: http://localhost:3000

# Para instalar o prisma:
1º Executar *npm install prisma* no terminal
2ª Executar *npm install @prisma/client* no terminal
3º Executar *npx prisma init*


# Para conectar ao mysql:

1º Certificar de que já tem as dependências mysql e prisma instaladas
2ª Certificar de que já tem o mysql preparado (pode usar a conta "root")
3ª No ficheiro ".env", alterar a variável "DATABASE_URL" consoante sua conta mysql
4º Rodar o comando *npx prisma migrate dev*
5ª Verificar a conexão acessando à databse no mysql
