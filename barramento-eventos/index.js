const express = require('express');
//para enviar eventos para os demais microsserviços
const axios = require('axios');

const app = express();
app.use(express.json())

app.post('/events', (req, res) => {
    const event = req.body
    console.log(event)
    // eviarevento para o microservico de lembretes
    axios.post('http://localhost:3005/events', event)
    // eviarevento para o microservico de observacoes
    axios.post('http://localhost:3006/events', event)
    res.status(200).send({msg:'ok'})
})

app.listen(3100, () => {
    console.log("barramento de eventos porta 3100")
})
