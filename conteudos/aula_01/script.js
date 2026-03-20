console.log("Teste em javascript");

// variáveis
var animal = "gato";
console.log(animal);

let nomeCompleto = 'Fulano da Silva'
console.log(nomeCompleto)

var valor1;
const valor0 = 10;
console.log(valor0);

valor1 = 12;
valor1 = '15'; // var, permite reatribuição
// valor0 = 14; -- const, não permite reatribuição

// verificação de tipos:
console.log(typeof valor1);

// algoritmo: entrada + processamento + saída
var nome = window.prompt("Nome: ");
console.log("Seja bem-vindo " + nome + " Aproveite!");
console.log(`Seja bem-vindo ${nome}. Aproveite!`); //template literal
document.writeln(`Seja bem-vindo(a) ${nome}. Aproveite!`);

// operadores aritméticos: + - * / **
// (2 + 4) * 2


// operadores de comparação: < > <= >= == != === !==
 console.log(5 == '5'); //igualdade -> olha apenas os valores
 console.log(5 === '5'); //estritamente igual olhar para tipo e valor

 //Criar um algoritmo que realize a soma de dois números;
 //O usuário deverá informar os números e você deve apresentar o resultado;
var n1 = parseFloat(window.prompt("N1: "));
console.log(typeof n1);
var n2 = parseFloat(window.prompt("N2: "));
var resultado = n1 + n2;
console.log(resultado);

//estruturas condicionais: if-else, switch-case
var idade = 10;
if (idade >=18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

var hora = 19;
if (hora < 12){
    console.log("bom dia");
} else if(hora <18) {
    console.log("boa tarde");
} else {
    console.log("boa noite");
}

var diaSemana = 3;
switch (diaSemana) {
    case 1:
        console.log("domingo");
        break;
    case 2:
        console.log("segunda-feira");
        break;
    default:
        console.log("escolha uma opção");
}
//estruturas de repetição: for e while
for (let i=0; i<5;i++){
    console.log("iteração: " + i);
}

var i=5;
while(i<5){
    console.log("iteração: " + i);
    i++; 
}