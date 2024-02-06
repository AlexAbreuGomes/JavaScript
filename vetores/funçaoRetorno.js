var algoritmos = [
    [['Alan'], [8], [5.5], [3.2], [3.5]],
    [['Alex'], [7], [6.5], [10], [10]],
    [['Alisson'], [2], [1.5], [8], [0]],
    [['david'], [5], [7], [8], [9]],
    [['daniel'], [10], [10], [0], [5]]
  ];
 // console.log(algoritmos)
//varre a matriz e calculas médias
function soma(){
 
for (var i=0;i<algoritmos.length;i++){ //varre todos os índices da matriz (vetor externo)
    acum=0; //limpa a nota 
    for (var j=1;j<algoritmos[0].length;j++){ //varre os índices do vetor que está na posição i (vetor interno) 
        acum=acum+Number(algoritmos[i][j]);
    }

    //calcula e escreve o resultado da média
    console.log(acum)
}

  
}

