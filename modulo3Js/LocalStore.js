//Salvar dados Locais
//localStorage.setItem("nome","alita");

//Buscar Dados
//localStorage.getItem("nome");

//remover um dado
//localStorage.removeItem("nome");

//limpar dados locais
//localStorage.clear

//Tamanho
//localStorage.length

var nome = '';
if (typeof localStorage.nome == 'undefined'){
  localStorage.nome = prompt("Digite seu nome");
}

nome = localStorage.nome;
document.getElementById('nome').innerHTML = nome;