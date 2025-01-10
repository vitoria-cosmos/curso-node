
// const meuModulo = require('./meu_modulo')

// encapsulando em uma variável o meu modulo
// para simplificar a sintaxe
// const soma = meuModulo.soma;

// // usar realmente o nosso módulo
// soma(2, 3)
// soma(5, 10)

// const modulo = require('./meu_modulo')

// const imprimi = modulo.imprimi;
// const multiplica = modulo.multiplica;
// const tabuada = modulo.tabuada;

// imprimi('Hello, World!');
// multiplica(2, 2);
// tabuada(5);

// REVISÃO

const meuModulo = require('./meu_modulo')

const soma = meuModulo.soma

soma(5, 10)
soma(2, 3)

meuModulo.soma(10, 10)


