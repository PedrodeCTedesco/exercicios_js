


/* Escreva um programa para receber 2 números. Exiba soma, divisão, subtração, multiplicação e média


function operações () {

    let num1 = prompt("Digite um número qualquer.");
    let num2 = prompt("Digite um número qualquer.");

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let num_soma = document.write("A soma de " + num1 + " e " + num2 + " é: " + (num1 + num2) + "<br>");
    let num_sub = document.write("A subtração de " + num1 + " e " + num2 + " é: " + (num1 - num2) + "<br>");
    let num_mult = document.write("A multiplicação de " + num1 + " e " + num2 + " é: " + (num1 * num2) + "<br>");
    let num_div = document.write("A divisão de " + num1 + " e " + num2 + " é: " + (num1 / num2) + "<br>");
    let num_media = document.write("A média de " + num1 + " e " + num2 + " é: " + ((num1 + num2) / 2) + "<br>");

    return num_soma, num_sub, num_mult, num_div, num_media;

}

console.log(operações()) */





/* Escreva um programa para receber o nome de um estado da região
Sudeste do Brasil. Exiba a sua capital

function capEstado () {

    let estado = prompt("Digite um estado da região sudeste do Brasil.");

    switch (estado) {

        case 'São Paulo': 
            document.write("A capital do estado de São Paulo é São Paulo.");
        break;

        case 'Minas Gerais':
            document.write("A capital do estado de Minas Gerais é Belo Horizonte.");
        break;

        case 'Rio de Janeiro':
            document.write("A capital do estado do Rio de Janeiro é Rio de Janeiro");
        break;

        case 'Espírito Santo':
            document.write("A capitadl do Espírito Santo é Vitória.");
        break;

        default:
            alert("Estado inválido.");
        break;
    }

}

console.log(capEstado()) */






/* Criando um programa que calcula o IMC de uma pessoa


let altura = prompt("Digite a sua altura em metros.");
let peso = prompt("Digite o seu peso em quilogramas.");

altura = parseInt(altura);
peso = parseInt(peso);

function calc_IMC () {

    let IMC = (peso / ((altura*altura) / 10000));

    return IMC.toFixed(2);

}

document.write("Com altura de " + altura + " metros" + " e pesando " + peso + " quilos" + " seu IMC é " + calc_IMC()); */








/* Programa que calcula a área de um quadrado


function quad_area () {

    let lado_quad = prompt("Insira o valor do lado do quadrado em metros.");
    lado_quad = parseInt(lado_quad);

    let quad = lado_quad * lado_quad;

    return document.write("A área do quadrado é " + quad + " metros quadrados.")

}

console.log(quad_area()) */








/* Programa que calcula a área de um triângulo equilátero

function area_tri_equi () {

    let lado_tri = prompt("Digite o valor do lado do triângulo equilátero.");
    lado_tri = parseInt(lado_tri);

    let area_tri = ((lado_tri * lado_tri * 1.73205) / 4);

    return document.write("A área do triângulo equilátero é " + area_tri.toFixed(2))

}

console.log(area_tri_equi()) */








/* Crie um programa em que o usuário digite o valor de um produto e a
porcentagem de desconto que ele irá obter. Informe o total que deverá ser
pago pelo produto

let produto_valor = prompt("Digite o valor do produto em reais.");
let desconto = prompt("Digite o valor do desconto em percentuais.");

produto_valor = parseFloat(produto_valor);
desconto = parseInt(desconto);

function valorFinal () {

    var desconto_valor = (1 - (desconto / 100));
    var valor_prod_final = (produto_valor * desconto_valor)
    return valor_prod_final;
}

document.write("O valor do produto é R$ " + produto_valor + "." + "<br>");
document.write("O valor do desconto será de " + desconto + "%." + "<br>");
document.write("O total a pagar é R$ " + valorFinal().toFixed(2) + "."); */
