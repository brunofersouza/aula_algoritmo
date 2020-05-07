function acaoBotao(){

    var v1,v2,res,operacao
    
    v1 =prompt("Digite o primeiro Valor  :")
    
    operacao =prompt("Digite  a Operação EX: - , + , * , /   :")
    
    v2 =prompt("Digite o segundo Valor  :")

    switch (operacao) {
        case "+":
            res= parseInt(v1)+ parseInt(v2)
            break;
        case "-":
            res= parseInt(v1)- parseInt(v2)
            break;
        case "*":
            res= parseInt(v1)* parseInt(v2)
            break;
        case "/":
            res= parseInt(v1)/ parseInt(v2)
            break;
    }
    
document.getElementById("paragrafo").innerHTML= res
}