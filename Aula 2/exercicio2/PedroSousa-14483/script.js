let numerosArray = [];
function adicionaNumero() {
  var numero = document.getElementById("numero");
  if (!numero.value) {
    alert("Insira algum número");
    return -1;
  }
  var numeros = document.getElementById("numeros");
  numerosArray.push(parseInt(numero.value));
  var resultado = "Adicionados: ";
  for (i = 0; i < numerosArray.length; i++) {
    if (i != 0) {
      resultado += ",";
    }
    resultado += " " + numerosArray[i];
  }
  numeros.innerHTML = resultado;
  numero.value = "";
  if (numerosArray.length >= 5) {
    document.getElementById("calcular").disabled = false;
  }
}

function calcularMaiorNumero() {
  /*var maior = numerosArray[0];
  var maiorNumero = document.getElementById("maiorNumero");
  for (i = 0; i < numerosArray.length; i++) {
    if (numerosArray[i] >= maior) {
      maior = numerosArray[i];
    }
  }
  maiorNumero.innerHTML = "Maior Número: " + maior;*/
  maiorNumero.innerHTML = "Maior Número: " + Math.max.apply(Math, numerosArray);
}
