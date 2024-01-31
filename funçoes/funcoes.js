function escreverAsterisco() {
    var tamanho = 3;
    for (var i = 1; i <= tamanho; i++){
        var linha = '';
        for (var j= 1; j <=i; j++) {
            linha += '*';
        }
        console.log(linha);
   }
} 
function reproduzirDois(){
    var quantidadeRepeticoes = 2;
    for (var aux = 1; aux <=quantidadeRepeticoes;aux++)
    escreverAsterisco();
}
function reproduzirTres(){
    quantidadeRepeticoes = 2;
    for(var aux1 = 1; aux1 <=quantidadeRepeticoes;aux1++){
        reproduzirDois();
    }
}
reproduzirTres();