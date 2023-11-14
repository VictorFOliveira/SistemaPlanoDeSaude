function mostrarCard() {
    mostrarMensagem();
    var card = document.getElementById("calculadoraCard");
    card.style.display = "block";
}

function calcularIMC() {
    var peso = parseFloat(document.getElementById("pesoInput").value);
    var altura = parseFloat(document.getElementById("alturaInput").value);

    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira um peso e uma altura válidos.");
        return;
    }

    var imc = peso / Math.pow(altura, 2);
    alert("Seu IMC é: " + imc.toFixed(2));
}

function mostrarMensagem() {
    var mensagemCard = document.getElementById("mensagemCard");
    mensagemCard.style.display = "block";
}

function Fconosco(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none"){
        document.getElementById(el).style.display = 'block';
    } else{
        document.getElementById(el).style.display = 'none';
    }
}

function Snos(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none"){
        document.getElementById(el).style.display = 'block';
    } else{
        document.getElementById(el).style.display = 'none';
    }
}

