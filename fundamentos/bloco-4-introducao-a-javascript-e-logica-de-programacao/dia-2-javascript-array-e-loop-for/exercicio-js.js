// Exercicio 1 - Array e loop For

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

// ----------------------------------------------------------------

// Exercicio 2 - Array e loop For

// let numberss = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (index = 0; index < numberss.length; index += 1) {
//    soma += numberss[index]
// }
//    console.log(soma);
// ------------------------------------------------------------------------

// Exercicio 3 - Array e loop For

let numberss = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (index = 0; index < numberss.length; index += 1) {
  soma += numberss[index];
}

let mediaAritmetica = soma / numberss.length;
console.log(mediaAritmetica);

// ---------------------------------------------------------------------

// Exercicio 4 - Array e loop For

let numberss = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (index = 0; index < numberss.length; index += 1) {
  soma += numberss[index];
}

let mediaAritmetica = soma / numberss.length;

if (mediaAritmetica > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}

// ------------------------------------------------------------------------
// Exercicio 5.

// let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorValor = numeros[0];
// for (index = 0; index < numeros.length; index += 1) {
//   if (numeros[index] >= maiorValor) {
//     maiorValor = numeros[index];
//   }
// }
// console.log(maiorValor)

// ------------------------------------------------------------------------

// Exercicio 6

// let num = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;
// for (index = 0; index < num.length; index += 1) {
//   if (num[index] % 2 !== 0) {
//     result += 1;
//   }
// }
// if (result === 0) {
//   console.log("Nenhum valor ímpar encontrado");
// } else {
//   console.log(result);
// }

// ------------------------------------------------------------------------

// Exercicio 7.

// let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorValor = numeros[0];
// for (index = 0; index < numeros.length; index += 1) {
//   if (numeros[index] < maiorValor) {
//     menorValor = numeros[index];
//   }
// }
// console.log(maiorValor);

// ------------------------------------------------------------------------

// Exercicio 8.

// let n = [];

// for (index = 0; index <= 25; index += 1) {
//   n.push(index);
// }
// console.log(n);

// ------------------------------------------------------------------------

// Exercicio 9

// let n = [
//       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//       23, 24, 25];
//     let divisao = 0;
//     let resultadoDivisao = [];

//       for (index = 0; index < n.length; index += 1) {
//         if(n[index] >= 0) {
//             divisao = n[index] / 2
//             resultadoDivisao.push(divisao);
//         }
//     }
//     console.log(resultadoDivisao);

// resolução 2 exercicio 9

// let n = [
//         1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//         23, 24, 25];

//         for (let index = 0; index < n.length; index += 1) {
//             console.log(n[index] / 2);
//           };
