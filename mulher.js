const express = require('express')
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
 response.json({
    nome: 'Ellen M Santiago',
    imagem: 'https://github.com/ellenmsantiago.png',
    minibio: 'Desenvolvedora'
 })
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta ',porta)//entre os ()esta o conjunto de funções
}

app.use(router.get('/mulher',mostraMulher))
app.listen(porta, mostraPorta)