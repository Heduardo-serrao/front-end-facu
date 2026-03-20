function desenharTriangulo() {
    let input = document.getElementById("qtdLinhas");
    let painel = document.getElementById("painel");
    let linhas = Number(input.value);

    // Limpa o desenho anterior
    painel.innerHTML = "";

    // O laço 'i' representa o número da linha atual
    for (let i = 1; i <= linhas; i++) {
        // Criamos uma string com o caractere '*' repetido 'i' vezes
        let asteriscos = "*".repeat(i);
        
        // Adicionamos no HTML com uma quebra de linha
        painel.innerHTML += asteriscos + "<br>";
    }
}