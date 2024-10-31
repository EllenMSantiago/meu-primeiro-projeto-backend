const express = require('express')
const router = express.Router() //quando é função sempre usa ()

const app = express()
const porta = 3333
//função mostraOla
function mostraOla(request, response){
 response.send("Olá, mundo")
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ',porta)//entre os ()esta o conjunto de funções
}

app.use(router.get('/Ola',mostraOla))
app.listen(porta, mostraPorta)