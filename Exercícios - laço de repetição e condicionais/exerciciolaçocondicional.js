

/* O usuário insere a sua idade. Se for maior de 18 anos ele pode votar, do contrário 
o voto é opcional


let idade = prompt("Insira a sua idade");
idade = parseInt(idade);

function vota_ou_nao () {

    if (idade > 18) {

        return alert("O voto é obrigatório!")
    }

    else {
        return alert("O voto é opcional!")
    }
}

document.write(vota_ou_nao()) */




/* Criando tabuadas

for (i = 1; i < 11; i++) {
    document.write("<p>Tabuada do " + i + "</p>");
        for(j = 1; j < 11; j++) {
            document.write(i + " x " + j + " = " + (i * j) + "<br>")
        }
} */




/* Apresentando a soma dos 10 primeiros números



for (i = 11; i < 12; i++) {

    document.write("A soma é " + (i * 5) + "<br>")

} */





/* Apresentando a soma dos 50 primeiros números pares


for (i = 52; i < 53; i++) {
    if (i % 2 === 0) {
        soma50 = i * 25
    }
}
document.write("A soma dos 50 números pares inteiros é " + soma50) */





/* Calculando o reajuste salarial


const salarioBase = 1000;
var anos = prompt("Digite o ano para saber o valor do salário");

var matriz_reaj_ano = [

    [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    [0.15, 0.3, 0.6, 1.2, 2.4, 4.8, 9.6, 19.2],

]


function reajuste_salario () {

    if (anos == 2016) {

        salarioFinal = (salarioBase + (salarioBase * matriz_reaj_ano[1][0]));
        return salarioFinal;
    }
    else if (anos == 2017) {
        salarioFinal = (salarioBase + (salarioBase * matriz_reaj_ano[1][1]));
        return salarioFinal;
    }
        else if (anos == 2018) {
            salarioFinal = (salarioBase + (salarioBase * matriz_reaj_ano[1][2]));
            return salarioFinal;
        }
            else if (anos == 2019) {
                salarioFinal = (salarioBase + (salarioBase * matriz_reaj_ano[1][3]));
                return salarioFinal;
            }
                else if (anos == 2020) {
                    salarioFinal = (salarioBase + (salarioBase * matriz_reaj_ano[1][4]));
                    return salarioFinal;
                }
                    else if (anos == 2021) {
                        salarioFinal = (salarioBase + (salarioBase * matriz_reaj_ano[1][5]));
                        return salarioFinal;
                    }
                        else if (anos == 2022) {
                            salarioFinal = (salarioBase + (salarioBase * matriz_reaj_ano[1][6]));
                            return salarioFinal;
                        }

                            else if (anos == 2023) {
                                salarioFinal = (salarioBase + (salarioBase * matriz_reaj_ano[1][7]));
                                return salarioFinal;
                            }

    else {
        alert("Ano inválido.")
    }        

        }

document.write("O seu salário em " + anos + " é de " + reajuste_salario() + " reais."); */





/* O usuário digita o número para saber qual a tabuada dele 


let numero = prompt("Digite o número do qual deseja saber a tabuada.");

document.write("A tabuada de " + numero + " é:" + "<br>");

for (i = 1; i < 11; i++) {
    document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
} */







