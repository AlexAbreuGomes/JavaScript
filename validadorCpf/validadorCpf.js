function validarCpf() {
    var cpfNumerico = [];
    var cpf = document.getElementById("cpf").value;

    for (let i = 0; i < 9; i++) {
        cpfNumerico[i] = Number(cpf[i]);
    }

    cpfNumerico.push(calculaDigitoVerificador(cpfNumerico, 10));
    cpfNumerico.push(calculaDigitoVerificador(cpfNumerico, 11));

    document.getElementById("resposta").innerHTML = cpfNumerico.join(''); //transforma o vetor em string
    return cpfNumerico;
}

function calculaDigitoVerificador(cpfNumerico, posicao) {
    var acumulador = 0, posicao;
    let i = 0;
    while (i < cpfNumerico.length) {
        acumulador = acumulador + (cpfNumerico[i] * posicao);
        i++;
        posicao--;
    }
    //try 1
    //return (11 - (acumulador % 11)) % 11;

    //try 2
    var resto = acumulador % 11;
    return resto < 2 ? 0 : 11 - resto; //if(resto<2){return 0}else{return 11-resto} 
}