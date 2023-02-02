
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






/* O usuário pode entrar com várias idades. Será retornado: (a) quantas idades foram digitadas; (b) quantas são
maior de 18 anos e quantas são menores de 18 anos. 

let idades_usuarios = prompt("Digite as idades separadas por vírgula").split(",")
let nomes_usuarios = prompt("Digite os nomes dos usuários separados por ponto e vírgula").split(";");

document.write("Você digitou " + idades_usuarios.length + " idades" + "<br>");
document.write("Você digitou " + nomes_usuarios.length + " nomes" + "<br>")

function maiorIdade (idades_usuarios) {
    return id_final = idades_usuarios >= 18
}

function menorIdade (idades_usuarios) {
    return id_menor = idades_usuarios < 18;
}

id_Maior = idades_usuarios.filter(maiorIdade);
id_Menor = idades_usuarios.filter(menorIdade);

document.write("Temos " + id_Maior.length + " usuários com mais de 18 anos" + "<br>")
document.write("Temos " + id_Menor.length + " usuários com menos de 18 anos" + "<br>")

function idadeTeto (idades_usuarios) {
    return idMax = idades_usuarios <= 50;
}

document.write("Há alguma idade menor do que 50: " + idades_usuarios.some(idadeTeto)); */





/* 
O programa recebe dados de altura e sexo de 5 cinco usuários. Retorna: (a) quantos usuários estão cadastrados;
(b) quantos são do sexo masculino e do sexo feminino; (c) qual a maior altura registrada; (d) se a maior altura 
é do sexo masculino ou feminino


let altura0 = prompt("Insira a altura do usuário n. 1 em centímetros");
let sexo0 = prompt("Insira o sexo do usuário n. 1 (masculino ou feminino)");

let altura1 = prompt("Insira a altura do usuário n. 2 em centímetros");
let sexo1 = prompt("Insira o sexo do usuário n. 2 (masculino ou feminino)");

let altura2 = prompt("Insira a altura do usuário n. 3 em centímetros");
let sexo2 = prompt("Insira o sexo do usuário n. 3 (masculino ou feminino)");

let altura3 = prompt("Insira a altura do usuário n. 4 em centímetros");
let sexo3 = prompt("Insira o sexo do usuário n. 4 (masculino ou feminino)");

let altura4 = prompt("Insira a altura do usuário n. 5 em centímetros");
let sexo4 = prompt("Insira o sexo do usuário n. 5 (masculino ou feminino)");

let alturas = [];
alturas.push(altura0, altura1, altura2, altura3, altura4);

let sexos = [];
sexos.push(sexo0, sexo1, sexo2, sexo3, sexo4);

document.write("Temos " + sexos.length + " usuários cadastrados." + "<br>")

function quantiSexM (sexos) { 

    return sexo_M = sexos == "masculino";

}

function quantiSexF (sexos) {
    return sexo_F = sexos == "feminino";
}

sexo_M_final = sexos.filter(quantiSexM);
sexo_F_final = sexos.filter(quantiSexF)

document.write("Temos " + sexo_M_final.length + " usuários do sexo masculino." + "<br>");
document.write("Temos " + sexo_F_final.length + " usuários do sexo feminino." + "<br>");

function ordena_altura (a, b) {
    return a - b;
}

alturas.sort(ordena_altura) 
for (i = 0; i < alturas.length; i++) {
    var alturas_ord = alturas[i]
}

document.write("A maior altura registrada é " + alturas_ord + " cm" + "<br>");

let alt_sex_mat = [

    [altura0, altura1, altura2, altura3, altura4],
    [sexo0, sexo1, sexo2, sexo3, sexo4],

]


function descAltura () {

    if (alturas_ord === altura0) {
        return maior_altura = alt_sex_mat[1][0]
    }
    else if (alturas_ord === altura1) {
        return maior_altura = alt_sex_mat[1][1]
    }
        else if (alturas_ord === altura2) {
            return maior_altura = alt_sex_mat[1][2]
        }
            else if (alturas_ord === altura3) {
                return maior_altura = alt_sex_mat[1][3]
            }
    else {
        maior_altura = alt_sex_mat[1[4]]
    }

}

document.write("A maior altura é do sexo " + descAltura() + "<br>") */





/* O programa recebe vários nomes digitados pelo usuário e os retorna na ordem reversa 
(do último ao primeiro)

let nomes = prompt("Digite quantos nomes desejar separados por vírgula.").split(",");

nomes.reverse()
for (i = 0; i < nomes.length; i++) {
    document.write(nomes[i] + "<br>")
} */





/* O programa recebe uma data inserida pelo usuário e retorna separadamente o dia, o mês e o ano

let data = prompt("Digite uma data no formato dia / mês / ano").split("/");

document.write("O dia inserido é: " + data[0] + "<br>");
document.write("O mês inserido é: " + data[1] + "<br>");
document.write("O ano inserido é: " + data[2] + "<br>"); */

