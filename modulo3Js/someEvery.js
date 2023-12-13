let nomes = ['matheus','Lucas','joao'];


console.log(nomes.some(nome => nome === 'Matheus'))


let names = [
  {nome: 'Matheus',idade:23},
  {nome: 'Maria',idade:25},
  {nome: 'Henrique',idade:15},
];

console.log(names.every(name => name.idade >= 18));
