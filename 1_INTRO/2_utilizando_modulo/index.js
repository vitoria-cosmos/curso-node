// importando o módulo fire system
const fs = require("fs");

// usar um método
// o fs é como classe, objeto, ele tem métodos que podemos usar
// para trabalhar com arquivos e diretórios

fs.readFile("arquivo.txt", "utf8", (err, data) => {
  // se der algum erro, ele vai imprimir o erro, se não, ele vai imprimir os dados

  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
  // aqui estamos imprimindo na tela o conteúdo do arquivo txt
});
// primeiro parametro é o caminho para o arquivo
// o outro parametro é o incode do arquivo
// o otro parametro é uma função anonime em que posso receber um erro ou os dados
