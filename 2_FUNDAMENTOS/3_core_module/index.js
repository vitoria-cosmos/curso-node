
// a variável que está chamando o módulo
// tem que ser nomeada com o mesmo nome do módulo

// módulo path
const path = require('path');

// verifica a extensão de um arquivo
// utilizar o método extname, ou seja, o nome da extensão do arquivo
// dentro do parametro, coloco o nome do arquivo que quero analisar a extensão
// extname é um método
const extension = path.extname("arquivo.php")

// aqui eu imprimo qual a extensão este arquivo possui
console.log(extension)
