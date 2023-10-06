#!/bin/bash

# Iniciar os contêineres Docker para cada projeto

# Projeto 1: barramento-eventos
echo "Iniciando barramento-eventos..."
(cd barramento-eventos && docker-compose up -d)

# Projeto 2: mss-user
echo "Iniciando mss-user..."
(cd mss-user && docker-compose up -d)

# Projeto 3: mss-product
echo "Iniciando mss-product..."
(cd mss-product && docker-compose up -d)

# Projeto 4: front-loja-online
echo "Atualizando front-loja-online..."
(cd frontEnd && cd front-loja-online && npm install && npm run build)

# Iniciar o contêiner Docker para o projeto front-loja-online
echo "Iniciando front-loja-online..."
(cd frontEnd && cd front-loja-online && docker-compose up -d)

echo "Todos os projetos foram iniciados com sucesso!"
