let ladoum = parseFloat(prompt("Informe qual o lado um do triângulo: "));
let ladodois = parseFloat(prompt("Informe o segundo lado do triângulo: "));
let ladotres= parseFloat(prompt("Informe o terceiro lado do triângulo: "));

let triangulo;

if (ladoum + ladodois > ladotres && ladodois + ladotres > ladoum && ladoum + ladotres> ladodois){
   alert("forma um triângulo");
} else{
   alert("não forma um triângulo");
}