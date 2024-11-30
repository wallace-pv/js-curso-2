let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
campo.innerHTML = texto;
}
function ReiniciarJogo(){
    
}

exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
function verificarChute() {
    let chute = document.querySelector('input').value;
    let verifica = chute == numeroSecreto;
    console.log(chute == numeroSecreto);
    if (verifica == true){
        exibirTextoNaTela('k', 'Acertou');
        ReiniciarJogo();
    } else{(verifica == false) 
        exibirTextoNaTela('k', 'Errou');}
        
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random()*10+1);

    
}