let codigo = prompt("Insira um código referente ao seu meio de transporte escolhido (C,M,B)");
let resposta;

switch (codigo.toUpperCase()){
    case "C" :
        resposta = "Carro";
    break
    case "M" :
        resposta = "Moto";
    break
    case "B" :
        resposta = "Bicicleta";
    break
    default :
        resposta = "Código inválido";
}
alert(resposta);