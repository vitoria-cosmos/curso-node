
function a() {
    console.log('Executando a()')
}

function b() {
    console.log('Executando b()')
}

function c() {
    console.log('Executando c()')
    // a ordem de execução vai ser c - a - b
    a()
    b()
}
c()

// As funções vão ser executadas na ordem que chamo elas

// b()
// c()
// a()
