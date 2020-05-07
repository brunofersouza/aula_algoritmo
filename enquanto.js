//NOVO TESTE 


function acaoBotao(){

var nome ,idade,limite ,contador

limite = prompt ( "DIGITE A QUATIDADE DE VEZES QUE VAI SER VERIFICADO A IDADE ")
contador = 0;
while(contador < limite ){
    nome  = prompt ("DIGITE SEU NOME  :")
    idade = prompt ("DIGITE A IDADE  DO  : "+ nome )

    if(idade > 18 )
        document.getElementById("paragrafo").innerText = nome + "  VOCE E MAIOR DE IDADE "
    else
        document.getElementById("paragrafo").innerText = nome + "  VOCE E MENOR  DE IDADE "

        contador++ 
    }

    
}
