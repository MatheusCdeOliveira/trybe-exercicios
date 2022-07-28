const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
// 2 - Crie uma string com os nomes de todas as pessoas autoras.
const expectedResult =
  'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.';

const reduceNames = (array) => {
  return array.reduce((acc, book, index, arr) => {
    if (index === arr.length - 1) return `${acc} ${book.author.name}.`;
    return `${acc} ${book.author.name},`;
  }, '');
};

console.log(reduceNames(books));

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