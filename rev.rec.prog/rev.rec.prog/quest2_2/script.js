let quantTotalCartazes = parseInt(prompt("Informe o número de cartazes a serem produzidos."));
let cartazesFolhas = parseInt(prompt("Informe a quantidade de cartazes que cabem em uma folha."))
let numFolhas = parseInt(prompt("Informe o número de folhas que a máquina imprime por hora."));
let tempoDisponivel = parseFloat(prompt("Informe qual o tempo  disponível em horas."));

let folhasNecessarias = Math.ceil(quantTotalCartazes/cartazesFolhas);
let 