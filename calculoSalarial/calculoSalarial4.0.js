
function calculoSalarial(){
var salario = Number (document.getElementById("calculeSalario").value);
var inss,irpf

    if (salario  <= 1412.00){ 
        inss = (salario*0.075);
    }else{ 
        if (salario <= 2666.68){
            inss = (salario*0.09); 
        }else{
            if (salario <= 4000.03){
                 inss = (salario*0.12); 
            }else{
                inss =  (salario*0.14);
            }
        }
    }            



if (salario  <= 2112.00){
    irpf = 0
}else{ 
    if (salario <= 2826.65){
        irpf = (salario*0.075);
    }else{ 
        if (salario <= 3751.05){
            irpf = (salario*0.15);
        }else{ 
            if (salario <= 4664.68){
                irpf = (salario * 0.225);
            }else{
                irpf = salario * 0.275;
            }
        }
    }
}            

var salarioLiquido = Number (salario-inss-irpf)
document.write ("O desconto do INSS será de R$" + inss+",00  ");
document.write ('O desconto do IRPF será de R$' + irpf+ ",00  ");
document.write ("Seu salário liquido para ser feliz é R$" + salarioLiquido+ ",00 ")
}
