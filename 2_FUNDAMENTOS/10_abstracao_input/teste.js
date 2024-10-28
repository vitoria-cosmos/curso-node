
const inquirer = require('inquirer');

inquirer.prompt([
    {
        name: 'nota1',
        message: 'Qual foi nota 1?'
    },
    {
        name: 'nota2',
        message: 'Qual a foi a nota 2?'
    },
    {
        name: 'nota3',
        message: 'Qual foi a nota 3?'
    }

])
.then((answers) => {
    const media = (parseInt(answers.nota1) + parseInt(answers.nota2) + parseInt(answers.nota3)) / 3
    console.log(`A média das 3 notas é ${media}`)
})
.catch((err) => console.log(err))