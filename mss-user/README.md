# `mss-user`
### Microserviço de cadastro, armazenamento e gerenciamento de usuários

<br/>

### Utilizado para realizar login

<br/>
<br/>

# 🏁 Início Rápido
### Clonar este repositório:
``` bash
git clone [this repository]
```
### Acessar diretório:
``` bash
cd mss-user
```
### Instalar módulos NodeJS:
``` bash
npm install
```

### Iniciar microserviço:
``` bash
npm start
```

<br/>
<br/>

# 💻 Como Usar
### O microserviço sobe na porta `3005`
<br/>

## JSON
### Formatação de JSON para requests:
``` JSON
{
  "name": "Joao Silva",
  "phone": "(11) 99999-9999",
  "email": "joao.silva@email.com",
  "password": "12345",
  "address": "Rua do Limoeiro, 150" 
}
```
<br/>


## POST - Criação de usuário

### Realizar uma operação POST com a estrutura especificada no tópico *JSON* acima na URL  `localhost:3005/users`
>O e-mail informado não pode já ter sido usado por outro usuário

<br/>

## GET - Obter usuários cadastrados 
### Realizar uma operação GET na URL  `localhost:3005/users`
<br/>

## PUT - Alterar dados de usuario
### Realizar uma operação PUT com a estrutura especificada no tópico *JSON* acima na URL  `localhost:3005/users`
>Para alterar os dados de um usuário é necessario informar um e-mail previamente cadastrado na request
>>E-mail e senha não podem ser alterados

<br/>

## DELETE - Deletar usuário
### Realizar uma operação DELETE com a estrutura especificada no tópico *JSON* acima na URL `localhost:3005/users`
>Para alterar os dados de um usuário é necessario informar um e-mail previamente cadastrado na request

<br/>

## POST - Login
### Realizar uma operação POST com a estrutura especificada abaixo na URL  `localhost:3005/login`
```JSON
{
  "email": "joao.silva@email.com",
  "password": "12345"
}
```
>Para realizar um login é necessario informar um e-mail previamente cadastrado e a senha correta na request

<br/>