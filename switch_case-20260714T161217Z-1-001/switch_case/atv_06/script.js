let cod= parseInt(prompt("Informe um código: 100, 200 ou 300: "));
let res;

switch (cod){
    case 100 :
        res= "Mouse\nR$ 50.00";
    break
    case 200 :
        res= "Teclado\nR$ 80.00";
    break
    case 300 :
        res= "Monitor\nR$ 90.00";
    break
    default :
        res= "Código inválido!!";
}
alert(res);