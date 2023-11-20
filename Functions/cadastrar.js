function enviarDados() {
    var nomeCompleto = document.getElementById('nomeCompleto').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var whatsapp = document.getElementById('Whatsapp').value;
    var sexo = document.getElementById('sexo').value;
    var empresa = document.getElementById('empresa').value;
    var plano = document.getElementById('plano').value;
    var formaPagamento = document.getElementById('formaPagamento').value;


    var mensagem = `Dados enviados:\n\nNome: ${nomeCompleto}\nData de Nascimento: ${dataNascimento}\nTelefone: ${telefone}\nEmail: ${email}\nWhatsapp: ${whatsapp}\nSexo: ${sexo}\nEmpresa: ${empresa}\nPlano: ${plano}\nForma de Pagamento: ${formaPagamento}`;

    alert(mensagem);

    document.getElementById('formulario').reset();
}
