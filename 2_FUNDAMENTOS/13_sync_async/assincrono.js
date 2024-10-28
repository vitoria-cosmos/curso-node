
const fs = require('fs')

console.log('Inicio')

// o node não espera a função ser finalizada, ele vai direto
// vai executando o resto do código sincrono enquanto o assincrono roda em palalelo
fs.writeFile('arquivo2.txt', 'oi', function (err) {
    setTimeout(function() {
        console.log('Arquivo criado!')
    }, 1000)
})
// deixa mais fluida a resposta, pois não dependo de nenhuma outra coisa

// esse console.log vai aparecer antes da criação total do arquivo
console.log('Fim')