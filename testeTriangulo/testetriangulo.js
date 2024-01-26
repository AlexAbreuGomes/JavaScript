function CalcularLados(){
    var lado1 = Number (document.getElementById("lado1").value);
    var lado2 = Number (document.getElementById("lado2").value);
    var lado3 = Number (document.getElementById("lado3").value);
    if ((lado1+lado2>lado3) && (lado2+lado3>lado1) && (lado1+lado3>lado2)){
        if ((lado1==lado2) && (lado1==lado3)){
            document.write ("triangulo equilatero")
        }else{
            if ((lado1!=lado2) && (lado2!=lado3) && (lado3!=lado1)){
                document.write ("triangulo escaleno")
            }else{
                document.write ("triangulo isosceles")
            }
        }    

    }else{        
        document.write ("Nao é um triangulo")
    }

}
