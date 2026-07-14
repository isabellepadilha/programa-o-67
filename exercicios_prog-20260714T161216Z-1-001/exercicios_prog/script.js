let idade = parseInt(prompt("Informe sua idade: "));
let historico = parseInt(prompt("Informe o número de acidentes nos últimos 3 anos: "));
let freios = prompt("Possui freios abs ou airbag? ");
let valor;
let mensagem;

if (idade < 25 || historico > 2) {
     mensagem = "Perfil de risco alto";
     valor = "450.00";
     
    if (freios === "não"){
        valor = ("550.00");
    }
}
if ((idade >= 25 && (historico == 1 || historico == 2))
    || (idade < 25 && historico == 0))
{
     mensagem = "Perfil de risco moderado";
     valor = "300.00";

    if (freios === "sim"){
        valor = ("270.00");
    }
} else if (idade >= 25 && historico == 0){
    mensagem = "Perfil de risco baixo";
    valor = "180.00";
}
alert("Sua categoria de risco é: "+ mensagem);
alert("Sua mensalidade do seguro é: "+ valor);
