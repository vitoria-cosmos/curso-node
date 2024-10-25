
// arquivo da aplicação
// chamar o módulo

const minimist = require('minimist')

// const args = minimist(process.argv.slice(2))

// // aqui vem como objeto
// console.log(args) 

// const nome = args['nome']
// const profissao = args['profissao']

// console.log(nome)
// console.log(profissao)

// console.log(`O nome dele é ${nome} e a profissão dele é ${profissao}`)

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']

const profissao = args['profissao']

const idade = args['idade']

console.log(`O nome dela é ${nome}, ela é ${profissao} e tem ${idade} anos!`)