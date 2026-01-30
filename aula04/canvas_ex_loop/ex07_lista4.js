const leia = require('readline-sync')

vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
let = num = leia.questionInt('Digite o numero que voce deseja encontrar: ')
let pos = -1

for (let i = 0; i < vetor.length; i++){
        if (vetor[i] === num)
        pos = i
}
if (pos !== -1){
    console.log(`O número ${num} está localizado na posição: ${pos}`)
}else{
    console.log(`O número ${num} não foi encontrado!`)
}
