function acaoBotao(){

var n,fatorial

n = prompt("Digite o numero para ser Calcular o Fatorial  :")
fatorial =1

for (var cont = 1 ;cont <= n;cont ++){
    fatorial = fatorial * cont

}



document.getElementById("paragrafo").innerHTML= "O FATORIAL DE  " + n + " E  : " + fatorial

}