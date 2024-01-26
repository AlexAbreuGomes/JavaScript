function numPrimos(){
    var ContInicio = Number (document.getElementById("IntervaloMin").value);
    var ContFim =  Number (document.getElementById("IntervaloMax").value);

    while (ContInicio <= ContFim) {
        var divisor = 2;

        while ((divisor < ContInicio) && (ContInicio % divisor !== 0)) {
            divisor+=1;
        }

        divisor === ContInicio && document.write(ContInicio);
            ContInicio+=1;
    }
}