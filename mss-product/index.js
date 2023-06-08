// Imports
// dotenv - ambiente de execução
require("dotenv").config();
// express - framework de servidor
const express = require("express");
const app = express();
app.use(express.json());
const axios = require ("axios")
// bcrypt - encriptacao
const port = process.env.PORT || 3006;
eventsPort = process.env.EVENTS_PORT || 3100;

// Mock require
const ProductRepositoryMock = require("./repositories/productRepositoryMock");
const OrderRepositoryMock = require("./repositories/orderRepositoryMock");

// DB (pg) require
const ProductRepositoryPg = require("./repositories/productRepositoryPg");
const OrderRepositoryPg = require("./repositories/orderRepositoryPg");

// Switch entre Mock e DB, descomentar o que deseja usar
// Mock repository
const productRepository = new ProductRepositoryMock();
const orderRepository = new OrderRepositoryMock(productRepository);
// Pg repository
// const productRepository = new ProductRepositoryPg();
// const orderRepository = new OrderRepositoryPg(productRepository);

////////////////////////////////////////////////////////////////
//                          PRODUTOS                          //
////////////////////////////////////////////////////////////////

// POST
// criacao de novo produto
app.post("/products", async (req, res) => {
  try {
    const { name, price, type, description, urlPhoto } = req.body;

    // gera um código aleatório para o produto
    let productCode = Math.random().toString().split(".")[1].slice(0, 8);

    // procura produto com codigo correspondente
    const found = await productRepository.getByCode(productCode);

    // construtor de Product
    const newProduct = {
      code: productCode,
      name: name,
      price: price,
      type: type,
      description: description,
      urlPhoto: urlPhoto,
    };

    if (found.length === 0) {
      await productRepository.create(newProduct);
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
app.get("/products", async (req, res) => {
  let products = await productRepository.getAll();
  console.log(products);
  res.status(200).json(products);
});

// GET
// retorno de um produto especifico por parametro
app.get("/products/:code", async (req, res) => {
  const code = req.params.code;
  const foundProduct = await productRepository.getByCode(code);
  console.log(foundProduct);
  if (foundProduct) {
    res.status(200).json(foundProduct);
  } else {
    res.status(404).send(`Product not found for code: ${code}`);
  }
});

// PUT
// atualizar dados de produtos
app.put("/products", (req, res) => {
  const { code, name, price, type, description, urlPhoto } = req.body;

  if (!code) {
    res.status(400).send("Product code is required.");
    return;
  }

  const found = productRepository.getByCode(code);

  if (found.length !== 0) {
    productRepository.update({ code, name, price, type, description, urlPhoto });
    res.status(200).json(productRepository.getByCode(code));
  } else {
    res
      .status(401)
      .send(`Error updating product. Product not found for code: ${code}`);
  }
});

// DELETE
// deletar produto
app.delete("/products", async (req, res) => {
  try {
    const { code } = req.body;
    const found = productRepository.getByCode(code.toString());

    if (found.length !== 0) {
      // deleta usuario
      productRepository.delete(code.toString());
      // response em json
      res.status(200).type("application/json").send(productRepository.getAll());
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
    const foundInProducts =
      productRepository.getByCode(productCode).length !== 0;

    if (foundInProducts) {
      orderRepository.add(productCode);
      // response em json
      res.status(201).json(productCode);

      await axios.post(`http://localhost:${eventsPort}/events`, {
        type: 'addingToOrders',
        data: {
            product: productRepository.getByCode(productCode)
        }
    })
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
app.get("/orders", async (req, res) => {
  // lista de produtos no carrinho
  let myOrders = await orderRepository.getAll();
  console.log(myOrders);
  res.status(200).json(myOrders);
});

// DELETE
// deletar do carrinho
app.delete("/orders", async (req, res) => {
  try {
    const { productCode } = req.body;
    const found = orderRepository.getByCode(productCode).length !== 0;

    await axios.post(`http://localhost:${eventsPort}/events`, {
        type: 'removingOfOrders',
        data: {
            product: found[0]
        }
    })

    if (found.length !== 0) {
      // deleta do carrinho
      orderRepository.remove(productCode);
      // lista de produtos no carrinho
      let myOrders = orderRepository.getAll();

      // response em json
      res.status(200).json(myOrders);
    } else {
      res.status(404).send(`Product ${productCode} not found`);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: "Internal Server Error" });
  }
});

app.post('/events', (req,res) => {
  const event = req.body
  console.log(req.body)
  res.status(200).send({msg: 'ok'}) 
})

app.listen(port, () => console.log(`Listening on port: ${port}`));
