function executarMergeSort() {
    var inputArray = document.getElementById('inputArray').value;
    var arrayParaOrdenar = inputArray.split(',').map(Number);
  
    var contador = [0];
    var arrayOrdenado = mergeSort(arrayParaOrdenar, contador);
  
    exibirResultado(arrayOrdenado, contador[0]);
  }
  
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
        resultado.push(esquerda[indiceEsquerda++]);
      } else {
        resultado.push(direita[indiceDireita++]);
        cont[0] += esquerda.length - indiceEsquerda;
      }
    }
  
    return resultado.concat(esquerda.slice(indiceEsquerda), direita.slice(indiceDireita));
  }
  
  function exibirResultado(arrayOrdenado, mudancasPosicao) {
    var resultadoDiv = document.getElementById('resultado');
    var contadorP = document.getElementById('contador');
  
    resultadoDiv.textContent = 'Array Ordenada: ' + arrayOrdenado.join(', ');
    contadorP.textContent = 'Número de mudanças de posição: ' + mudancasPosicao;
  }
  