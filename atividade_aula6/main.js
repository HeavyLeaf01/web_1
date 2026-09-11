function VerificaIdade() {
    let idade = Number($("#idade").val());
    if (idade >= 18) {
        $(".p").text("Você é maior de idade.").css("color", "green");
    } else {
        $(".p").text("Você é menor de idade.").css("color", "red");
    }
}

function VerificaNumero(){
    let Numero = Number($("#Numero").val());
    if (Numero < 0) {
        $(".Resultado2").text("O número é negativo.").css("color", "green");
    } else if (Numero === 0) {
        $(".Resultado2").text("O número é 0.").css("color", "red");
    } else {
        $(".Resultado2").text("O número é positivo.").css("color", "blue");
    }
}

function VerificaNumero2(){
    let Numero2 = Number($("#Numero2").val());
    if (Numero2 % 2 === 0) {
        $(".Resultado3").text("O número é par").css("color", "green");
    } else {
        $(".Resultado3").text("O número é impar").css("color", "red");
    }
}