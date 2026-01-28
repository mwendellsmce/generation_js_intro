const leia = require('readline-sync')

console.log('                               ')
console.log('===============================')
console.log(' CALCULADORA SWITCH CASE')
console.log('1 - SOMA')
console.log('2 - SUBTRAÇÃO')
console.log('3 - MULTIPLICAÇÃO')
console.log('4 - DIVISÃO')
console.log('===============================')
console.log('                               ')



let num1 = leia.questionFloat('Digite o primeiro numero: ',
    {limitMessage: 'Digite um numero valido'}
)

let num2 = leia.questionFloat('Digite o segundo numero: ',
    {limitMessage: 'Digite um numero valido'}
)

let op = leia.keyIn('Operacao: ',
    {limitMesssage: 'Digite um numero entre 1 e 4 para escolher a operacao'}
)

switch(op){
    case '1':
        console.log(`${num1.toFixed(1)} + ${num2.toFixed(1)} = ${(num1 + num2).toFixed(1)} `)
    break
    case '2':
        console.log(`${num1.toFixed(1)} - ${num2.toFixed(1)} = ${(num1 - num2).toFixed(1)}`)
    break
    case '3':
        console.log(`${num1.toFixed(1)} * ${num2.toFixed(1)} = ${(num1 * num2).toFixed(1)}`)
    break
    case '4':
        console.log(`${num1.toFixed(1)} / ${num2.toFixed(1)} = ${(num1 / num2).toFixed(1)}`)
    break
    default: 
        console.log(`Operação '${op}' invalida:`)
}