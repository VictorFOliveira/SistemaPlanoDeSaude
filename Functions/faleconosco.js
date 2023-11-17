function enviarDados() {
    console.log("Função enviarDados() chamada.");

    var nomeCompleto = document.getElementById("nomeCompleto").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var whatsapp = document.getElementById("Whatsapp").value;
    var sexo = document.getElementById("sexo").value;

    if (!nomeCompleto || !dataNascimento || !telefone || !email || !whatsapp || !sexo) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    alert('Dados enviados.');
    return false;
}
