
function adcionar(...numeros){
  //let total = numeros.reduce((total,proximo)=> total+proximo);

  let total = numeros.reduce((total,proximo)=>{
    let soma = total+proximo
    return soma})
    console.log(total);
}

adcionar(1,2,3,4,5,6);