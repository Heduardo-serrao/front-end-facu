function gerarNumeroAleatorio(min, max) {   
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let objetoEscolhido = document.getElementById("campo");   
let resultado = document.getElementById("resultado"); 

objetoEscolhido.onkeydown = function(event){
    if(event.key === "Enter"){ 
        // Geramos a jogada do computador a cada Enter
        let PPT = gerarNumeroAleatorio(1, 3);
        console.log(PPT)
        // Pegamos o que o usuário digitou (em minúsculo e sem espaços extras)
        let escolhaUsuario = objetoEscolhido.value.toLowerCase().trim();
        
        // Criamos as variáveis para guardar as possibilidades da rodada
        let pedra, papel, tesoura;

        switch(PPT){
            case 1: // Computador tirou PEDRA
                pedra = "Empate!";
                papel = "Você Ganhou! Papel vence Pedra";
                tesoura = "Você Perdeu! Pedra vence Tesoura";
                break;
            case 2: // Computador tirou PAPEL
                pedra = "Você Perdeu! Papel vence Pedra";
                papel = "Empate!";
                tesoura = "Você Ganhou! Tesoura vence Papel";
                break;
            case 3: // Computador tirou TESOURA
                pedra = "Você Ganhou! Pedra vence Tesoura.";
                papel = "Você Perdeu! Tesoura vence Papel.";
                tesoura = "Empate!";
                break;
        }

        // Verificamos a escolha e exibimos no HTML
        if(escolhaUsuario === "pedra") {
            resultado.innerText = pedra;
        } else if(escolhaUsuario === "papel") {
            resultado.innerText = papel;
        } else if(escolhaUsuario === "tesoura") {
            resultado.innerText = tesoura;
        } else {
            resultado.innerText = "Escreva apenas pedra, papel ou tesoura!";
        }

        // Limpa o campo para a próxima jogada
         PPT = gerarNumeroAleatorio(1, 3);
        objetoEscolhido.value = ""; // Limpa o campo
    }    
};