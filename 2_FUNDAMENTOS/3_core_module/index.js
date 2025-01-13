
// a variável que está chamando o módulo
// tem que ser nomeada com o mesmo nome do módulo

// módulo path
// const path = require('path');


// verifica a extensão de um arquivo
// utilizar o método extname, ou seja, o nome da extensão do arquivo
// dentro do parametro, coloco o nome do arquivo que quero analisar a extensão
// extname é um método
// const extension = path.extname("arquivo.php")

// aqui eu imprimo qual a extensão este arquivo possui
// console.log(extension)

// REVISÃO

const path = require('path')

// verificar a extensão do arquivo
// passar o nome do arquivo em string
const extension = path.extname("arquivo.php")
const extensionPdf = path.extname("arquivo.pdf")

console.log(extension)
console.log(extensionPdf)