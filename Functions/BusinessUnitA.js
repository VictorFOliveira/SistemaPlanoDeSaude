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
