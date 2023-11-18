function mostrarConteudo() {
    var conteudo = document.getElementById('conteudoParaOcultar');
    if (conteudo.style.display === 'block' || conteudo.style.display === '') {
        conteudo.style.display = 'none';
    } else {
        conteudo.style.display = 'block';
    }
}

function mostrarConteudo2() {
    var conteudo2 = document.getElementById('conteudoParaOcultar2');
    if (conteudo2.style.display === 'block' || conteudo2.style.display === '') {
        conteudo2.style.display = 'none';
    } else {
        conteudo2.style.display = 'block';
    }
}

