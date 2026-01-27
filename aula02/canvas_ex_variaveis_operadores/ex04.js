const leia = require('readline-sync')
let num1 = leia.questionFloat('numero1: ')
let num2 = leia.questionFloat('numero2: ')
let num3 = leia.questionFloat('numero3: ')
let num4 = leia.questionFloat('numero4: ')

let diff = (num1 * num2) - (num3 * num4)

console.log(`Diferença: ${diff.toFixed(1)}`)

