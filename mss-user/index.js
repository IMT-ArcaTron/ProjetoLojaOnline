// Imports
// dotenv - ambiente de execução
require("dotenv").config();
const axios = require("axios")
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


// Variables
// buffers para comunicar os resultados entre funções por meio de varáveis globais
var newUserBuffer = {}
var editUserBuffer = {}
var deleteUserBuffer = {}

// Functions
// Funções do código
const funcoes = {
  createUser: async (req, res) => {
    // console.log(req.body)
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
      try { res.status(201).json(newUser) } catch { }
      newUserBuffer = newUser
    } else {
      res.status(403);
      res.send("User already exists");
    }
  },

  editUser: (req, res) => {
    console.log(req.body)
    // procura usuario com email correspondente
    const found = users.find((user) => user.email == req.body.email);
    // obtem indice do usuario
    const index = users.indexOf(found);
    // console.log(users)  //debug
    // console.log(index) //debug
    // console.log(users[index]) //debug
    // atualiza apenas os campos nao nulos
    // if (req.body.name !== undefined) {
    //   users[index].name = req.body.name;
    // }
    // if (req.body.phone !== undefined) {
    //   users[index].phone = req.body.phone;
    // }
    // if (req.body.address !== undefined) {
    //   users[index].address = req.body.address;
    // }
    // response em json
    try { res.status(201).json(users[index]) } catch { }
    editUserBuffer = users[index]
  },

  deleteUser: async (req, res) => {
    console.log('delete:', users) //debug
    // procura usuario com email correspondente
    const found = users.find((user) => user.email == req.body.email);
    // obtem indice do usuario
    const index = users.indexOf(found);
    deleteUserBuffer = users[index];
    // deleta usuario
    users.splice(index, 1);
    // response em json
    try { res.status(200).type("application/json").send(users) } catch { }
  }
}






// POST
// criacao de novo usuario
app.post("/users", async (req, res) => {
  try {
    await funcoes['createUser'](req, res)
    // envia o novo usuario para a base de consulta no barramento de eventos
    await axios.post('http://localhost:3100/events', {
      occurence: 'createUser',
      data: newUserBuffer
    })
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
app.put("/users", async (req, res) => {
  // procura usuario com email correspondente
  const found = users.find((user) => user.email == req.body.email);
  // obtem indice do usuario
  const index = users.indexOf(found);
  if (found) {
    await funcoes['editUser'](req, res)
    // envia o novo usuario para a base de consulta no barramento de eventos
    await axios.post('http://localhost:3100/events', {
      occurence: 'editUser',
      data: editUserBuffer
    })
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
    const index = users.indexOf(found)
    if (found) {
      await funcoes['deleteUser'](req, res)
      console.log(deleteUserBuffer)
      await axios.post('http://localhost:3100/events', {
        occurence: 'deleteUser',
        data: deleteUserBuffer
      })
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
    // console.log(error);
    res.status(500).json({ erro: "Internal Server Error" });
  }
});

app.post('/events', (req, res) => {
  const event = req.body
  // console.log(req.body)
  res.status(200).send({ msg: 'ok' })
})






// Aplication Start
app.listen(port, async () => {
  console.log(`mss-user porta: ${port}`)
  const resp = await axios.get("http://localhost:3100/events/user")
  resp.data.forEach(async (item) => {
    try {
      // console.log(item.occurence)
      // console.log(item.data)
      var dataBuffer = { 'body': item.data }
      await funcoes[item.occurence](dataBuffer)
    } catch (err) {
      console.log(err)
    }
    console.log(users)
  });
});
