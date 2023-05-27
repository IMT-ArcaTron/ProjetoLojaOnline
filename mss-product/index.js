// Imports
// dotenv - ambiente de execução
require("dotenv").config();
// express - framework de servidor
const express = require("express");
const app = express();
app.use(express.json());
// bcrypt - encriptacao 
const bcrypt = require("bcrypt");
const port = process.env.PORT || 3006;


// Mock
const products = [];

const orders = [];

// codigo sequencial de produto
let productCodeIncrement = 0;

////////////////////////////////////////////////////////////////
//                          PRODUTOS                          //
////////////////////////////////////////////////////////////////

// POST 
// criacao de novo produto
app.post("/products", async (req, res) => {
  try {
    const { name, price, type, description, urlPhoto } = req.body;

    // codigo sequencial de produto
    productCodeIncrement++

    // procura produto com codigo correspondente
    const found = products.find((product) => product.code == productCodeIncrement);

    // construtor de User
    const newProduct = {
      code: productCodeIncrement,
      name: name,
      price: price,
      type: type,
      description: description,
      urlPhoto: urlPhoto
    };

    if (!found) {
      products.push(newProduct);
      // response em json
      res.status(201).json(newProduct);
    } else {
      res.status(403);
      res.send("Product already exists");
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: "Internal Server Error" });
  }
});


// GET 
// retorno de produtos
app.get("/products", (req, res) => {
  res.status(200).type("application/json").send(products);
});

// GET 
// retorno de um produto especifico por parametro
app.get("/products/:code", (req, res) => {
  const code = req.params.code;
  const foundProduct = products.find((product) => product.code.toString() === code.toString());

  if (foundProduct) {
    res.status(200).json(foundProduct);
  } else {
    res.status(404).send(`Product not found for code: ${code}`);
  }
});

// PUT 
// atualizar dados de produtos
app.put("/products", (req, res) => {
  const { code, name, price, type, description } = req.body;

  if (!code) {
    res.status(400).send("Product code is required.");
    return;
  }

  const foundIndex = products.findIndex((product) => product.code === code);

  if (foundIndex !== -1) {
    const product = products[foundIndex];

    if (name !== undefined) {
      product.name = name;
    }

    if (price !== undefined) {
      product.price = price;
    }

    if (type !== undefined) {
      product.type = type;
    }

    if (description !== undefined) {
      product.description = description;
    }

    res.status(200).json(product);
  } else {
    res.status(401).send(`Error updating product. Product not found for code: ${code}`);
  }
});


// DELETE 
// deletar produto
app.delete("/products", async (req, res) => {
  try {
    const { code } = req.body;
    const foundIndex = products.findIndex((product) => product.code === code);

    if (foundIndex !== -1) {
      // deleta usuario
      products.splice(foundIndex, 1);
      // response em json
      res.status(200).type("application/json").send(products);
    } else {
      res.status(404).send(`Product ${code} not found`);
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: "Internal Server Error" });
  }
});

////////////////////////////////////////////////////////////////
//                          CARRINHO                          //
////////////////////////////////////////////////////////////////

// POST 
// adicionar no carrinho
app.post("/orders", async (req, res) => {
  try {
    const { productCode } = req.body;
    const foundIndexInProducts = products.findIndex((product) => product.code === productCode);
    const foundIndexInOrders = orders.findIndex((code) => code === productCode);
    if(foundIndexInProducts !== -1){
      if(foundIndexInOrders === -1){
        orders.push(productCode);
        // response em json
        res.status(201).json(productCode);
      }else{
        res.status(403);
        res.send("Product already exists in orders");
      }
    } else {
      res.status(404).send(`Product ${productCode} not found`);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: "Internal Server Error" });
  }
});


// GET 
// produtos no carrinho
app.get("/orders", (req, res) => {
  // lista de produtos no carrinho
  let myOrders =[]
  products.forEach((product) => {
    if (orders.includes(product.code)) {
      myOrders.push(product);
    }
  });
  res.status(200).json(myOrders);
});

// DELETE 
// deletar do carrinho
app.delete("/orders", async (req, res) => {
  try {
    const { productCode } = req.body;
    const foundIndex = orders.findIndex(
      (code) => code === productCode);
    if (foundIndex !== -1) {
      // deleta usuario
      orders.splice(foundIndex, 1);

      // lista de produtos no carrinho
      let myOrders =[]
      products.forEach((product) => {
        if (orders.includes(product.code)) {
          myOrders.push(product);
        }
      });

      // response em json
      res.status(200).type("application/json").send(myOrders);
    } else {
      res.status(404).send(`Product ${productCode} not found`);
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: "Internal Server Error" });
  }
});


app.listen(port, () => console.log(`Listening on port: ${port}`));
