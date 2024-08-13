function submeter() {
    let nome = document.getElementById("nome").value;
    let titulo = document.getElementById("titulo").value;
    let cpf = document.getElementById("cpf").value;

    //console.log(titulo)
    //console.log(nome)
    console.log(validaCPF(cpf))
}

function validaCPF(cpf) {

/* Continuar validação
formatos CPFs validos:
123.456.89-10
12345678910
*/
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

    if(cpf.length != 1 && !cpf.length != 14) {
        alert("Formato invalido")
        return false
    }
    
    return true
}
