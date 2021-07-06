function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

//exercicio 1 - criando os dias do calendario
function createDays() {
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let ulDays = document.querySelector("#days"); // armazenando o ul onde os dias serão inseridos

for (let i of dezDaysList) {
  let day = i;
  let dayItem = document.createElement("li");

  if (i === 24 || i === 31) {
    dayItem.className = "day holiday";
    dayItem.innerHTML = i;
    ulDays.appendChild(dayItem);
  } else if (i === 4 || i === 11 || i === 18) {
    dayItem.className = "day friday";
    dayItem.innerHTML = i;
    ulDays.appendChild(dayItem);
  } else if (i === 25) {
    dayItem.className = "day friday holiday";
    dayItem.innerHTML = i;
    ulDays.appendChild(dayItem);
  } else {
    dayItem.className = "day";
    dayItem.innerHTML = i;
    ulDays.appendChild(dayItem);
  }
}
}
createDays();

//exercicio 2 - criar o botao de feriados
let buttonContainer = document.querySelector(".buttons-container");
let buttonHoliday = document.createElement("button");

function createHolidayButton(string) {
  buttonHoliday.id = "btn-holiday";
  buttonHoliday.innerText = string;

  buttonContainer.appendChild(buttonHoliday);
}
createHolidayButton("Feriados")

//exercicio 3 - mudar cor de fundo dos feriados
let holidaysArray = document.querySelectorAll(".holiday");
buttonHoliday.addEventListener("click", highlightHoliday);

function highlightHoliday() {
  for (let i of holidaysArray) {
    if (i.style.backgroundColor !== "green") {
      i.style.backgroundColor = "green";
    } else {
      i.style.backgroundColor = "rgb(238, 238, 238)";
    }
  }
}

//exercicio 4 - criar um botao para sexta feira
let fridayButton = document.createElement("button");

function createFridayButton(string) {
  fridayButton.innerText = string;
  buttonContainer.appendChild(fridayButton);
}
createFridayButton("Sexta-feira")

//exercicio 5 - Modificar o texto de sexta ṕara sextou!
fridayButton.addEventListener("click", changeFridayText);

function changeFridayText() {
  let fridayArray = document.querySelectorAll(".friday")
  let fridayDays = [4, 11, 18, 25];

  for (let i in fridayArray) {
    if (fridayArray[i].innerText !== "Sextou!") {
      fridayArray[i].innerText = "Sextou!";
    } else {
      fridayArray[i].innerText = fridayDays[i];
    }
  }
}

//exercicio 6 - adiciona efeito de zoomIn e zoomOut nos dias
let ulDays = document.querySelector("#days");
ulDays.addEventListener("mouseover", zoomIn);
ulDays.addEventListener("mouseout", zoomOut);

function zoomIn(e) {
  if (e.target.id !== "days") {
    e.target.style.transform = "scale(1.6)";
  }
}

function zoomOut(e) {
  if (e.target.id !== "days") {
    e.target.style.transform = "scale(1.0)";
  }
}

//exercicio 7 - adicionar tarefa personalizada ao calendario
let myTasks = document.querySelector(".my-tasks")
let newTask = document.createElement("span");

function addTask(string) {
  newTask.innerText = string;
  myTasks.appendChild(newTask);
}
addTask("Estudar");

//exercicio 8 - implementar uma legenda com cor para a tarefa criada anteriormente
let newColorDiv = document.createElement("div");

function setColor(color) {
  newColorDiv.className = "task";
  newColorDiv.style.backgroundColor = color;
  myTasks.appendChild(newColorDiv);
}
let taskColor = "red";
setColor(taskColor);

//exercicio 9 - adicionar a classe selected quando selecionar a div da cor inserida
newColorDiv.addEventListener("click", selectedTask);

function selectedTask(e) {
  e.target.classList.toggle("selected");
}

//exercicio 10 - Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
ulDays.addEventListener("click", changeDayBackground);

function changeDayBackground(e) {
  if (e.target.id !== "days" && e.target.style.backgroundColor !== taskColor) {
    e.target.style.backgroundColor = taskColor;
  } else {
    e.target.style.backgroundColor = "rgb(238, 238, 238)";
  }
}

//Bonus - Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
let input = document.querySelector("#task-input");
let ul = document.querySelector("#meus-compromissos");
let addbutton = document.querySelector("#btn-add");

input.addEventListener("keypress", addItemOnKeyPress);
addbutton.addEventListener("click", addItemOnClick);

function createListItem() {
  let li = document.createElement("li");
  li.innerText = input.value;
  ul.appendChild(li);
  input.value = "";
}


function addItemOnClick() {
  if (input.value.length > 0) {
    createListItem();
  } else {
    alert ("Inválido, insira um compromisso");
  }
}

function addItemOnKeyPress(e) {
  if (input.value.length > 0 && e.key == "Enter") {
    createListItem();
  }
}