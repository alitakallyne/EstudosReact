const pessoa = {
  nome: "alita",
  sobrenome: "kallyne",
  idade: 26,
  cargo: "desenvolvedor"
}

//let {nome}  = pessoa;

let {nome,idade}  = pessoa;
//descontrução: O atributo que chama cargo no objeto pessoa, agora tem uma variaveis que se chama programador;
let {cargo: programador} = pessoa;