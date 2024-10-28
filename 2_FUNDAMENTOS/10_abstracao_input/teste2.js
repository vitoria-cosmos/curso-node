
const inquirer = require('inquirer');

// name e message são padrões, não posso mudá-los

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual seu nome?',
    },
    {
        name: 'idade',
        message: 'Qual a sua idade?'
    },
    {
        name: 'profissao',
        message: 'Qual a sua profissao?'
    },

])
.then((answers) => {
    // console.log(answers.nome);
    console.log(`O meu nome é ${answers.nome}, tenho ${answers.idade} anos e sou ${answers.profissao}!`);
})
.catch((err) => {
    console.log(err);
})