let forma= prompt("Informe a forma que vc quer calcular. Quadrado, retangulo ou circulo: ");
let resul;

switch (forma){
    case "quadrado" :
        let ladoum = parseFloat(prompt("Informe o valor do lado do quadrado: "));
        let ladodois = parseFloat(prompt("Informe o valor do lado do quadrado: "));
        resul= ladoum* ladodois;
    break
    case "retangulo" :
        let base = parseFloat(prompt("Informe a base do retangulo: "));
        let altura = parseFloat(prompt("Informe a altura do retangulo: "));
        resul = base * altura;
    break
    case "circulo" :
        let raio = parseFloat(prompt("Informe o raio do circulo: "));
        resul = Math.PI *(raio**2);
    break
    default :
        resul = "Forma incorreta. Tente novamente.";
}
alert(resul.toFixed(2));