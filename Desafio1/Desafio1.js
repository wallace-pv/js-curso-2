// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

//test

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';
function alertButton(){
    alert('Eu gosto de JS');
}
function checkButton(){
    console.log('botão foi clicado!');
}

function promptButton(){
    let cidade = prompt('De que cidade você é?');
    alert(`Estive em ${cidade} e lembrei de você`);
}
function SomaButton() {
    let N1 = parseInt(prompt('Digite um numero inteiro'));
    let N2 = parseInt(prompt('Digite um numero inteiro para ser somado com o anterior'));
    let soma= N1+N2;
    alert(`O resultado da soma é ${soma}`);
}