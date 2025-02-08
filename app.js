let listaNumerosSorteados=[];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML=texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){

    exibirTextoTela('h1','Jogo do Número secreto');

    exibirTextoTela('p','Digite um numero de 1 a 100');
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute==numeroSecreto){
        exibirTextoTela('h1','Acertou');
        let palavraTentativas= tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativa = 'Você acertou o numero secreto com ' +tentativas+ ' ' +palavraTentativas;
        exibirTextoTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{

        if (chute > numeroSecreto){
            exibirTextoTela('p','O numero secreto é menor');
        }
        else{
            exibirTextoTela('p','O numero secreto é maior');
        }
        
        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeNumeroEscolhido = listaNumerosSorteados.length;
     if (quantidadeNumeroEscolhido==numeroLimite){
        listaNumerosSorteados=[];
     }
    
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute= document.querySelector('input');
    chute.value='';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}