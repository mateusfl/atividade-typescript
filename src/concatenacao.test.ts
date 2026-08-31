import { concatenarComEspaco } from './concatenacao.js';

test('concatenarComEspaco une os elementos com um espaço', () => {
  expect(concatenarComEspaco(['Arrays', 'com', 'TypeScript'])).toBe('Arrays com TypeScript');
});
