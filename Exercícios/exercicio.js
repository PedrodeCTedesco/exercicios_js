
/*Função para calcular a média de notas. Se necessário, é só aumentar as notas e modificar o cálculo 

function calcMedia () {
    let nota1 = prompt("Insira a sua nota");
    let nota2 = prompt("Insira sua segunda nota");
    let nota3 = prompt("Insira sua terceira nota");

    nota1 = parseInt(nota1);
    nota2 = parseInt(nota2);
    nota3 = parseInt(nota3);

    let notaFinal = ((nota1 + nota2 + nota3) / 3);

    return notaFinal.toPrecision(3);
}

document.write("A sua nota final é " + calcMedia()); */


/* Escrevendo uma função que calcule o quadrado dos números inseridos nela

function quadNum () {

    let num1 = prompt("Insira o primeiro número");
    let num2 = prompt("Insira o segundo número");
    let num3 = prompt("Insira o terceiro número");
    let num4 = prompt("Insira o quarto número");
    let num5 = prompt("Insira o quinto número");

    calcQuad1 = document.write("O quadrado de " + num1 + " é: " + (num1*num1) + "<br>");
    calcQuad2 = document.write("O quadrado de " + num2 + " é: " + (num2*num2) + "<br>");
    calcQuad3 = document.write("O quadrado de " + num3 + " é: " + (num3*num3) + "<br>");
    calcQuad4 = document.write("O quadrado de " + num4 + " é: " + (num4*num4) + "<br>");
    calcQuad5 = document.write("O quadrado de " + num5 + " é: " + (num5*num5) + "<br>");

    return calcQuad1, calcQuad2, calcQuad3, calcQuad4, calcQuad5;
    
}

document.write(quadNum()); */


/* Digitando números quaisquer e retornando o maior deles

var numeros = prompt("Digite cinco números quaisquer");

num1 = numeros.split(" ");

function ordemNum (a,b) {
    return a - b 
}

num2 = num1.sort();

document.write("O maior número é " + num2[4])
 */


function maiorIdade () {

    idadesUsuario = prompt("Digite quantas idades desejar");
    id_Usuario1 = idadesUsuario.split(" ");
    idUsuario = id_Usuario1.sort();

    for (i = 0; i <= 18; i++) {

    return idUsuario.length[i]

    }
}


console.log(maiorIdade());
