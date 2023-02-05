

/* Calculando o IMC


let altura = prompt("Digite a sua altura em centímetros.");
let peso = prompt("Digite o seu peso em quilogramas.");

function calc_IMC () {

    let IMC = (peso / ((altura*altura) / 10000).toFixed(2));

    if (IMC <= 18.5) {
        return document.write("O seu IMC é: " + IMC.toFixed(2) + "<br>" + "Isso significa que você está abaixo do peso");
    }
    else if (18.5 < IMC && IMC <= 24.9) {
        return document.write("O seu IMC é: " + IMC.toFixed(2) + "<br>" + "Isso significa que você está em seu peso ideal");
    }
        else if (25 <= IMC && IMC <= 29.9) {
            return document.write("O seu IMC é: " + IMC.toFixed(2) + "<br>" + "Isso significa que você está levemente acima do seu peso ideal");
        }
            else if (30 <= IMC && IMC  <= 34.9) {
                return document.write("O seu IMC é: " + IMC.toFixed(2) + "<br>" + "Isso significa que você está com obesidade grau I");
            }
                else if (35 <= IMC && IMC <= 39.9) {
                    return document.write("O seu IMC é: " + IMC.toFixed(2) + "<br>" + "Isso significa que você está com Obesidade grau II (Severa)");
                }
    else {
        return document.write("O seu IMC é: " + IMC.toFixed(2) + "<br>" + "Isso significa que você está com obesidade grau III (Mórbida)")
    }

}

console.log(calc_IMC()) */





/* Calcular se vale a pena abastecer com gasolina ou com etanol


let gasolina_va = prompt("Digite o valor do litro de gasolina em reais.");
let etanol_va = prompt("Digite o valor do litro do etanol em reais.");

let va_final = etanol_va / gasolina_va;

function gaset () {

    if (va_final < 0.7) {
        document.write("Abasteça com etanol.")
    }
    else {
        document.write("Abasteça com gasolina.")
    }

}

console.log(gaset()) */





/* O usuário pode inserir dois números quaisquer e escolher qual operação deseja realizar

let num1 = prompt("Insira um número inteiro qualquer.");
let num2 = prompt("Insira outro número inteiro qualquer.");

num1 = parseInt(num1);
num2 = parseInt(num2);

let operaçoes = prompt("Escolha qual operação deseja realizar: multiplicação, divisão, soma ou subtração.");

function calc_opera () {

    switch (operaçoes) {

        case 'multiplicação':
            num_mult = num1 * num2;
            document.write("O resultado é " + num_mult);

        break;

        case 'divisão':
            num_div = num1 / num2;
            document.write("O resultado é " + num_div);
        break;

        case 'soma':
            num_soma = (num1 + num2);
            document.write("O resultado é " + num_soma);
        break;

        case 'subtração':
            num_sub = num1 - num2;
            document.write("O resultado é " + num_sub);
        break;

        default:
            alert("Operação inválida.");
        break;
    }

}

console.log(calc_opera()) */