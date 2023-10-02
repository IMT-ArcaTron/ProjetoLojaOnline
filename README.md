# Projeto Loja Online ArcaTron
---
#### Versão: 2.0
>Este README.md engloba as duas partes do projeto
---

<br/>

# 👨‍💻 Grupo:
### Ahmad Kheder Mahfoud  
##### RA: 20.01323-0
### Caio Bartolozzi Bastos Godoy de Toledo
##### RA: 20.01430-9
### Caio Rabinovich Panes Brunholi
##### RA: 20.01285-3
### Felippe Onishi 
##### RA: 20.00255-6

<br/>
<br/>
<br/>

---

# 🏁 **PARTE 1 DO PROJETO**
# 🚀 Primeiro Release
## `mss-user`
### - Microserviço de cadastro, armazenamento e gerenciamento de usuários


### - Utilizado para realizar login

<br/>
<br/>

# 🚀 Segundo Release
## `mss-user`
### - Microserviço de cadastro, armazenamento e gerenciamento de usuários
### - Utilizado para realizar login
### - Integração com o banco de dados ainda não implementada
> Para mais informações, ler README na pasta do microserviço

<br/>

## `mss-product`
### - Microserviço de cadastro, armazenamento e gerenciamento de produtos
### - Utilizado para adicionar e remover produtos do carrinho do cliente 
> Para mais informações ler README na pasta do microserviço

### - Este microserviço inicia a implementação do Banco de Dados Postgres
> Para mais informações ler o README na pasta DB

<br/>

## `frontEnd`
### - Esqueleto do front end
### - Ainda não implementado com o restante do sistema
> Para mais informações ler README na pasta frontEnd 

<br/>
<br/>

# 🚀 Terceiro Release
## `barramento de eventos`
### - Barramento de eventos realiza a comunicação entre os microserviços 
### - Recebe informações sobre os pedidos adicionados ao carrinho, associando o produto no carrinho com o usuário
> Para mais informações ler o README na pasta `barramento-eventos`

<br/>

## `Integração frontEnd - backEnd`
### - Realizada a integração entre o Front-End e o Back-end
### - Agora é possível realizar os testes das requisições dos microserviços utilizando o console do navegador

<br/>
<br/>

# 🚀 Último Release
## `Integração final frontEnd - backEnd`
### - Realizada a integração final entre o fronteEnd e o backEnd
### - É possível acessar o site, fazer login e/ou criar conta. Após o login o usuário é redirecionado para a loja
### - Agora é possível navegar entre os produtos pré-cadastrados, adicioná-los e removê-los do carrinho. Por fim ver todos os itens do carrinho e encerrar a compra

## `Video do funcionamento`
 > # https://youtu.be/UPx78zR-3AM

<br/>
<br/>
<br/>
<br/>

 ---

# 🏁 **PARTE 2 DO PROJETO**
# 🚀 Primeiro Release
> Agora é necessário iniciar o barramento de eventos antes dos demais microserviços
## Atualização de `mss-user`
### - Microserviço de cadastro, armazenamento e gerenciamento de usuários agora envia todos os eventos para o barramento de eventos e recupera eventos armazenados no barramento ao iniciar

## Dockerização de `mss-user`
### - ESCREVER