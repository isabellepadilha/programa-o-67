let categoria = prompt("Insira um código que indique o tipo de residencia: ");
let quantidade = parseFloat(prompt("Insira a quantidade de energia gasta: "));
let contas;

switch (categoria.toUpperCase){
    case R :
        contas = quantidade * 0.75;
        alert("Sua conta deu : "+contas.toFixed(2));
    break
    case C :
        contas = quantidade * 0.92;
        alert("Sua conta deu : "+contas.toFixed(2));
    break
    case I :
        contas = quantidade * 0.68;
        alert("Sua conta deu : "+contas.toFixed(2));
    break
    default :
        alert("Código inválido.");
}