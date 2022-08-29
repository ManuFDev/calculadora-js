//variables 

const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const buttonNumber = document.querySelectorAll(".number");
const buttonOperator = document.querySelectorAll(".operator");

const display = new Display(displayValorAnterior, displayValorActual);

buttonNumber.forEach(boton => {
    boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});

buttonOperator.forEach(boton => {
    boton.addEventListener("click", ()=> display.computar(boton.value))
})