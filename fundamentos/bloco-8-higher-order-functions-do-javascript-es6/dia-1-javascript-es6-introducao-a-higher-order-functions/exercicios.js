// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.
// Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id.
// A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
const generator = (nome) => {
  const email = nome.toLowerCase().split(" ").join("_");
  return `${email}@trybe.com`;
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(generator));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio.
// Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado
// e uma função que checa se o número apostado é igual ao número sorteado.
// O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const verifyBet = (nAposta, nSorteado) => {
  if (nAposta === nSorteado) {
    return "Parabens você ganhou!";
  } else {
    return "Tente novamente";
  }
};

const sorteio = (nAposta, callback) => {
  const nSorteado = Math.round(Math.random() * 5);
  return callback(nAposta, nSorteado);
};

console.log(sorteio(3, verifyBet));

// 3  Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos.
const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const compare = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  }
  if (studentAnswers === "N.A") {
    return 0;
  }
  return -0.5;
};

const countAnswers = (rightAnswers, studentAnswers, callback) => {
  let pontuacao = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    callback(rightAnswers[index], studentAnswers[index]);
    pontuacao += callback(rightAnswers[index], studentAnswers[index]);
  }
  return `Resultado: ${pontuacao} pontos.`;
};

console.log(countAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));
