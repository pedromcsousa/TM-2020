function alteraCor(cor) {
  var elementos = document.getElementsByClassName("titulo");
  for (let elemento of elementos) {
    elemento.style.color = cor;
  }
}

function getInfo() {
  var id = document.getElementById("id");
  var href = document.getElementById("href");
  var target = document.getElementById("target");
  var type = document.getElementById("type");

  var elemento = document.getElementById("link");

  id.innerText = elemento.id;
  href.innerText = elemento.href;
  target.innerText = elemento.target;
  type.innerText = elemento.type;
}

function changeConteudo(celula) {
  var novoConteudo = prompt("Novo conteudo: ");

  celula.innerText = novoConteudo;
}

function setClick(tabela) {
  var cells = tabela.getElementsByTagName("td");

  for (let cell of cells) {
    cell.onclick = function() {
      changeConteudo(this);
      this.style.background = 'green';
      this.style.color = 'white';
    };
  }
}
