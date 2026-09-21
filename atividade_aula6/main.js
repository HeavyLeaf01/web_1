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

function VerificaNota(){
    let Nota = Number($("#Nota").val());
    if (Nota >= 60) {
        $(".Resultado4").text("O aluno foi aprovado.").css("color", "green");
    } else {
        $(".Resultado4").text("O aluno foi reprovado.").css("color", "red");
    }
}

function CalculaMedia() {
    let n1 = Number($("#nota1").val());
    let n2 = Number($("#nota2").val());
    let n3 = Number($("#nota3").val());
    let media = (n1 + n2 + n3) / 3;
    
    if (media >= 60) {
        $(".Resultado5").text("Aprovado").css({"color": "green", "background-color": "#c8e6c9"});
    } else {
        $(".Resultado5").text("Reprovado").css({"color": "red", "background-color": "#ffcdd2"});
    }
}

function MaiorEntreDois() {
    let num1 = Number($("#numA").val());
    let num2 = Number($("#numB").val());
    
    $("#numA, #numB").css("background-color", "");
    
    if (num1 > num2) {
        $("#numA").css("background-color", "lightgreen");
    } else if (num2 > num1) {
        $("#numB").css("background-color", "lightgreen");
    } else {
        $("#numA, #numB").css("background-color", "yellow");
    }
}

function MaiorEntreTres() {
    let num1 = Number($("#numC1").val());
    let num2 = Number($("#numC2").val());
    let num3 = Number($("#numC3").val());
    
    $("#numC1, #numC2, #numC3").css({"background-color": "", "border": "1px solid #94524f"});
    
    let maior = Math.max(num1, num2, num3);
    
    if (maior === num1) $("#numC1").css({"background-color": "lightgreen", "border": "2px solid green"});
    if (maior === num2) $("#numC2").css({"background-color": "lightgreen", "border": "2px solid green"});
    if (maior === num3) $("#numC3").css({"background-color": "lightgreen", "border": "2px solid green"});
}

function VerificarSenhaSimples() {
    let senha = $("#inputSenha").val();
    if (senha === "1234") {
        $("#inputSenha").css("background-color", "lightgreen");
        $("#btnLiberado").prop("disabled", false);
    } else {
        $("#inputSenha").css("background-color", "lightcoral");
        $("#btnLiberado").prop("disabled", true);
    }
}

function SistemaLogin() {
    let user = $("#loginUser").val();
    let pass = $("#loginPass").val();
    
    if (user === "admin" && pass === "1234") {
        $(".ResultadoLogin").text("Acesso permitido").css({"background-color": "green", "color": "white"});
    } else {
        $(".ResultadoLogin").text("Acesso negado").css({"background-color": "red", "color": "white"});
    }
}

function Calculadora(operacao) {
    let n1 = Number($("#calcNum1").val());
    let n2 = Number($("#calcNum2").val());
    let res = 0;
    
    if (operacao === 'somar') res = n1 + n2;
    else if (operacao === 'subtrair') res = n1 - n2;
    else if (operacao === 'multiplicar') res = n1 * n2;
    else if (operacao === 'dividir') res = n1 / n2;

    $(".ResultadoCalc").text("Resultado: " + res).css("background-color", "#e27c77");
}

function ConverterTemp() {
    let c = Number($("#tempC").val());
    let f = (c * 9 / 5) + 32;
    
    if (f > 100) {
        $(".ResultadoTemp").text(f.toFixed(1) + " °F - Temperatura Alta!").css({"background-color": "red", "color": "white"});
    } else {
        $(".ResultadoTemp").text(f.toFixed(1) + " °F").css({"background-color": "lightblue", "color": "black"});
    }
}

function CalcularDesconto() {
    let valor = Number($("#valorCompra").val());
    let final = valor;
    
    if (valor > 500) {
        final = valor * 0.8;
        $(".ResultadoDesc").css({"background-color": "green", "color": "white"});
    } else if (valor > 100) {
        final = valor * 0.9;
        $(".ResultadoDesc").css({"background-color": "orange", "color": "black"});
    } else {
        $(".ResultadoDesc").css({"background-color": "gray", "color": "white"});
    }
    
    $(".ResultadoDesc").text("Valor Final: R$ " + final.toFixed(2));
}

function CalcularFrete() {
    let valor = Number($("#valorFrete").val());
    let frete = 0;
    
    if (valor < 100) {
        frete = 20;
        $(".ResultadoFrete").css({"background-color": "red", "color": "white"});
    } else if (valor >= 100 && valor <= 199) {
        frete = 10;
        $(".ResultadoFrete").css({"background-color": "orange", "color": "black"});
    } else {
        frete = 0;
        $(".ResultadoFrete").css({"background-color": "green", "color": "white"});
    }
    
    let mensagem = frete === 0 ? "Frete Grátis!" : "Frete: R$ " + frete.toFixed(2);
    $(".ResultadoFrete").text(mensagem);
}

function ClassificarIdade() {
    let idade = Number($("#idadeClasse").val());
    let srcImagem = "";
    
    if (idade <= 12) {
        srcImagem = "crianca.png";
    } else if (idade <= 17) {
        srcImagem = "adolescente.png";
    } else if (idade <= 59) {
        srcImagem = "adulto.png";
    } else { 
        
        srcImagem = "idoso.png"; 
    }
    $("#imgIdade").attr("src", srcImagem).css({width: "200px"});
}

function VerificarVelocidade() {
    let vel = Number($("#inputVelocidade").val());
    
    if (vel <= 60) {
        $(".ResultadoVel").text("Velocidade normal").css({"background-color": "green", "color": "white"});
    } else if (vel <= 80) {
        $(".ResultadoVel").text("Atenção").css({"background-color": "yellow", "color": "black"});
    } else {
        $(".ResultadoVel").text("Excesso de velocidade").css({"background-color": "red", "color": "white"});
    }
}

function ControleSemaforo(cor) {
    if (cor === 'vermelho') {
        $("#semaforoVisor").text("Pare").css({"background-color": "red", "color": "white"});
    } else if (cor === 'amarelo') {
        $("#semaforoVisor").text("Atenção").css({"background-color": "yellow", "color": "black"});
    } else if (cor === 'verde') {
        $("#semaforoVisor").text("Siga").css({"background-color": "green", "color": "white"});
    }
}

function ControleLampada(estado) {
    if (estado === 'ligar') {
        $("#imgLampada").attr("src", "lampadaLigada.png").css({width: "200px"});
    } else {
        $("#imgLampada").attr("src", "lampadaDesligada.png").css({width: "200px"});
    }
}

function MudarModo(modo) {
    if (modo === 'escuro') {
        $("body").css({"background-color": "#222", "color": "#fff"});
        $("h1, p").css("color", "#fff");
    } else {
        $("body").css({"background-color": "#eec9c9", "color": "#000"});
        $("h1").css("color", "#94524f");
        $("p").css("color", "#eec9c9");
    }
}

let progressoAtual = 0;
function AvancarProgresso() {
    if (progressoAtual < 100) {
        progressoAtual += 10;
        $("#barraProgresso").css("width", progressoAtual + "%");
    }
    
    if (progressoAtual >= 100) {
        $("#barraProgresso").css("background-color", "green");
        $("#msgProgresso").text("Processo concluído!").css("color", "green");
    }
}

function VerificarEstoque() {
    let qtd = Number($("#qtdEstoque").val());
    let div = $(".ResultadoEstoque");
    
    if (qtd === 0) {
        div.text("Esgotado").css({"background-color": "red", "color": "white"});
    } else if (qtd >= 1 && qtd <= 5) {
        div.text("Estoque baixo").css({"background-color": "orange", "color": "black"});
    } else if (qtd >= 6 && qtd <= 20) {
        div.text("Estoque normal").css({"background-color": "blue", "color": "white"});
    } else {
        div.text("Estoque alto").css({"background-color": "green", "color": "white"});
    }
}

function AnalisarForcaSenha() {
    let senha = $("#senhaForca").val();
    let tamanho = senha.length;
    
    if (tamanho < 6) {
        $("#senhaForca").css({"background-color": "lightcoral", "border": "3px solid red"});
    } else if (tamanho >= 6 && tamanho <= 9) {
        $("#senhaForca").css({"background-color": "lightyellow", "border": "3px solid orange"});
    } else {
        $("#senhaForca").css({"background-color": "lightgreen", "border": "3px solid green"});
    }
}

function SelecionarTema() {
    let opcao = Number($("#inputTema").val());
    
    $("#erroTema").text(""); 
    
    if (opcao === 1) {
        $("body").css({"background-color": "#fff", "color": "#000"});
    } else if (opcao === 2) {
        $("body").css({"background-color": "#333", "color": "#fff"});
    } else if (opcao === 3) {
        $("body").css({"background-color": "#ffb6c1", "color": "#8b0000"});
    } else {
        $("body").css("background-color", "#eec9c9");
        $("#erroTema").text("Entrada inválida! Digite 1, 2 ou 3.").css("color", "red");
    }
}

function VerificarNivel() {
    let pts = Number($("#pontuacao").val());
    let srcImagem = "";
    
    if (pts >= 0 && pts <= 99) srcImagem = "Iniciantes.png";
    else if (pts >= 100 && pts <= 499) srcImagem = "Intermediarios.png";
    else if (pts >= 500 && pts <= 999) srcImagem = "Avancados.png";
    else srcImagem = "Mestres.png";
    
    $("#imgNivel").attr("src", srcImagem).css({width: "200px"});
}

function CadastrarAluno() {
    let nome = $("#classNome").val();
    let idade = Number($("#classIdade").val());
    let nota = Number($("#classNota").val());
    
    let txtIdade = idade >= 18 ? "Maior de idade" : "Menor de idade";
    let txtNota = nota >= 60 ? "Aprovado" : "Reprovado";
    let divResultado = $(".ResultadoClassificacao");
    let srcImagem = "";
    
    divResultado.text(`${nome} - ${txtIdade} - ${txtNota}`);
    
    if (nota >= 60) {
        divResultado.css({"color": "green", "font-size": "22px", "border": "2px solid green"});
        srcImagem = "aprovado.png";
    } else {
        divResultado.css({"color": "red", "font-size": "18px", "border": "2px solid red"});
        srcImagem = "reprovado.png";
    }
    
    divResultado.attr("title", `Situação final: ${txtNota}`);

    $("#imgAluno").attr("src", srcImagem).css({width: "200px"});
}