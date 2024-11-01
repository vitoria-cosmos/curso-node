
const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    // acesso com sucesso
    // a requisição foi bem sucedida

    // mudar o header
    // a partir de agora podemos enviar html
    res.setHeader('Contenty-Type', 'text/html')

    // texto que vai poder receber tags de html
    // nosso server agora pode enviar html que vai ser interpretado pelo client
    res.end('<h1>Olá, este é meu primeiro server com HTML!</h1>')
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})