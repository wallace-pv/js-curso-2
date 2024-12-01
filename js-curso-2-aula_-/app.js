let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute==numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute>numeroSecreto){
            exibirTextoNaTela('p','O numero secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
        
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1); 
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados=[];
        exibirTextoNaTela('h1','Parabens você Acertou todos os numeros disponiveis');
        exibirTextoNaTela('p','');
        limparCampo();
    }else{
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled',true);
    }
}
    