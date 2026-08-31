import { Retangulo, Circulo } from "./formas.js";

test("Retangulo calcula a area a partir de largura e altura", () => {
  const retangulo = new Retangulo(4, 5);
  expect(retangulo.calcularArea()).toBe(20);

  retangulo.largura = 10;
  retangulo.altura = 2;
  expect(retangulo.calcularArea()).toBe(20);
});

test("Circulo calcula a area a partir do raio", () => {
  const circulo = new Circulo(2);
  expect(circulo.calcularArea()).toBeCloseTo(Math.PI * 4);

  circulo.raio = 3;
  expect(circulo.calcularArea()).toBeCloseTo(Math.PI * 9);
});
