// exercicio 1
const { sum, myRemove, myFizzBuzz, encode, decode } = require("./sum.js");

describe("Testes da função sum", () => {
  test("Verifica se a soma de (4, 5) retorna 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("Verifica se a soma de (0, 0) retorna 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("Verifica se a função sum lança um erro quando os parametros sao 4 e '5'", () => {
    expect(() => sum(4, "5")).toThrow(Error);
  });
});

// exercicio 2
describe("Testes da função myRemove", () => {
  it("Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it("Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it("Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// exercicio 3
describe("Testes da função fizzbuzz", () => {
  it("Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(15)).toMatch("fizzbuzz");
  });

  it("Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(6)).toMatch("fizz");
  });

  it("Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(10)).toMatch("buzz");
  });

  it("Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(13)).toBe(13);
  });

  it("Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz("10")).toBeFalsy();
  });
});

// exercicio 4

describe("Testes da função encode e decode", () => {
  it("Teste se encode e decode são funções", () => {
    expect(typeof encode).toBeTruthy();
    expect(typeof decode).toBeTruthy();
  });
});
