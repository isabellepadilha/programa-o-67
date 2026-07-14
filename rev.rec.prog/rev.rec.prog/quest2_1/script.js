let quantTarefas = parseInt(prompt("Informe o total da quantidade de tarefas."));
let numFuncionarios = parseInt(prompt("Informe o número atual de funcionários."));
let novosFuncionarios = parseInt(prompt("Informe o número de novos funcionários."));

let medTarefas = ((quantTarefas)/numFuncionarios);
let novaMedia = (((numFuncionarios)+(novosFuncionarios))/ (quantTarefas));
let diferenMedias = ((medTarefas)-(novaMedia));

alert("Sua antiga média foi de " + (medTarefas.toFixed(2)));
alert("Sua nova média foi de " + (novaMedia.toFixed(2)));
alert("A diferença entre as duas médias foi de " + (diferenMedias.toFixed(2)))