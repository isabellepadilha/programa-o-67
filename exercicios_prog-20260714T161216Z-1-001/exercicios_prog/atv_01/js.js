let numbOne = parseFloat(prompt("Insira o primeiro número:"));
let numbTwo = parseFloat(prompt("Insira o segundo número:"));
let oraperacao = (prompt("Informe a operação (+,-,*,/):"));

let soma = numbOne + numbTwo;
let subtracao = numbOne - numbTwo;
let multiplicacao = numbOne * numbTwo;
let divisao = numbOne / numbTwo;
let rwsulayado;

if (oraperacao==="+"){
    rwsulayado=soma;
} else if (oraperacao==="-"){
    rwsulayado=subtracao;
} else if (oraperacao==="*"){
    rwsulayado=multiplicacao;
} else{
    rwsulayado=divisao;
}