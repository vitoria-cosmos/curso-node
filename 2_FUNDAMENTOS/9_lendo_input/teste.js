import chalk from 'chalk'
import readline from 'readline'

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


readLine.question(chalk.green('Qual o seu nome? '), (nome) => {
    console.log(`O seu nome é ${nome}`)
    readLine.close()
})



