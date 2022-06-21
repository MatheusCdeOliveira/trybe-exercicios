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
const n3 = 90;

if (n1 > n2 && n1 > n3) {
  console.log(n1 + " " + "é maior que" + " " + n2 + " " + "e" + " " + n3);
}
else if (n2 > n1 && n2 > n3) {
    console.log(n2 + " " + "é maior que" + " " + n1 + " " + "e" + " " + n3);
}
else if(n3 > n1 && n3 > n2) {
    console.log(n3 + " " + "é maior que" + " " + n2 + " " + "e" + " " + n1);
}
