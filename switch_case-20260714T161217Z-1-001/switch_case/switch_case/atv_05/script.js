let mes = parseInt(prompt("Informe um mês do ano a partir de um número inteiro de 1 a 12; "));
let resul;

switch (mes){
    case 1 :
        resul= "Janeiro";
    break
    case 2 :
        resul= "Fevereiro";
    break
    case 3 :
        resul= "Março";
    break
    case 4 :
        resul= "Abril";
    break
    case 5 :
        resul= "Maio";
    break
    case 6 :
        resul= "Junho";
    break
    case 7 :
        resul= "Julho";
    break
    case 8 :
        resul= "Agosto";
    break
    case 9 :
        resul= "Setembro";
    break
    case 10 :
        resul= "Outubro";
    break
    case 11 :
        resul= "Novembro";
    break
    case 12 :
        resul= "Dezembro";
    break
    default :
        resul= "Mês inválido"
}
alert(resul);