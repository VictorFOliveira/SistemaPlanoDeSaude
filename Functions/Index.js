document.addEventListener("DOMContentLoaded", function() {
    ocultarConteudo("conteudoText");
    ocultarConteudo("conteudoFc");
});

function mostrarCard() {
    var card = document.getElementById("mensagemCard");
    card.style.display = "block";
    
    setTimeout(function () {
        window.location.href = 'planos.html';
    }, 2000); 
}


function encaminharFc() { 
    setTimeout(function () {
        window.location.href = 'faleconosco.html';
    }, 100); 
}


function ocultarConteudo(el) {
    var conteudo = document.getElementById(el);
    conteudo.style.display = "none";
}


function Snos(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none"){
        document.getElementById(el).style.display = 'block';
        ocultarConteudo("conteudoFc");
    } else {
        document.getElementById(el).style.display = 'none';
    }
}
