

var salario = 4000.03
var inss 

if (salario  <= 1412.00) {
    inss = (salario*0.075);
}  else if (salario <= 2666.69){
    inss = (salario*0.09); 
}  else if (salario <4000.04){
    inss = (salario*0.12); 
}  else {
    inss =  (salario*0.14);
}
console.log (inss + " de desconto")