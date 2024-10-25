

// mais de um valor 

const x = 10
const y = 'João'
const z = [1, 2]

console.log(x, y, z)

// contagem de impressões
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)


// colocar uma string no meio da frase 
// variável entre string
// pode ser qualquer tipo de dado, mas vai ser convertido para string
console.log('O valor é %s, ele é programador', y)

// limpar o console
// vamos colocar um setTimeout, uma função que executa após um tempo
// vamos limpar o console após dois segundos
setTimeout(() => {
    console.clear()
}, 2000);