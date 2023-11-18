function calcularIMC() {
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var idade = parseInt(document.getElementById("idade").value);

    if (isNaN(altura) || isNaN(peso) || isNaN(idade)) {
        alert("Por favor, insira valores válidos.");
        return;
    }


    alert("Altura: " + altura + "m, Peso: " + peso + "kg, Idade: " + idade + " anos");
}

