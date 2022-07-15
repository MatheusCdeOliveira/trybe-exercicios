const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
  // Se necessário esta linha pode ser removida.
};

testingScope(true);



// 🚀 Crie uma função que retorne um array em ordem crescente.


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const ordenaArray = (ordena) => {return ordena.sort((a, b) => a - b)}
// oddsAndEvens.sort((a, b) => a - b)

console.log(`Os números ${ordenaArray(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉