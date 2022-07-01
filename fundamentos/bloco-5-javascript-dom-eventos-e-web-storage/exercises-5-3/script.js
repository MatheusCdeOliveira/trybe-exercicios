function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
let listaUl = document.getElementById("days");

function calendario() {
  for (index = 0; index < decemberDaysList.length; index += 1) {
    let lista = document.createElement("li");
    lista.innerText = decemberDaysList[index];
    if (decemberDaysList[index] === 24 || decemberDaysList[index] === 31) {
      lista.className = "day holiday";
    } else if (
      decemberDaysList[index] === 4 ||
      decemberDaysList[index] === 11 ||
      decemberDaysList[index] === 18
    ) {
      lista.className = "day friday";
    } else if (decemberDaysList[index] === 25) {
      lista.className = "day friday holiday";
    } else {
      lista.className = "day";
    }
    listaUl.appendChild(lista);
  }
}
calendario();

function buttonHolidays(feriados) {
  let divPai = document.querySelector(".buttons-container");
  let botao = document.createElement("button");
  botao.innerText = feriados;
  botao.id = "btn-holiday";
  divPai.appendChild(botao);
}
buttonHolidays("Feriados");


function alteraCor() {
  let feriado = document.querySelectorAll(".holiday");
  let botaoFeriado = document.querySelector("#btn-holiday");
  botaoFeriado.addEventListener("click", function() {
    for (index = 0; index < feriado.length; index += 1) {
      if (feriado[index].style.backgroundColor === 'white') {
        feriado[index].style.backgroundColor = 'rgb(238,238,238)'
      } else {
        feriado[index].style.backgroundColor = 'white' // condiçao 'else' atribui um background white para feriado e dessa maneira a condiçao 'if' se torna true.
      }
      
    }
  });
}

alteraCor();
