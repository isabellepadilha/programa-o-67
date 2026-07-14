let salario = parseFloat(prompt("Informe seu salário:"));
// 
let imposto;
//
if (salario === 5000){
    valorImposto = (salario*0.15);
} else if (salario>5000){
    valorImposto = (salario*0.27);
} else{
    valorImposto = 0;
}
alert("O valor do seu imposto é:"+valorImposto.toFixed(2));