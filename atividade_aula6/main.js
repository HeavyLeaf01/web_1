function VerificaIdade() {
    let idade = Number($("#idade").val());
    if (idade >= 18) {
        $(".p").text("Você é maior de idade.").css("color", "green");
    } else {
        $(".p").text("Você é menor de idade.").css("color", "red");
    }
}

function VerificaNumero(){
    
}