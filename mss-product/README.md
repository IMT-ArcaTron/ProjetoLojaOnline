# `mss-product`
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

# Realizando testes dos requests.

## POST para criação dos usuários
![image](https://github.com/IMT-ArcaTron/ProjetoLojaOnline/assets/100366691/ba73e687-144b-4134-9142-35c8e8acc815)

<br/>

## GET para obter usuários já cadastrados.
![image](https://github.com/IMT-ArcaTron/ProjetoLojaOnline/assets/100366691/1eae483c-f2d3-476c-8041-5d8114222ea2)


<br/>

## PUT para alterar dados de usuários.
![image](https://github.com/IMT-ArcaTron/ProjetoLojaOnline/assets/100366691/965f39db-b3a5-49e6-9eba-94ee5f854b20)

<br/>

## DELETE para deletar usuários criados.
![image](https://github.com/IMT-ArcaTron/ProjetoLojaOnline/assets/100366691/0222657e-5f10-41b3-98e7-b9f442a92fb0)

<br/>

## POST para realizar login.
![image](https://github.com/IMT-ArcaTron/ProjetoLojaOnline/assets/100366691/14246537-ad37-4031-9751-82adc6d0eb98)

<br/>
