// const uppercase = require('./exercise7.js');

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Testando a função do exercicio 7', (done) => {
  uppercase('alo', (stringUpperCase) => {
    try {
      expect(stringUpperCase).toBe('ALO');
      done();
    } catch (erro) {
      done(erro);
    }
  });
});
