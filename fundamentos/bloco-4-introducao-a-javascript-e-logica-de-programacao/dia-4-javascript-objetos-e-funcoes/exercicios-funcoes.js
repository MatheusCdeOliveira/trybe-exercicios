//1. Faça cinco programas, um para cada operação aritmética básica.
//  Seu programa deve ter duas constantes, a e b,
//  definidas no começo com os valores que serão operados.

function soma(a, b) {
  return a + b;
}

console.log("soma =", soma(5, 10));

function subtracao(a, b) {
  return a - b;
}

console.log("subtração =", subtracao(50, 10));

function multiplicação(a, b) {
  return a * b;
}

console.log("multiplicação =", multiplicação(5, 10));

function divisao(a, b) {
  return a / b;
}
console.log("divisão =", divisao(10, 10));

function modulo(a, b) {
  return a % b;
}
console.log("resto da divisão =", modulo(10, 3));

//2. Faça um programa que retorne o maior de dois números.

function maiorNum(num1, num2) {
  if (num1 > num2) {
    console.log(num1, "é maior que", num2);
  } else if (num2 > num1) {
    console.log(num2, "é maior que", num1);
  } else {
    console.log("Os números são iguais");
  }
}

maiorNum(5, 5);

//3. Faça um programa que retorne o maior de três números.

function maiorTresNum(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1 + " é maior que " + n2 + " e " + n3;
  } else if (n2 > n1 && n2 > n3) {
    return n2 + " é maior que " + n1 + " e " + n3;
  } else if (n3 > n1 && n3 > n2) {
    return n3 + " é maior que " + n1 + " e " + n2;
  } else {
    return "Os números são iguais.";
  }
}

console.log(maiorTresNum(109, 75, 880));

//4. Faça um programa que, dado um valor definido numa constante,
//  retorne "positive" se esse valor for positivo,
//   "negative" se for negativo e "zero" caso contrário.

function positiveOrNegative(number) {
  if (number > 0) {
    return "positive";
  } else if (number < 0) {
    return "negative";
  } else {
    return "o valor é 0";
  }
}

console.log(positiveOrNegative(0));

//5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.
//  Retorne true se os ângulos representarem os ângulos de um triângulo e false,
// caso contrário. Se algum ângulo for inválido o programa deve
//  retornar uma mensagem de erro.

function trianguloAngulos(lado1, lado2, lado3) {
  let isValid = lado1 > 0 && lado2 > 0 && lado3 > 0;
  if (isValid) {
    if (lado1 + lado2 + lado3 === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Erro: ângulo inválido.";
  }
}

console.log(trianguloAngulos(100, 50, 10));
