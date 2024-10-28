
// vamos chamar o modulo EventEmitter
const EventEmitter = require('events')

// variavel com o "e" minusculo(covencao) vai instanciar a classe
const eventEmitter = new EventEmitter()

// Define o evento
// evento global

eventEmitter.on('start', () => {
    console.log('Durante')
})

// inicio
console.log('Antes')

// ativar, emitir o evento
eventEmitter.emit('start')

console.log('Depois')