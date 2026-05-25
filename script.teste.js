const { somar, mensagemBoasVindas } = require('./script');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

//ex 01
test('maior numero', () =>{
  expect(qualMaior(8, 9)).toBe(9)
})