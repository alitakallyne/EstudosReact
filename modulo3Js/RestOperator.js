function minhaLista(...nomes) {
  console.log(nomes);
}

minhaLista("alita","maria","josé");

function cadstro(usuario,...novousuario) {
  let tot = [...usuario,
            ...novousuario];
  return tot;
}

let usuario = ['alita','jose']
let novousuario = ['roberto','samuel']