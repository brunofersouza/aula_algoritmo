function acaoBotao(){

    var sairloop,v1,v2

    do {

      v1 = prompt("DIGITE O PRIMEIRO VALOR   :  ")
      v2 = prompt("DIGITE O SEGUNDO  VALOR   :  ")
      document.getElementById("paragrafo").innerText = "  RESULTADO   :  " + (parseInt(v1) + parseInt(v2))
      sairlooop = prompt("Deseja Sair  ?  S/N  :")
    }while (sairlooop == "N")

}
            
       
