// Faça cinco programas, um para cada operação aritmética básica.
//  Seu programa deve ter duas constantes, a e b, 
//  definidas no começo com os valores que serão operados. 

const a = 38;
const b = 8;

console.log("soma =", +a + b);
console.log("subtração =", +a - b);
console.log("multiplicação =", +a * b);
console.log("divisão =", +a / b);
console.log("resto =", +a % b);

// Faça um programa que retorne o maior de dois números. 
// Defina no começo do programa duas constantes 
// com os valores que serão comparados.

const num1 = 30;
const num2 = 40;

if(num1 > num2) {
    console.log(num1 + ' ' + "é maior que" + ' ' + num2);
}
else {
    console.log(num2 + ' ' + "é maior que" + ' ' + num1);
}

