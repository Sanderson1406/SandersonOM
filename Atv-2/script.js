function submeter(){
    
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;
    
    console.log(cpf);
    console.log(validacpf(cpf))

}

function validacpf(cpf){

    /*
    continuar validação:
    CPF validos:
        123.456.789-10
        12345678910
    
    Fazer:

    - validar se a posição do . e - estão corretas

    - validar se o cpf está correto
        */
    if (cpf == "" ){
        alert("Campo CPF não pode ser vazio");
        return false;
    }
    
    cpf = cpf.trim();

    if (/[a-zA-Z]/.test(cpf)){
        alert("CPF não pode conter letras");
        return false;
    }
    
   array = Array.from(cpf)
   
    if (cpf.length != 14 || !/^[\d.-]+$/.test(cpf) ){
        if ((cpf[3] || cpf[7] != ".") && cpf[11] != "-") {
            alert("Formato errado, apenas aceito ***.***.***-**")
            return false
        }
        alert("Tamanho errado")
        return false
    } else if (cpf.length != 14 || cpf.length != 11) {
        alert("Tamanho incorreto, apenas aceito tamanho de 11 e 14 nos respectivos formatos")
        return false
    }
    
    cpf = cpf.replace("/[.-]/g","");
    console.log(cpf);

    let soma = 0;

    for (i = 1; i <= 9; i++) {
        console.log(cpf.charAt(i-1));
        soma = soma + (cpf.charAt(i-1) * (10 - (i-1)))
    }

    console.log(soma);
    let resto = soma % 11;

    return true; 
}
