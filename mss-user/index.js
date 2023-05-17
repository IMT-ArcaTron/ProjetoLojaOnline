const express = require("express");
const app = express();
app.listen(3005);
app.use(express.json());

// mock
const users = [];

app.post("/create-user", (req, res) => {
  const { name, phone, email, password } = req.body;
  const found = users.find((user) => user.email == email);
  const newUser = {
    name: name,
    phone: phone,
    email: email,
    password: password,
  };
  if (!found) {
    users.push(newUser.toString());

    res.status(201);
    res.send(`newUser created: ${newUser.toString()}`);
  } else {
    res.status(403);
    res.send("User already exists");
  }
});

app.post("/update-user", (req, res) => {
  const found = users.find((user) => user.email == req.body.email);
  const index = users.indexOf(found);
  if (found) {
    if (req.body.name !== undefined) {
      users[index].name = req.body.name;
    }

    if (req.body.phone !== undefined) {
      users[index].phone = req.body.phone;
    }

    if (req.body.password !== undefined) {
      users[index].password = req.body.password;
    }

    res.status(200);
    res.send(`User updated: ${users[index].toString()}`);
  }
});

app.post("/login", (req, res) => {
  const { login, password } = req.body;
  const found = users.find(
    (user) => user.email === email && user.password === password
  );
  if (found) {
    res.status(200);
    res.send("Login with succeed");
  } else {
    res.status(403);
    res.send("Login or password invalid");
  }
});
