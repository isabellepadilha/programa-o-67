let numone = parseFloat(prompt("Insira seu primeiro número: "));
let numtwo = parseFloat(prompt("Insira seu segundo número :"));
let operacao = prompt("Insira um tipo de operação: ");

let resultado;

switch (operacao){
    case "+" :
        resultado=(numone+numtwo);
    break
    case "-" :
        resultado=(numone-numtwo);
    break
    case "/" :
        resultado=(numone/numtwo);
    break
    case "*" :
        resultado=(numone*numtwo);
    default :
        resultado="operação inválida!!";
}
alert("O resultado da sua operação é: "+resultado.toFixed(2));