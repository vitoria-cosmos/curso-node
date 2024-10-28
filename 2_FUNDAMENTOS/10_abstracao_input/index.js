
const inquirer = require('inquirer')

// o método prompt vai ser o responsável por fazer as perguntas

// quando se tem uma promise, tenho dois métodos que posso utilizar,
// o then e o catch
// o catch é pra gente imprimir algum erro, caso de algo errado no código
// o then é quando dá tudo certo
// as perguntas originam as respostas(answers)

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota?',
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota?',
    },       
])
.then((answers) => {
    console.log(answers)
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2
    console.log(`A média é: ${media}`)
})
.catch((err) => console.log(err))
