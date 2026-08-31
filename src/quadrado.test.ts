import { quadradoComFor, quadradoComForEach } from './quadrado.js';

test('quadradoComFor eleva cada elemento ao quadrado', () => {
  expect(quadradoComFor([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
});

test('quadradoComForEach eleva cada elemento ao quadrado', () => {
  expect(quadradoComForEach([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
});
