export const quadradoComFor = (elementos: number[]): number[] => {
  const resultado: number[] = [];
  for (let i = 0; i < elementos.length; i++) {
    resultado.push(elementos[i] * elementos[i]);
  }
  return resultado;
};

export const quadradoComForEach = (elementos: number[]): number[] => {
  const resultado: number[] = [];
  elementos.forEach((elemento) => resultado.push(elemento * elemento));
  return resultado;
};
