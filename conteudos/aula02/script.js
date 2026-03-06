 console.log("teste em java");

 var animal = "gato"; // var pode ser reatribuida
 console.log(animal);

 let nomeCompleto = "maria";
 console.log(nomeCompleto);

 var valor1;
 const valor0 = 10; // constante que nao pode ser reatribuida
 console.log(valor0);
 valor1 = 12

// vereficacao de tipos
console.log(typeof valor1);

var nome = window.prompt("nome: ");
console.log("seja bem vindo" + nome + " aproveite");
console.log(`seja bem vindo ${nome} aproveite`); //template literal
document.writeln(`seja bem vindo ${nome}. aproveite`);

// operadores aritimeticos: + - * / **

var n1 = parseFloat (window.prompt("digite o n1: "));
var n2 = parseFloat (window.prompt("digite a n2: "));
var resultado = n1 + n2;

console.log (` o resultado é ${resultado}`)
document.writeln(`\n resultado ${resultado}`);

//estruturas condicionais:
var idade = 12;
if(idade > 18){
    console.log("maior de idade");
}else{
    console.log("menor de idade");
}
//estruturas de repetiçao, for e while



