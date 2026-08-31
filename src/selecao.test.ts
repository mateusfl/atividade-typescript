import { primeirosDoisElementos } from './selecao.js';

test('primeirosDoisElementos retorna apenas os dois primeiros elementos', () => {
  expect(primeirosDoisElementos([2, 4, 6, 2, 8, 9, 5])).toEqual([2, 4]);
});
