
// chamando o metodo url

const url = require('url')

// o usuario está proucurando um produto contenndo o titulo cadeira
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'

// url decomposta
// aplicamos um metodo na url
// estamos acessando a classe URL dentro do modulo url
const parseUrl = new url.URL(address)

// host é o endereço do site
console.log(parseUrl.host)

// pathname é a página em que o usuário se encontra
console.log(parseUrl.pathname)

// search é o que o usuário está pesquisando nesta página
console.log(parseUrl.search)

// aqui é o que o usuario pesquisou
console.log(parseUrl.searchParams)


// outro metodo - get que posso chamar pela chave que já recebo o valor
console.log(parseUrl.searchParams.get('produtos'))