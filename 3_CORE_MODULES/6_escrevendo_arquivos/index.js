
const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name 

    if (!name) {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    } else {
        // aqui eu vou escrever um arquivo o nome
        // depois temos uma função que vai ser chamada quando o arquivo for escrito
        fs.writeFile("arquivo.txt", name, function(err, data) {
            // status 303 é redirect
            // aqui quando a pessoa escrever o nome dela, a página vai ser redirecionada para home
            res.writeHead(302, {
                Location: '/'

            })
            return res.end()
        })

    }
    
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})