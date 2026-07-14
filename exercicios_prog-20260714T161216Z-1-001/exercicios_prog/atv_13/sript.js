let peso = parseFloat(prompt("informe o peso do prouto:"));
let preco;

if (peso<=5){
   alert("20 reais");
} else if (peso > 5 && peso <=20){
   alert("50 reais");
} else {
   alert("100 reais");
}