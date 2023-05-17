require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const port = process.env.PORT || 3005;
app.use(express.json());

// mock
const users = [];

app.post("/create-user", async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    const found = users.find((user) => user.email == email);
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = {
      name: name,
      phone: phone,
      email: email,
      password: hashPassword,
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

app.get("/get-users", (req, res) => {
  res.status(200).type("application/json").send(users);
});

app.put("/update-user", (req, res) => {
  const found = users.find((user) => user.email == req.body.email);
  const index = users.indexOf(found);
  if (found) {
    if (req.body.name !== undefined) {
      users[index].name = req.body.name;
    }

    if (req.body.phone !== undefined) {
      users[index].phone = req.body.phone;
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

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const found = users.find((user) => user.email === email);
    if (found) {
      const passwordIsCorrect = await bcrypt.compare(password, found.password);
      if (passwordIsCorrect) {
        res.status(200).send("Login with succeed");
      } else {
        res.status(401).send("E-mail or password invalid");
      }
    } else {
      res.status(401).send("E-mail or password invalid");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ erro: "Internal Server Error" });
  }
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
