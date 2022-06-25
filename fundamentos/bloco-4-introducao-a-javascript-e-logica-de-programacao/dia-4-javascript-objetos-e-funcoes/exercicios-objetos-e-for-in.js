// Exercicio 1 e 2.

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Bem-vinda,", info.personagem);

// 2.

info.recorrente = "sim";

console.log(info);

// 3.

// for (key in info) {
//   console.log(key);
// }

// for (key in info) {
//     console.log(info[key]);
//   }


// 4.
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dells Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "sim",
};

// 5.
for (let chaves in info) {
  if (
    chaves === "recorrente" &&
    info[chaves] === "sim" &&
    info2[chaves] === "sim"
  ) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[chaves], "e", info2[chaves]);
  }
}

// 6. faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

leitor.fullName = leitor.nome + " " + leitor.sobrenome;

console.log(
  "O livro favorito de",
  leitor.fullName,
  "se chama",
  leitor.livrosFavoritos[0].titulo
);

// 7 .- Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

leitor.livrosFavoritos.push([
  {
    titulo: "Harry Potter e o Prisioneiro de Azkaban",
    autor: "JK Rowling",
    editora: "Rocco",
  },
]);

console.log(leitor.livrosFavoritos);

// 8.

console.log(
  leitor.nome,
  "tem",
  leitor.livrosFavoritos.length,
  "livros favoritos."
);
