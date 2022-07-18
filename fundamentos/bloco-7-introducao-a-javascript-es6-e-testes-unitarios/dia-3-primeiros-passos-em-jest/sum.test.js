// const { default: test } = require("node:test");
// const { describe } = require("yargs");
const { sum, myRemove } = require("./sum.js");

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
