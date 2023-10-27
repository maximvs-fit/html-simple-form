function foco(id) {
  const e = document.getElementById(id);
  console.log("elemento", e);
  if (e) e.focus();
}

function teste() {
  foco("documento")
}
const btnFocar = document.getElementById("focar-doc");
console.log("botão focar", btnFocar);
btnFocar.addEventListener("click", teste);
btnFocar.addEventListener("click", () => console.log("clicou 1 vez"));
btnFocar.addEventListener("dblclick", () => alert('clicou 2 vezes'));

const formInput = document.getElementById("nome-bla")
console.log('input', formInput)
formInput.addEventListener("keypress", (e) => {
  const valor = e.target.value
  nLetras = valor.length

  const spanLetras = document.querySelector('#letras span')
  console.log('spanLetras', spanLetras)
  spanLetras.innerHTML = nLetras + 1
})
