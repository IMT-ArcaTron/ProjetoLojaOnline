const express = require('express');
//para enviar eventos para os demais microsserviços
const axios = require('axios');

const app = express();
app.use(express.json())

app.get('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    // eviar evento para o microservico de user
    axios.get('http://localhost:3005/users', evento)
    // eviar evento para o microservico de product
    axios.get('http://localhost:3006/products', evento)
    // eviar evento para o microservico de product - order
    axios.get('http://localhost:3006/orders', evento)
    res.status(200).send({msg:'ok'})
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    // eviar evento para o microservico de user
    axios.post('http://localhost:3005/users', evento)
    // eviar evento para o microservico de product
    axios.post('http://localhost:3006/products', evento)
    // eviar evento para o microservico de product - order
    axios.post('http://localhost:3006/orders', evento)
    res.status(200).send({msg:'ok'})
})

app.put('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    // eviar evento para o microservico de user
    axios.put('http://localhost:3005/users', evento)
    // eviar evento para o microservico de product
    axios.put('http://localhost:3006/products', evento)
    // eviar evento para o microservico de product - order
    axios.put('http://localhost:3006/orders', evento)
    res.status(200).send({msg:'ok'})
})

app.delete('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    // eviar evento para o microservico de user
    axios.delete('http://localhost:3005/users', evento)
    // eviar evento para o microservico de product - product
    axios.delete('http://localhost:3006/products', evento)
    // eviar evento para o microservico de product - order
    axios.delete('http://localhost:3006/orders', evento)
    res.status(200).send({msg:'ok'})
})

app.listen(3100, () => {
    console.log("barramento de eventos porta 3100")
})