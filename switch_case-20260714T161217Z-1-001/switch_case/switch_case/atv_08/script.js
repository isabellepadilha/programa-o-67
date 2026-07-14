let curso = parseInt(prompt("Informe um número: 1, 2 ou 3."));
let resultado;

switch (curso) {
    case 1 :
        resultado = "O seu curso é o de Informática para Internet";
    break
    case 2 :
        resultado = "O seu curso é o de Administração";
    break
    case 3 :
        resultado = "O seu curso é o de Redes de Computadores";
    break

    default :
        resultado = "Número inválido";
}
alert(resultado);
