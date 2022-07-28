// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra 'a' maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// const containsA = (array) => {
//   let numero = 0;
//    return array.reduce((acc, nome) => {
//     const teste = (acc + nome).split('').forEach((element) => {
//       if(element === 'A' || element === 'a'){
//          numero += 1;
//       }
//     })
//       // console.log(teste)
//       return numero
//     })
// }

const containsA = (array) => {
   const teste = array.reduce((acc, nome) => 
    acc + nome.split('').reduce((acu, current) => {
      if(current === 'A' || current === 'a'){
        return acu + 1
      }
       return acu;
    }, 0), 0)
    return `O número total de 'A' é: ${teste}`;
};

console.log(containsA(names))