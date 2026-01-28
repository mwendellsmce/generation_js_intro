const leia = require('readline-sync')

let num = leia.questionInt('Digite um numero: ')
// let parimpar

if (num%2 === 0 && num >= 0){
    console.log(`O número ${num} é par e positivo`)
}
if (num%2 === 0 && num < 0){
    console.log(`O número ${num} é par e negativo`)
}
if (num%2 !== 0 && num >= 0){
    console.log(`O número ${num} é impar e positivo`)
}
if (num%2 !== 0 && num <= 0){
    console.log(`O número ${num} é impar e negativo`)
}
