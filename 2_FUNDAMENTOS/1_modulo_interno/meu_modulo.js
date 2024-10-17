
// module.exports = {
//     soma(a, b) {
//         console.log(a + b);
//     }
//     // quando estou exportando uma função não 
//     // preciso colocar function
// }

module.exports = {
    imprimi(texto) {
        console.log('Texto que você quer imprimir na tela: ', texto);
    },

    multiplica(num1, num2) {
        console.log(`A múltiplicação dos números ${num1} e ${num2} é igual a: `, num1 * num2);

    },

    tabuada(num) {
        for (let int = 0; int < 10; int++) {
            console.log(`${num} x ${int} = ${num * int}`);
        }
    }
}