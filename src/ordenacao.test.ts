import { ordenarDecrescente } from './ordenacao.js';

test('ordenarDecrescente ordena os elementos do maior para o menor', () => {
  expect(ordenarDecrescente(['carro', 'boneco', 'ave', 'lapis'])).toEqual([
    'lapis',
    'carro',
    'boneco',
    'ave',
  ]);
});
