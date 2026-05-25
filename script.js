function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}

module.exports = { somar, mensagemBoasVindas };

// ex 1
function qualMaior(a,b){
  if(a > b){
    console.log("O numero A" + a + "é o maior que o B");
  }
  if(b>a){
    console.log("o numero B: " + b + "é maior que o A" )
  }
  if(a==b){
    console.log(" são iguais ")
  }
}

//ex2

function imparPar(a, b){
  if(a % 2 == 0 ){
    console.log(a + "É par.")
  } else if(a % 2 != 0){
    console.log(a + "é Impar")
  }

  if(b % 2 == 0 ){
    console.log(b + "é par")
  } else if(b % 2 != 0){
    console.log(b + "é Impar")
  }
}

//ex3

function tituloEleitor(n){
  if(n < 16){
    return('Não pode votar')
  }
    if(n >= 16 && n <18 && n > 68){
    return('Pode votar mas é opcional')
  }
  if(n >= 18 && n <=68){
    return("voto obrigatorio")
  }
}

//ex4

function positivoNeg(a){
  if(a > 0){
    return("Positivo")
  }
  if(a === 0){
    return("igual a zero")
  }
  if(a < 0){
    return("Negativo")
  }
}