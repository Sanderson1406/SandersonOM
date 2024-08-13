function submeter() {
    let nome = document.getElementById("nome").value;
    let titulo = document.getElementById("titulo").value;
    let cpf = document.getElementById("cpf").value;

    //console.log(titulo)
    //console.log(nome)
    console.log(validaCPF(cpf))
}

function validaCPF(cpf) {
    if (cpf == "") {
        alert("Campo CPF não pode ser vazio")
        return false
    }

    cpf = cpf.trim();

    if (/[a-zA-Z]/.test(cpf)) {
        alert("CPF não pode ter letras");
    }
    

    if (!/^[\d.-]+$/.test(cpf)) {
        alert("Caracter invalido")
    } 
    
    return true
}
