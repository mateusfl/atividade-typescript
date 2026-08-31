import { numerosPares } from './pares.js';

test('numerosPares extrai apenas os elementos pares', () => {
  expect(numerosPares([8, 3, 9, 5, 6, 12])).toEqual([8, 6, 12]);
});
