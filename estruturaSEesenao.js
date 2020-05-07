function acaoBotao(){

var v1,v2,res,operacao

v1 =prompt("Digite o primeiro Valor  :")

operacao =prompt("Digite  a Operação EX: - , + , * , /   :")

v2 =prompt("Digite o segundo Valor  :")

if(operacao == "+"){
    res= parseInt(v1)+ parseInt(v2)
}else if(operacao == "-"){
    res= parseInt(v1) - parseInt(v2)
}else if(operacao == "*"){
    res= parseInt(v1) * parseInt(v2)
}else if(operacao == "/"){
    res= parseInt(v1) / parseInt(v2)
}
document.getElementById("paragrafo").innerHTML= res
}