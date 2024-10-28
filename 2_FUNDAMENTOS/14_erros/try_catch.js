
const x = 10

// ele vai tentar fazer alguma coisa e se não conseguir, ele vai dá um catch
// ele vai pegar o erro e imprimir pra gente
// o try catch não encerra o programa, ele só diz que não seu certo algo

// se fosse assim, ia gerar um erro destrutivo que ia encerrar o programa
x = 11

try {
    x = 2
    // não posso mudar o valor da constante

} catch(err) {
    // interpolar string com template string
    console.log(`Erro teste: ${err}`)

}