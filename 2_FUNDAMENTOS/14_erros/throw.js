const x = "10"

// checar se x é um número
if (!Number.isInteger(x)) {
    throw new Error('O valor de x não é um número inteiro!')
    // tenho um erro no código
    // vai encerrar o programa
}

// se o x for um número inteiro vai imprimir esta mensagem
console.log('Continuando o código...')