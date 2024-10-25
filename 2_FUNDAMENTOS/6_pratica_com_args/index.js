
// const meuModulo = require('./soma');


// externo
const minimist = require('minimist');


// interno

// const soma = meuModulo.soma;

// console.log(soma(2, 3));

// pegar a função soma do módulo 
const soma = require('./soma').soma

// utilizar o nosso modulo interno com os argumentos por linha de comando
const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(2, 2)

// meu módulo

const imprimi = require('./meuModulo.js').imprimi

const nome = args['nome']
const idade = args['idade']
const profissao = args['profissao']

imprimi(nome, idade, profissao)

