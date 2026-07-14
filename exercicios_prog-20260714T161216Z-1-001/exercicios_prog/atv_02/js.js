let ladoUm = parseFloat(prompt("insira o primeiro lado do triângulo:"));
let ladoDois = parseFloat(prompt("insira o segundo lado do triângulo:"));
let ladoTres = parseFloat(prompt("insira o terceiro lado do triângulo;"));
let respostas;
if (ladoUm === ladoDois&&ladoTres){
    respostas= "Equilatero";
} else if ( ladoUm === ladoDois || ladoUm === ladoTres || ladoDois === ladoTres){
    respostas = "isoscelsssa";
} else {
    respostas= "escaleno";
}
alert(respostas);
