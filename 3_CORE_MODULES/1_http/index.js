
const http = require('http');

// o usuário vai poder receber as respostas que eu mando pra ele
const port = 3000;

// aqui eu crio meu servidor
// eu recebo uma requisição, que é o usuário enviando
// e eu envio uma resposta pra ele
// req - requisição e res - resposta
const server = http.createServer((req, res) => {
    // texto que vai ser enviado para o usuário
    res.write('Oi HTTP');
    // preciso finalizar essa resposta, se não ele fica recarregando eternamente
    res.end();

})

// aqui eu vou escutar a porta
// e uma função de callback para indicar que tudo tá ok
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})