const lista = [1,2,3,4,5,6];

const novaList = lista.map(function(item,index){
  return item + index;
})

console.log(novaList);
const soma = lista.reduce(function(total,proximo){
  return total + proximo;
}) 

console.log(soma);

const find = lista.find(function(item){
  return item === 0;
}) 


console.log(find);