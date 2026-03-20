function gerarNumeroAleatorio(min, max) {   
  return Math.floor(Math.random() * (max - min + 1)) + min
}   // funcao pra randomizar o numero

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio(1, 20) // 1. Gera um novo número para a mesma variável 
    // 2. Limpa a interface
    document.getElementById("resultado").innerHTML = "Jogo reiniciado! Tente um número."
    document.getElementById("campo").value = "";
    document.getElementById("campo").focus()
}// funcao pra reiniciar o jogo

let numeroSecreto = gerarNumeroAleatorio(1,20)  //transformando o numero em uma variavel


console.log(numeroSecreto)  //pra testar o programa 
let numeroDigitado = document.getElementById("campo")   //integracao com o index.html
let resultado = document.getElementById("resultado")    //integracao com o index.html
numeroDigitado.onkeydown = function(event){     // ao clicar

    if(event.key == "Enter"){ // enter
        console.log("teste")
        let chute = Number(numeroDigitado.value)    // iniciando o valor do chute 
    
        // vereficacoes
        if(chute < numeroSecreto){      
         verificacaoNumero = "maior"
        }
        if(chute > numeroSecreto){
            verificacaoNumero = "menor"
        }
        if(chute == numeroSecreto){
            verificacaoNumero = "acertou"
        }
        resultado.innerHTML = verificacaoNumero // pra escrever o resultado
        numeroDigitado.value = "";  // pra resetar em caso de erro
    }
    btnreiniciar.onclick = reiniciarJogo // botao pra reiniciar o jogo
}