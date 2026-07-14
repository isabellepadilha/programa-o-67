let codigo = parseInt(prompt("Insira um código 1 ou 2: "));
let resposta;

switch (codigo){
    case 1 :
        let numero = parseFloat(prompt("Insira o valor do km para a conversão em metros: "));
        resposta = numero * 1000;
    break
    case 2 :
        let num = parseFloat(prompt("Insira o valor em metros para a conversão em km :"));
        resposta = num / 1000;
    break
    default :
        resposta = "valor incorreto";
}
alert("O valor deu: "+ resposta.toFixed(2));


