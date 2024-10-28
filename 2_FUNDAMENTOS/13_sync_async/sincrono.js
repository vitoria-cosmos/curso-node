
const fs = require('fs')

console.log('inicio')

// metodo explicitamente sincrono
// eu quero que a próxima linha espere essa execução aqui
// eu dependo que esse arquivo seja escrito para executar o restante do programa
// estou criando um arquivo .txt
fs.writeFileSync('arquivo.txt', 'oi')

// o fim só vai ser executado após a criação do arquivo
console.log('Fim')