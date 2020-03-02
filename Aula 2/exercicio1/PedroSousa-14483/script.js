function atualizaTexto() {
  var input = document.getElementById("input");
  if(!input.lenght){
    alert("Insira algum texto");
    return -1;
  }
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = input.value;
}