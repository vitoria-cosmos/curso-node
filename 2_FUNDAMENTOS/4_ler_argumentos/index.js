

// // nome

// console.log(process.argv)

// // pegar os nossos argumentos

// const args = process.argv.slice(2)
// // o slice resgata o segundo indice da lista
// console.log(args)

// //pegar só o nome
// // vou dividir a string quando aparecer um =
// const nome = args[0].split('=')[1]
// console.log(nome)

// // resgata o segundo argumento
// const idade = args[1].split('=')[1]
// console.log(idade)

// // imprimir o nome e a idade
// console.log(`O nome dela é ${nome} e ela tem ${idade} anos!`);

// // quero agora pegar o sexo
// const sexo = args[2].split('=')[1];
// console.log(sexo);



// REVISÃO

// nome

console.log(process.argv)

const args = process.argv.slice(2);

console.log(args)

const nome = args[0].split("=")[1];

const idade = args[1].split("=")[1];

console.log(nome)

console.log(idade)

console.log(`O nome dela é ${nome} e ela tem ${idade} anos.`)



