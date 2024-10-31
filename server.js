// //criando constante express para guardar o pacote express - require(função - para requere,trazer usa os ("") )

// const express = require('express')
// //criando aplicação
// const app = express()

// //const(identificador)porta(apelido) =(atribui o valor)

// //identificador=>apelido=>atribuição=>valor
// const porta = 3333

// //funções são identificadores que guardam conjuntos de instruções com ações para serem chamados no código

// //função - e nome da função com os ()primeiro termo minuscula e segundo maiúscula
// function mostraPorta() {
//     console.log('Servidor criado e rodando na porta ',porta)//entre os ()esta o conjunto de funções
// }

// app.listen(porta, mostraPorta)


const express = require('express')

const app = express()


const porta = 3333


function mostraPorta() {
    console.log('Servidor criado e rodando na porta ',porta)
}

app.listen(porta, mostraPorta)