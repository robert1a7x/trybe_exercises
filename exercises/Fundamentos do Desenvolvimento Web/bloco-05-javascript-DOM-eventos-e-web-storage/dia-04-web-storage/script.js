//Mudar a cor do background
let body = document.querySelector("body");
let backColorInput = document.querySelector("#backColorInput");
let backColorButton = document.querySelector("#backColorButton");

backColorButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  let newColor = backColorInput.value;
  body.style.backgroundColor = newColor;
  localStorage.setItem('backColor', newColor);
}

//Mudar a cor do texto

//Mudar o tamanho da fonte

//mudar o espaçamento entre as linhas

//Mudar o tipo da fonte


function iniciar() {
  body.style.backgroundColor = localStorage.backColor;
}
iniciar();