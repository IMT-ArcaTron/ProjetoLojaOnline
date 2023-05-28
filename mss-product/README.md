# `mss-product`
### Microserviço de cadastro, armazenamento e gerenciamneto de produto

<br/>

### Utilizado para realizar gerenciamento de produtos

<br/>
<br/>

# 🏁 Início Rápido
### Clonar este repositório:
``` bash
git clone [this repository]
```
### Acessar diretório:
``` bash
cd mss-product
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
### O microserviço sobe na porta `3006`
<br/>

## JSON
### Formatação de JSON para requests:
``` JSON
{
  "code": 1,
  "name": "Produto 1",
  "price": 100.00,
  "type": "type",
  "description": "description",
  "urlPhoto": "./images/produto1.jpg"
}
```
<br/>
 
 # 📱 Request para o produto

## POST - Criação de produto

### Realizar uma operação POST com a estrutura especificada no tópico *JSON* acima na URL  `localhost:3006/products`

<br/>

## GET - Obter produtos cadastrados 
### Realizar uma operação GET na URL  `localhost:3006/products`
<br/>

<br/>

## GET - Obter produto cadastrado especifico
### Realizar uma operação GET na URL  `localhost:3006/products/:code`
>":code" trata-se do numero do codigo do produto em especifico
<br/>

<br/>

## DELETE - Deletar produto
### Realizar uma operação DELETE com a estrutura especificada no tópico *JSON* acima na URL `localhost:3006/products`

>Para deletar necessita-se apenas colocar o "code" do produto no "body"

<br/>

  # 🛒 Request para o carrinho

## POST - adição de um produto no carrinho

### Realizar uma operação POST com a estrutura especificada no tópico *JSON* acima na URL  `localhost:3006/orders`

<br/>

## GET - Obter produtos do carrinho
### Realizar uma operação GET na URL  `localhost:3006/orders`
<br/>

<br/>

## DELETE - Deletar produto do carrinho
### Realizar uma operação DELETE com a estrutura especificada no tópico *JSON* acima na URL `localhost:3006/orders`

>Para deletar necessita-se apenas colocar o "productCode" do produto no "body"


<br/>

<br/>

# Realizando testes dos requests.

## POST

<br/>

## GET 

<br/>

<br/>

## DELETE 
<br/>

