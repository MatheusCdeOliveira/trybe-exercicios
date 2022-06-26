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

// console.log(verificaPalindromo('arara'))

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
  maiorArraydeNomes(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana", "Nabukodonosor"])
);
