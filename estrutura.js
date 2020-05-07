var nome,nota1,nota2;

nome = prompt("digite o nome do aluno :")
nota1 = prompt("digite a primeira nota do nome do aluno :")
nota2 = prompt("digite a segunda nota do nome do aluno :")

med = (parseInt(nota1)+ parseInt(nota2))/2;

if (med >= 50){
    alert("Aprovado" + nome)
}
else
 alert("Reprovado ")