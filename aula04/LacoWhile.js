const leia = require('readline-sync')

let num = leia.questionInt('Digite o numero que voce quer a tabuada: ')

let contador = 1

while(contador <= 10){
    console.log(`${num} x ${contador} = ${num * contador}`)
    contador ++
}
