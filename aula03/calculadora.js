const leia = require('readline-sync')

console.log('\n===============================')
console.log('\n=CALCULADORA SWITCH CASE')
console.log('\n1 - SOMA')
console.log('\n2 - SUBTRAÇÃO')
console.log('\n3 - MULTIPLICAÇÃO')
console.log('\n4 - DIVISÃO')
console.log('\n===============================')
console.log('\n                               ')



let num1 = leia.questionFloat('Digite um numero: ',
    {limitMessage: 'Digite um numero valido'}
)

let num2 = leia.questionFloat('Digite um segundo numero: ',
    {limitMessage: 'Digite um numero valido'}
)

let op = leia.keyIn('Digite o número da operacao: ',
    {limitMesssage: 'Digite um numero entre 1 e 4 para escolher a operacao'}
)

switch(op){
    case '1':
        console.log(`${num1} + ${num2} = ${num1 + num2} `)
    break
    case '2':
        console.log(`${num1} - ${num2} = ${num1 - num2}`)
    break
    case '3':
        console.log(`${num1} * ${num2} = ${num1 * num2}`)
    break
    case '4':
        console.log(`${num1} / ${num2} = ${num1 / num2}`)
    break
    default: 
        console.log(`Operação '${op}' invalida:`)
}