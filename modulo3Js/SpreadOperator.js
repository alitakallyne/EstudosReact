//Concatenação

let primeiros = [1,2,3,4];

let numeros = [...primeiros,5,6,7];

const pessoa = {
  nome: "alita",
  sobrenome: "kallyne",
  idade: 26,
  cargo: "desenvolvedor"
}

let novaPessoa ={
  ...pessoa,
  cidade: "Oeiras"
}

function cadastroPessoa(info){

  let novoDados ={
    ...info,
    cargo: "teste"
  }
}

cadastroPessoa({nome:"teste",sobrenome:"teste",idade: 10})