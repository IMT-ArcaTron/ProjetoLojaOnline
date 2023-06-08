// Imports
// dotenv - ambiente de execução
require("dotenv").config();
const axios = require ("axios")
// express - framework de servidor
const express = require("express");
const app = express();
app.use(express.json());
// bcrypt - encriptacao
const bcrypt = require("bcrypt");
const port = process.env.PORT || 3005;

const cors = require("cors");
app.use(cors());

// Mock
const users = [];
// codigo sequencial de usuario
let userCode = 0;

// POST
// criacao de novo usuario
app.post("/users", async (req, res) => {
  try {
    const { name, phone, email, password, address } = req.body;
    // email considerado como imutavel
    // usado para localizar usuarios
    const found = users.find((user) => user.email == email);
    // encriptacao de senha
    const hashPassword = await bcrypt.hash(password, 10);
    // codigo sequencial de usuario
    userCode++;
    // construtor de User
    const newUser = {
      userCode: userCode,
      name: name,
      phone: phone,
      email: email,
      password: hashPassword,
      address: address,
    };

    if (!found) {
      users.push(newUser);
      // response em json
      res.status(201).json(newUser);
      //// response em string
      //res.status(201).send(`User created: ${JSON.stringify(newUser)}`);
    } else {
      res.status(403);
      res.send("User already exists");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: "Internal Server Error" });
  }
});

// GET
// retorno de usuarios
app.get("/users", (req, res) => {
  res.status(200).type("application/json").send(users);
});

// PUT
// atualizar dados de usuarios
app.put("/users", (req, res) => {
  // procura usuario com email correspondente
  const found = users.find((user) => user.email == req.body.email);
  // obtem indice do usuario
  const index = users.indexOf(found);
  if (found) {
    // atualiza apenas os campos nao nulos
    if (req.body.name !== undefined) {
      users[index].name = req.body.name;
    }

    if (req.body.phone !== undefined) {
      users[index].phone = req.body.phone;
    }

    if (req.body.address !== undefined) {
      users[index].address = req.body.address;
    }

    //// ainda sem middleware de auth, por isso sem possibilidade de troca de senha
    // if (req.body.password !== undefined) {
    //   users[index].password = req.body.password;
    // }

    // response em json
    res.status(201).json(users[index]);
    //// response em string
    // res.status(200).send(`User updated: ${JSON.stringify(users[index])}`);
  } else {
    res.status(401).send(`Error to update this user: ${req.body.email}`);
  }
});

// DELETE
// deletar usuario
app.delete("/users", async (req, res) => {
  try {
    // procura usuario com email correspondente
    const found = users.find((user) => user.email == req.body.email);
    // obtem indice do usuario
    const index = users.indexOf(found);
    if (found) {
      // deleta usuario
      users.splice(index, 1);
      // response em json
      res.status(200).type("application/json").send(users);
    } else {
      res.status(404).send(`User ${req.body.email} not found`);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: "Internal Server Error" });
  }
});

// POST
// prototipo de login funcional
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // procura email na lista de usuarios
    const found = users.find((user) => user.email === email);
    // verifica se email foi encontrado
    if (found) {
      const passwordIsCorrect = await bcrypt.compare(password, found.password);
      // caso encontrado verifica se a senha informada esta correta
      if (passwordIsCorrect) {
        // correta = sucesso
        res.status(200).send("Login success");
      } else {
        // incorreta = email ou senha invalidos
        res.status(401).send("E-mail or password invalid");
      }
    } else {
      // email nao encontrado = email ou senha invalidos
      res.status(401).send("E-mail or password invalid");
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
