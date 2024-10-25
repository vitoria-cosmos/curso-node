
import chalk from 'chalk'

const nota = 5

// deixa o texto verde
console.log(chalk.green('Parabéns! Você está aprovado!'))

// deixa o texto verde e em negrito
console.log(chalk.green.bold('Aprovado!'))

// mudar a cor de fundo do texto é bgCor, ex: bgRed
if (nota >= 7) {
    console.log(chalk.green('Parabéns! Você está aprovado!'))
} else {
    // console.log(chalk.bgRed('Você precisa fazer a prova de recuperação!'))
    
    // aqui o background é vermelho e o texto é preto e em negrito
    console.log(chalk.bgRed.white.bold('Você precisa fazer a prova de recuperação!'))
}