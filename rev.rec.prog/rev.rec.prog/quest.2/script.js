let quantidadePagina= parseInt(prompt("Informe a quantidade de páginas a serem digitadas."));
let numeroDigitadores= parseInt(prompt("Informe o númro de digitadores trabalhando atualmente."));
let tempoTotal = parseFloat(prompt("Informe o tempo total estimado em horas para concluir o trabalho."));
let novosDigitadores= parseInt(prompt("Informe o número de novos digitadores que serão adicionados à equipe."));

let quantidadeMediaPaginas= ((quantidadePagina)/(tempoTotal));
let novoNumeroDigitadores= ((numeroDigitadores) + (novosDigitadores));
let novoTempo= ((novoNumeroDigitadores)*(tempoTotal));

alert("A quantidade de páginas por hora é de " + (quantidadeMediaPaginas));
alert("A quantidade de novos digitadores é de " + (novoNumeroDigitadores));
alert("Novo tempo estimado foi de " + (novoTempo));