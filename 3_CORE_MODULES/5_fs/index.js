
const http = require('http');
const fs = require('fs');

const port = 3000

const server = http.createServer((req, res) => {
    // ler o arquivo
    // o primeiro parametro é o nome do arquivo
    // depois posso passar uma função anonima que pode receber o erro ou os dados do arquivo
    fs.readFile('mensagem.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        // writeHead é um método que deixa mais simples a escrita do co´digo
        // aqui estou enviando um status de sucesso e permitindo que eu envie html como resposta

        // agora eu vou renderizar o arquivo html, sem escrever as tags na mão
        // data é o conteúdo do arquivo
        res.write(data)

        // estamos dando um fim na requisição
        return res.end()

    })

})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})