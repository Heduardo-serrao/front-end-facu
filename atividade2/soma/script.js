function calcularSerie() {
    let n = Number(document.getElementById("termos").value);
    let expressaoHTML = document.getElementById("expressao");
    let resultadoHTML = document.getElementById("resultado");

    let somaTotal = 0;
    let termoAtual = 0;
    let listaDeTermos = []; // Para guardar os números e exibir com o "+" depois

    for (let i = 1; i <= n; i++) {
        // Gera o próximo número da série (1, 11, 111...)
        termoAtual = (termoAtual * 10) + 1;
        
        // Adiciona à soma total
        somaTotal += termoAtual;
        
        // Guarda o número formatado para a exibição
        listaDeTermos.push(termoAtual);
    }

    // .join(" + ") coloca um " + " entre cada número da lista
    expressaoHTML.innerText = listaDeTermos.join(" + ");
    resultadoHTML.innerText = "A soma é: " + somaTotal.toLocaleString('pt-BR');
}