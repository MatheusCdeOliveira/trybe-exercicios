const nome = document.querySelector("#input-text");
const email = document.querySelector("#input-email");
const areatexto = document.getElementById('text-area')

const botao = document.getElementsByClassName("btn")[0];

botao.addEventListener("click", function () {
  if (nome.value.length < 10 || nome.value.length > 40) {
    alert("Dados Inválidos, Insira Seu Nome Completo");
    nome.value = ''
  } else if (email.value.length < 10 || email.value.length > 50) {
    alert("Dados Inválidos, Insira Seu Email Completo");
  } else if (areatexto.value.length > 500){
    alert('Dados Inválidos, limite de caracteres excedidos.')
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
}
});
