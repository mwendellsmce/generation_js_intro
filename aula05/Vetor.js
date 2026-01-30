const leia = require('readline-sync')

let num = [10, 25, 5, 45, 85]

let cores = Array(5)

for(let indice = 0; indice < num.length; indice ++){
    console.log(`numeros [${indice}] = ${num[indice]}`)

}
console.log(`\no tamanho do vetor é ${num.length}`)
console.table(num)

for(let indice = 0; indice < cores.length; indice ++){
    cores[indice] = leia.question('digite o nome de alguma cor: ')
}
console.table(cores)
console.table(num.sort((a, b) => b - a))

