// 1 - Crie uma função que receba uma string
//  e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindromo(string) {
  words = string.split("").reverse("").join("");
  if (words === string) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindromo("arara"));

// 2 - Crie uma função que receba um array de inteiros
//   e retorne o índice do maior valor.

function indiceMaiorValor(array) {
  let maiorValor = 0;
  for (let index in array) {
    if (array[index] > maiorValor) {
      maiorValor = index;
    }
  }
  return maiorValor;
}

console.log(indiceMaiorValor([2, 3, 6, 70, 10, 100]));

// 3 - Crie uma função que receba um array de inteiros
//  e retorne o índice do menor valor.

function indiceMenorValor(array) {
  let menorValor = array[0];
  for (let index in array) {
    if (array[index] < menorValor) {
      menorValor = index; // o retorno será da posição, não do valor.
    }
  }
  return menorValor;
}

console.log(indiceMenorValor([7, 30, 6, 70, 10, 100]));

// 4 - Crie uma função que receba um array de nomes e
// retorne o nome com a maior quantidade de caracteres.

function maiorArraydeNomes(arrayNames) {
  let maiorNome = arrayNames[0];
  for (let indice in arrayNames) {
    if (arrayNames[indice].length > maiorNome.length) {
      maiorNome = arrayNames[indice];
    }
  }
  return maiorNome;
}
console.log(
  maiorArraydeNomes([
    "José",
    "Lucas",
    "Nádia",
    "Fernanda",
    "Cairo",
    "Joana",
    "Nabukodonosor",
  ])
);

// 5 - Crie uma função que receba um array de inteiros e
//  retorne o inteiro que mais se repete.

function maisRepetido(numeros) {
  let contadorNum = 0;
  let indexRepeticao = 0;
  let contadorRep = 0;
  for (index in numeros) {
    let verifica = numeros[index];
    for (index2 in numeros) {
      if (numeros[index2] === verifica) {
        contadorNum += 1;
      }
    }
    if (contadorNum > contadorRep) {
      contadorRep = contadorNum;
      indexRepeticao = index;
    }
  }

  return numeros[indexRepeticao];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

// 6 - Crie uma função que receba um número natural (número inteiro não negativo)
//  N e retorne o somatório de todos os números de 1 até N.

function somatorio(number) {
  let soma = 0;
  for (let index = 1; index <= number; index += 1) {
    soma = soma + index;
  }
  return soma;
}
console.log(somatorio(10));

// 7 - Crie uma função que receba uma string word e
// outra string ending. Verifique se a string ending é o
// final da string word. Considere que a string ending sempre será menor que a string word.

function finalIgual(word, ending) {
  let palavra = word.split("").reverse("").join("");
  let resultado = 0;
  let finalPalavra = ending.split("").reverse("").join("");
  for (index = 0; index < palavra.length; index += 1) {
    if (
      palavra[index] === finalPalavra[index] &&
      palavra[index + 1] === finalPalavra[index + 1]
    ) {
      resultado = true;
      break;
    } else {
      resultado = false;
    }
  }
  return resultado;
}
console.log(finalIgual("trybe", "be"));



