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
let colorInput = document.querySelector("#corInput");
let colorButton = document.querySelector("#corButton");

colorButton.addEventListener("click", changeTextColor);

function changeTextColor() {
  let newTextColor = colorInput.value;
  paragraphs.style.color = newTextColor;
  localStorage.setItem('textColor', newTextColor);
}

//Mudar o tamanho da fonte
let paragraphs = document.querySelector("#main-section")
let fontSizeInput = document.querySelector("#fontSizeInput");
let fontSizeButton = document.querySelector("#fontSizeButton");

fontSizeButton.addEventListener("click", changeFontSize);

function changeFontSize() {
  let newFontSize = fontSizeInput.value;
  paragraphs.style.fontSize = newFontSize;
  localStorage.setItem('fontSize', newFontSize);
}

//mudar o espaçamento entre as linhas
let lineHeightInput = document.querySelector("#lineHeightInput");
let lineHeightButton = document.querySelector("#lineHeightButton");

lineHeightButton.addEventListener("click", changeLineHeight);

function changeLineHeight() {
  let newLineHight = lineHeightInput.value;
  paragraphs.style.lineHeight = newLineHight;
  localStorage.setItem('lineHeight', newLineHight);
}
//Mudar o tipo da fonte
let fontTypeInput = document.querySelector("#fontTypeInput");
let fontTypeButton = document.querySelector("#fontTypeButton");

fontTypeButton.addEventListener("click", changeFontType);

function changeFontType() {
  let newFontType = fontTypeInput.value;
  paragraphs.style.fontFamily = newFontType;
  localStorage.setItem('fontType', newFontType);
}

function iniciar() { // funcao para manter as mudanças mesmo apos sair da pagina
  body.style.backgroundColor = localStorage.backColor;
  paragraphs.style.color = localStorage.textColor;
  paragraphs.style.fontSize = localStorage.fontSize;
  paragraphs.style.lineHeight = localStorage.lineHeight;
  paragraphs.style.fontFamily = localStorage.fontType;
}
iniciar();