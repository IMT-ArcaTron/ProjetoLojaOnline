# `mss-product`
### Microserviço de cadastro, armazenamento e gerenciamento de produtos
### Utilizado para adicionar e remover produtos do carrinho do cliente 

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

## Escolher modo Mock ou Pg
### O modo `Mock` utiliza apenas um array de objetos, não necessita de banco de dados
### O modo `Pg` é o que faz a conexão com o banco de dados
### Para escolher o modo comente/descomente as linhas indicadas abaixo no arquivo `index.js` da pasta `mss_product` conforme desejado:
```js
// Switch entre Mock e DB, descomentar o que deseja usar
// Mock repository
const productRepository = new ProductRepositoryMock();
const orderRepository = new OrderRepositoryMock(productRepository);
// Pg repository
const productRepository = new ProductRepositoryPg();
const orderRepository = new OrderRepositoryPg(productRepository);
```


<br/>
<br/>

# 💻 Como Usar
### O microserviço sobe na porta `3006`
<br/>

## JSON
### Formatação geral de JSON para requests:
``` JSON
{
  "name": "Produto 1",
  "price": 100.00,
  "type": "type",
  "description": "description",
  "urlPhoto": "./images/produto1.jpg"
}
```

<br/>
<br/>
 
 # 📱 Request para o produto

## POST - Criação de produto

### Realizar uma operação POST com a estrutura especificada no tópico *JSON* acima na URL  `localhost:3006/products`

<br/>

## GET - Obter produtos cadastrados 
### Realizar uma operação GET na URL  `localhost:3006/products`

<br/>

## GET - Obter produto cadastrado especifico
### Realizar uma operação GET na URL  `localhost:3006/products/:code`
>":code" trata-se do numero do codigo do produto em especifico

<br/>

## DELETE - Deletar produto
### Realizar uma operação DELETE com a estrutura especificada abaixo na URL `localhost:3006/products`
### Para deletar necessita-se apenas colocar o "code" do produto no `body`:
```json
{
  "code":83093746
}
```

<br/>

## PUT - Atualizar produto
### Realizar uma operação PUT coms a estrutura especificada abaixo na URL `localhost:3006/products`
```json
{
  "code":25625954,
  "name": "new name",
  "price": 112.99,
  "type": "new type",
  "description": "new description",
  "urlPhoto": "./images/new_produto.jpg"
}
```

<br/>

# 🚧 Realizando testes dos requests.

## POST

<br/>

## GET 

<br/>

<br/>

## DELETE 
<br/>


<br/>
<br/>

# 🛒 Request para o carrinho

## POST - adição de um produto no carrinho

### Realizar uma operação POST com a estrutura especificada no abaixo na URL  `localhost:3006/orders`
```json
{
  "productCode":"06276100"
}
```

<br/>

## GET - Obter produtos do carrinho
### Realizar uma operação GET na URL  `localhost:3006/orders`
<br/>

<br/>

## DELETE - Deletar produto do carrinho
### Realizar uma operação DELETE com a estrutura especificada abaixo na URL `localhost:3006/orders`
```json
{
  "productCode":"51796874"
}
```

<br/>

<br/>

# 🚧 Realizando testes dos requests

## POST

<br/>

## GET 

<br/>


## DELETE 
<br/>

