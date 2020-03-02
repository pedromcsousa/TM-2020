let numerosArray = [];
function adicionaNumero() {
  var numero = document.getElementById("numero");
  if (!numero.lenght) {
    alert("Insira algum número");
    return -1;
  }
  var numeros = document.getElementById("numeros");
  numerosArray.push(parseInt(numero.value));
  var resultado = "Adicionados: ";
  for(i = 0; i < numerosArray.length; i++){
    if(i != 0){
      resultado += ",";
    }
    resultado += " " + numerosArray[i];
  }
  numeros.innerHTML = resultado;
  numero.value = "";
  document.getElementById("calcular").disabled = false;
}

function calcularMaiorNumero(){
  var maior = numerosArray[0];
  var maiorNumero = document.getElementById('maiorNumero');
  for(i = 0; i < numerosArray.length; i++){
    if(numerosArray[i] >= maior){
      maior = numerosArray[i];
    }
  }
  maiorNumero.innerHTML = "Maior Número: " + maior;
}