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
// 1 - Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
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

// 2 - Implemente uma função que crie dinamicamente um botão com o nome "Feriados".

function buttonHolidays(feriados) {
  let divPai = document.querySelector(".buttons-container");
  let botao = document.createElement("button");
  botao.innerText = feriados;
  botao.id = "btn-holiday";
  divPai.appendChild(botao);
}
buttonHolidays("Feriados");

// 3 - Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
function alteraCor() {
  const feriado = document.querySelectorAll(".holiday");
  const botaoFeriado = document.querySelector("#btn-holiday");
  botaoFeriado.addEventListener("click", function () {
    for (index = 0; index < feriado.length; index += 1) {
      if (feriado[index].style.backgroundColor === "white") {
        feriado[index].style.backgroundColor = "red";
      } else {
        feriado[index].style.backgroundColor = "white"; // condiçao 'else' atribui um background white para feriado e dessa maneira a condiçao 'if' se torna true.
      }
    }
  });
}

alteraCor();

// 4 - Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".

function fridayButton(nomeBotao) {
  const buttonContainer = document.querySelector(".buttons-container");
  const botaoSexta = document.createElement("button");
  botaoSexta.id = "btn-friday";
  botaoSexta.innerText = nomeBotao;
  buttonContainer.appendChild(botaoSexta);
}
fridayButton("Sexta-Feira");

// 5 Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
function showFriday(fridays) {
  let sexta = document.getElementById("btn-friday");
  let friday = document.getElementsByClassName("friday");
  sexta.addEventListener("click", function () {
    for (let index = 0; index < friday.length; index += 1) {
      if (friday[index].innerText !== "SEXTOU!") {
        friday[index].innerText = "SEXTOU!";
      } else {
        friday[index].innerText = fridays[index];
      }
    }
  });
}

showFriday([4, 11, 18, 25]);

// 6 Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
function darZoom() {
  let dias = document.getElementById('days')
  dias.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "35px";
  });
}
darZoom()

function tirarZoom() {
  let dias = document.getElementById("days");
  dias.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = '20px'
  });
}
tirarZoom()