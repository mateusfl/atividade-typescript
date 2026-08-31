export interface FormaGeometrica {
  calcularArea(): number;
}

export class Retangulo implements FormaGeometrica {
  largura: number;
  altura: number;

  constructor(largura: number, altura: number) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea(): number {
    return this.largura * this.altura;
  }
}

export class Circulo implements FormaGeometrica {
  raio: number;

  constructor(raio: number) {
    this.raio = raio;
  }

  calcularArea(): number {
    return Math.PI * this.raio * this.raio;
  }
}
