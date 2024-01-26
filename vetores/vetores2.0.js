function mergeSort(arrayParaOrdenar, cont) {
  if (arrayParaOrdenar.length <= 1) {
    return arrayParaOrdenar;
  }

  var meio = Math.floor(arrayParaOrdenar.length / 2);
  var esquerda = arrayParaOrdenar.slice(0, meio);
  var direita = arrayParaOrdenar.slice(meio);

  return merge(mergeSort(esquerda, cont), mergeSort(direita, cont), cont);
}

function merge(esquerda, direita, cont) {
  var resultado = [];
  var indiceEsquerda = 0;
  var indiceDireita = 0;

  while (indiceEsquerda < esquerda.length && indiceDireita < direita.length) {
    if (esquerda[indiceEsquerda] < direita[indiceDireita]) {
      resultado.push(esquerda[indiceEsquerda]);
      indiceEsquerda++;
    } else {
      resultado.push(direita[indiceDireita]);
      indiceDireita++;

      cont[0] += esquerda.length - indiceEsquerda;
    }
  }

  return resultado.concat(esquerda.slice(indiceEsquerda)).concat(direita.slice(indiceDireita));
}

var arrayParaOrdenar = [235, 14, 1, 133, 23, 43, 21, 435, 200, 37];
var contador = [0];
var arrayOrdenado = mergeSort(arrayParaOrdenar, contador);

console.log(arrayOrdenado);
console.log("Número de mudanças de posição: " + contador[0]);
// 235,14,1,133,23,43,21,435,200,37
