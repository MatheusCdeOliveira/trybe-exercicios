const sum = require("./sum.js");

describe("Testes da função sum", () => {
  test("Verifica se a soma de (4, 5) retorna 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  test("Verifica se a soma de (0, 0) retorna 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("Verifica se a função sum lança um erro quando os parametros sao 4 e '5'", () => {
    expect(() => sum(4, "5")).toThrow(Error);
  });
});
