let periodo = prompt("Informe o periodo do dia com : M para manhã, T para tarde e N para noite");
let saudacao;

switch (periodo){
    case "M" :
        saudacao = "Bom dia!! ☀️";
    break
    case "T" :
        saudacao = "Boa Tarde!!🌄";
    break
    case "N" :
        saudacao = "Boa noite!! 🌙";
    break
    default :
        saudacao = "Boa madrugada!! 🌑";
}
alert(saudacao);
