// 1 - Crie uma função que receba uma string
//  e retorne true se for um palíndromo, ou false, se não for.

// function verificaPalindromo(string) {
//       words = string.split('').reverse('').join('')
//     if(words === string) {
//         return true
//     } else {
//         return false
//     }
     
// }

// console.log(verificaPalindromo('arara'))

// 2 - Crie uma função que receba um array de inteiros
//   e retorne o índice do maior valor.

function indiceMaiorValor(array){
     let maiorValor = 0;
     for(let index in array) {
        if(array[index] > maiorValor){
            maiorValor = array[index]
        }
     }
     return maiorValor
}
 
console.log(indiceMaiorValor([2, 3, 6, 70, 10, 100]))