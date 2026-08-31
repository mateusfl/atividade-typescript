export const ordenarDecrescente = (elementos: string[]): string[] =>
  [...elementos].sort((a, b) => b.localeCompare(a));
