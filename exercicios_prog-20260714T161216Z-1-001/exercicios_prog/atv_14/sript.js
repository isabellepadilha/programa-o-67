let nota1 = parseFloat(prompt("insira sua primeira nota"));
let nota2 = parseFloat(prompt("insira a segunda nota"));

let media= (nota1+nota2)/2;
let situacao;

if (media>= 7){
   situacao=("aprovado!");
} else if (media >= 5 && media<=6.9){
   situacao=("recuperação")
} else{
   situacao= ("reprovado");
}
alert("sua média é: "+media.toFixed(2));
alert("sua situação é: "+situacao);