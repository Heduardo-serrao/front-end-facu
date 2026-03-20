function gerarTabuada() {
    let campo = document.getElementById("numeroDigitado");
    let painel = document.getElementById("resultado");
    let n = Number(campo.value);

    // Limpa o painel antes de começar uma nova tabuada
    painel.innerHTML = "";

    // O laço 'for' faz a conta de 1 a 10
    for (let i = 1; i <= 10; i++) {
        let conta = n * i;
        
        // Adiciona a linha ao HTML. O <br> serve para pular linha.
        painel.innerHTML += n + " x " + i + " = " + conta + "<br>";
    }
}