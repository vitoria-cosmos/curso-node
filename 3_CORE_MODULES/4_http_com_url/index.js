
const http = require('http')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {

    // aqui a gente tá chamando o modulo url e pegando a a url que veio da requisição
    // o parametro true é pra ele funcionar corretamente
    const urlInfo = require('url').parse(req.url, true)

    // pegando a url decomposta que vem do query parametros e estou buscando name
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    // res.end(
    //     '<h1>Olá, este é meu primeiro server com HTML!</h1><p>Testando atualização</p>'
    // )

    // se não vier nenhum nome, eu vou imprimir uma coisa, se não, eu vou imprimir outra coisa
    if (!name) {
        res.end(
            '<h1>Preencha o seu nome: </h1> <form method="GET"><input type="text" name="name"/><input type="submit" value="Enviar"/></form>'
        )
    }else {
        res.end(`<h1>Seja bem-vindo ${name}!</h1>`)
    }
})

server.listen(port, () => {
    console.log(`Servidor rodando a porta: ${port}`)
})