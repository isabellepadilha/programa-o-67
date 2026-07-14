let areaTotal=parseFloat(prompt("Informe o tamanho da área irrigada em metros quadrados."));
let quantidadeAgua=parseFloat(prompt("Informe a quantidade total de água utilizada em litros."));
let areaSetor=parseFloat(prompt("Informe a área de um setor em específico em metros quadrados."));

let consumoAgua= ((areaTotal)/(quantidadeAgua));
let cunsumoSetor=  ((consumoAgua)*(areaSetor));
let diferencaSetor = ((consumoSetor)-500);

alert("O total de consumo de água por metro quadrado é de " + (consumoAgua.toFixed(2)));
alert("O consumo de água por setor é de " + (consumoSetor.toFixed(2)));
alert("A diferença entre o consumo do setor e 500 litros é de " + (diferencaSetor.toFixed(2)));