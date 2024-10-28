

import chalk from 'chalk';

import inquirer from 'inquirer';

// console.log(chalk.black.bgYellow.bold('Hello, World!'));

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual o seu nome?',
    },
    {
        name: 'idade',
        message: 'Qual sua idade?',
    },
])
.then((answers) => {
    try {
        console.log(chalk.black.bgYellow.bold(`O seu nome é ${answers.nome} e sua idade é ${answers.idade}`));
    } catch (err) {
        console.log('error: ', err);
    }
})
.catch((err) => {
    console.log('err: ', err);
})