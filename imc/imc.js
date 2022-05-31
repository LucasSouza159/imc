var capturando1 = "";
var capturando2 = "";

function imc() {
    capturando1 = document.getElementById("peso").value;
    capturando2 = document.getElementById("altura").value;
    let peso = capturando1;
    let altura = capturando2;
    const imc = peso / Number(Math.pow(altura, 2));

    if (imc <= 18.5) {
        document.getElementById("valorDigitado").innerHTML = "Seu IMC é: " + imc.toFixed(1) + " Você está abaixo do peso ideal, precisa se alimentar melhor";
    }
    else if ((imc > 19) && (imc <= 24.9)) {
        document.getElementById("valorDigitado").innerHTML = "Seu IMC é: " + imc.toFixed(1) + " Seu peso está normal";
        document.getElementById("valorDigitado").style.color = "rgb(8, 228, 0)";
    } else if ((imc > 25) && (imc <= 29.9)) {
        document.getElementById("valorDigitado").innerHTML = "Seu IMC é: " + imc.toFixed(1) + " Você está com sobrepeso, precisa se cuidar!";
        document.getElementById("valorDigitado").style.color = "yellowgreen";
    } else if ((imc > 30) && (imc <= 34.9)) {
        document.getElementById("valorDigitado").innerHTML = "Seu IMC é: " + imc.toFixed(1) + " Você está com obesidade grau I, precisa se cuidar!";
        document.getElementById("valorDigitado").style.color = "yellow";
    } else if ((imc > 35) && (imc <= 39.9)) {
        document.getElementById("valorDigitado").innerHTML = "Seu IMC é: " + imc.toFixed(1) + " Você está com obesidade grau II, precisa se cuidar para ontem!";
        document.getElementById("valorDigitado").style.color = "rgb(228, 110, 0)";
    } else if (imc > 40) {
        document.getElementById("valorDigitado").innerHTML = "Seu IMC é: " + imc.toFixed(1) + " Você está com obesidade morbida, precisa urgentemente se cuidar!!!";
        document.getElementById("valorDigitado").style.color = "rgb(180, 0, 0)";
    } else {
        document.getElementById("valorDigitado").innerHTML = "Digite um valor";
    }
}
