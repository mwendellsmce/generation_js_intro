const leia = require('readline-sync')

let num = leia.questionInt('Digite o numero que voce quer a tabuada: ')

for(let contador = 1; contador <= 10; contador ++){
    console.log(`${num} x ${contador} = ${num * contador}`)
}
