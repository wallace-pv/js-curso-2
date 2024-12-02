//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC(altura,peso){
    alturaEmMetro = altura/100
    let imc = peso/(alturaEmMetro*alturaEmMetro);
    return imc;
}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularfatorial(numero){
    if(numero==1 || numero ==0){
        return 1;
    }
    let fatorial = 1
    for ( let i = 2; numero >= i;){
        fatorial= fatorial * i;
        i++;
    }
    return fatorial;
}

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function calcularCambio(valor){
    let resultadoDoCambio = valor*4.8;
    return resultadoDoCambio.toFixed(2);//toFixed(2) é utilizado para formatar um número para que ele tenha exatamente duas casas decimais. Essencialmente, ele arredonda o número para duas casas decimais e o converte para uma string.
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaEPerimetroRetangular(altura, largura){
    let area= altura*largura;
    let perímetro= (altura*2)+(largura*2);
    console.log(`area do retangulo é ${area} e o perimetro é ${perímetro} `);
}
// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaEPerimetroCircular(raio){
    //let pi = 3.14 nao usei o valor de pi pois vi na resolucao que Math.PI contem a constante de pi.
    
    let areacircular = Math.PI*raio*raio;
    let perimetroCircular = 2*Math.PI*raio;
    console.log(`area do circulo é ${areacircular.toFixed(2)} e o perimetro é ${perimetroCircular.toFixed(2)} `);
}

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(number) {
    console.log(`A tabuada de ${number} é:`)
    let resultadoTabuada = 0;
    for(let i=0; i<=10; i++){
        resultadoTabuada = number*i;
        console.log(`${number} x ${i} = ${resultadoTabuada}`);
    }
    
}


//Uso das Funções

console.log(calcularIMC(170,120));
console.log(calcularfatorial(10));
console.log(calcularCambio(10));
areaEPerimetroRetangular(4,2);
calcularAreaEPerimetroCircular(24);
tabuada(9);

//implementacao no html ???
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

exibirTextoNaTela('p', 'Calcule o IMC');


