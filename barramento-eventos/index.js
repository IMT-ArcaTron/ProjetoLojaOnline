const express = require('express');
//para enviar eventos para os demais microsserviços
const axios = require('axios');

const app = express();
app.use(express.json())

// armazena os usuários 
const userDatabase = []
const productDatabase = []

app.post('/events', (req, res) => {
    const event = req.body
    // console.log(event) // debug
    // // eviar evento para o microservico users
    // axios.post('http://localhost:3005/events', event)
    // // eviar evento para o microservico products
    // axios.post('http://localhost:3006/events', event)

    console.log(event)
    userDatabase.push(event)
    res.status(200).send({ msg: 'ok' })
})

app.listen(3100, () => {
    console.log("barramento de eventos porta 3100")
})

app.get('/events/user', (req, res) => {
    console.log(userDatabase)
    res.status(200).send(userDatabase)
})