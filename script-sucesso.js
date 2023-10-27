function clicar() {
  alert("clicou no botão");
}

let botao = document.getElementById("btn");
console.log(botao);
botao.addEventListener("click", clicar);
