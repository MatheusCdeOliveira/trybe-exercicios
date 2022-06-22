//1. Faça cinco programas, um para cada operação aritmética básica.
//  Seu programa deve ter duas constantes, a e b,
//  definidas no começo com os valores que serão operados.

const a = 38;
const b = 8;

console.log("soma =", +a + b);
console.log("subtração =", +a - b);
console.log("multiplicação =", +a * b);
console.log("divisão =", +a / b);
console.log("resto =", +a % b);

//2. Faça um programa que retorne o maior de dois números.
// Defina no começo do programa duas constantes
// com os valores que serão comparados.

const num1 = 30;
const num2 = 40;

if (num1 > num2) {
  console.log(num1 + " " + "é maior que" + " " + num2);
} else {
  console.log(num2 + " " + "é maior que" + " " + num1);
}

//3. Faça um programa que retorne o maior de três números.
// Defina no começo do programa três constantes
// com os valores que serão comparados.

const n1 = 40;
const n2 = 100;
const n3 = 150;

if (n1 > n2 && n1 > n3) {
  console.log(n1 + " " + "é maior que" + " " + n2 + " " + "e" + " " + n3);
} else if (n2 > n1 && n2 > n3) {
  console.log(n2 + " " + "é maior que" + " " + n1 + " " + "e" + " " + n3);
} else {
  console.log(n3 + " " + "é maior que" + " " + n2 + " " + "e" + " " + n1);
}

//4. Faça um programa que, dado um valor definido numa constante,
//  retorne "positive" se esse valor for positivo,
//   "negative" se for negativo e "zero" caso contrário.

const valor = 300;

if (valor > 0) {
  console.log("positive");
} else if (valor < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

//5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.
//  Retorne true se os ângulos representarem os ângulos de um triângulo e false,
// caso contrário. Se algum ângulo for inválido o programa deve
//  retornar uma mensagem de erro.

let ladoTriangulo1 = 100;
let ladoTriangulo2 = 50;
let ladoTriangulo3 = 30;

let soma = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
let isValid = ladoTriangulo1 > 0 && ladoTriangulo2 > 0 && ladoTriangulo3 > 0;

if (isValid) {
  if (soma === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("Erro");
}

//6 Escreva um programa que receba o nome de uma peça de xadrez
//  e retorne os movimentos que ela faz.

let chess = "Peão";

switch (chess.toLowerCase()) {
  case "Bispo":
    console.log("Bispo -> Diagonal, quantas casas quiser");
    break;

  case "peão":
    console.log("Peão -> Uma casa a frente, exceto no primeiro movimento.");
    break;

  case "rainha":
    console.log(
      "Rainha -> Pode mover-se em qualquer direção, porém em qualquer direção"
    );
    break;

  case "rei":
    console.log(
      "Rei -> Pode mover-se em qualquer direção, porém apenas uma casa por vez"
    );
    break;

  case "torre":
    console.log(
      "Torre -> Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser."
    );
    break;

  case "cavalo":
    console.log("Cavalo - Movimento de L");
    break;

  default:
    console.log("Error");
}

// 7. Escreva um programa que converta uma nota
//  dada em porcentagem (de 0 a 100) em conceitos de A a F.

const nota = 70;

if (nota > 100 || nota < 0) {
  console.log("Erro");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}
