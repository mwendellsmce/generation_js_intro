const leia = require('readline-sync')

let a = leia.questionInt('Digite o numero A: ')
let b = leia.questionInt('Digite o numero B: ')
let c = leia.questionInt('Digite o numero C: ')
let ab = a + b

if (ab > c){
    console.log(`${a} + ${b} = ${ab} > ${c}`)
    console.log('A soma de A + B é Maior do que C')
}else if (ab < c){
    console.log(`${a} + ${b} = ${ab} < ${c}`)
    console.log('A soma de A + B é Menor do que C')
}else{
    console.log(`${a} + ${b} = ${ab} = ${c}`)
    console.log('A soma de A + B é Igual a C')
}

