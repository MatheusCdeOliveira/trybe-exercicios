// Crie uma função que receba um número e retorne seu fatorial.
const fatorial = (n) => {
  let fator = 1;
  for (i = n; i > 0; i -= 1) {
    fator *= i;
  }
  return fator;
};

console.log(fatorial(4));

// Crie uma função que receba uma frase e retorne a maior palavra.

const longestWord = (word) => {
  let higherWord = [];
  for (const palavra of word.split(" ")) {
    if (palavra.length > higherWord.length) {
      higherWord = palavra;
    }
  }
  return higherWord;
};
console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));
