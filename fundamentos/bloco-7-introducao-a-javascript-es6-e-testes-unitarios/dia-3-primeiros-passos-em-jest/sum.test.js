// exercicio 1
const {
    sum,
    myRemove,
    myFizzBuzz,
    encode,
    decode,
    techList,
    hydrate,
} = require("./sum.js");

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

// exercicio 5

describe("Testa a função techList", () => {
    it("Testa se a função techList é definida", () => {
        expect(techList).toBeDefined();
    });
    it("Testa se techList é uma função", () => {
        expect(typeof techList).toBe("function");
    });
    it("Lista com 5 tecnologias deve retornar uma lista de objetos ordenados", () => {
        expect(
            techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
        ).toEqual([
            {
                tech: "CSS",
                name: "Lucas",
            },
            {
                tech: "HTML",
                name: "Lucas",
            },
            {
                tech: "JavaScript",
                name: "Lucas",
            },
            {
                tech: "Jest",
                name: "Lucas",
            },
            {
                tech: "React",
                name: "Lucas",
            },
        ]);
    });
    it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
        expect(techList([], "Lucas")).toBe("Vazio!");
    });
});

// exercicio 6

describe('Testa a função hydrate', () => {
    it('Testa se a função hydrate é definida', () => {
        expect(hydrate).toBeDefined();
    });
    it('Testa se hydrate é uma função', () => {
        expect(typeof hydrate).toBe('function');
    });
    it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
        expect(hydrate('1 cerveja')).toBe('1 copo de água');
        expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
        expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
        expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
        expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    });
});
