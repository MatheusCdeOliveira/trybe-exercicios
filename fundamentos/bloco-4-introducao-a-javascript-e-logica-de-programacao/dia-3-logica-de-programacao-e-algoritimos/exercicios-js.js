// Exercicio 1 - retorne o fatorial de 10 

let fatoracao = 1;
for (let index = 10; index > 0; index -= 1) {
  fatoracao *= index

}
console.log(fatoracao)


// Exercicio 2. inverter a palavra.


let word = 'tryber';
let reverseWord = '';

for (index = 0; index < word.length; index += 1){
    reverseWord += word[word.length - 1 - index]
}
console.log(reverseWord)


// Exercicio 3. Retornar a maior e a menor palavra do array

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

 for (index = 0; index < array.length; index += 1){
    if(array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index]
        console.log('Maior palavra do array:', maiorPalavra)
    } 
}

for (index2 = 0; index2 < array.length; index2 += 1) {
    if(array[index2].length < menorPalavra.length) {
        menorPalavra = array[index2]
        console.log('Menor palavra do array:', menorPalavra)
    }
}




// -4 Um número primo é um número inteiro maior 
// do que 1 que possui somente dois divisores, ou seja, 
// é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorNumeroPrimo = 0;

for (index = 2; index <= 50; index += 1) {
    let divisores = 0;
    for (index2 = 2; index2 < index; index2 += 1) {
        if(index % index2 === 0) {
            divisores += 1;
        }
    }
    if (divisores === 0) {
        maiorNumeroPrimo = index
    }
    
}
console.log(maiorNumeroPrimo);




