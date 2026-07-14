let menu = parseInt(prompt("Irá querer água 1,refrigerante 2 ou suco 3? Digite aqui: "));
let resultado;

switch (menu){
    case 1 :
        resultado="Água";
    break
    case 2 :
        resultado="Refrigerante";
    break
    case 3 :
        resultado="Suco";
    break
    default :
        resultado="Código inválido";
}
alert("Sua bebida é: "+resultado);