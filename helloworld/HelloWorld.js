const leia = require("readline-sync");
let msg = leia.question("Digite uma mensagem: ")
const mensagem = 'Turma!';
//mensagem = "a!";
console.log(msg);

let num1 = leia.questionInt("Digite o primeiro valor: ")
let num2 = leia.questionInt("Digite o segundo valor: ")
let soma = num1 + num2
//console.log("A soma desses valores é:", soma)
console.log(`A soma de ${num1} + ${num2} = ${soma}`)