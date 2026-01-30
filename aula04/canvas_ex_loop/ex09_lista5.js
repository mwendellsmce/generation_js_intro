const leia = require('readline-sync')

let matriz = Array.from({ length: 3 }, (v, i) =>
    Array.from({ length: 3 }, (v, j) =>
        leia.questionInt(`Digite o numero da posicao [${i}][${j}]: `)
    )
)

let somaPrincipal = 0
let somaSecundaria = 0
let diagonalPrincipal = ''
let diagonalSecundaria = ''

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {

        if (linha === coluna) {
            somaPrincipal += matriz[linha][coluna]
            diagonalPrincipal += matriz[linha][coluna] + ' '
        }

        if (linha + coluna === matriz.length - 1) {
            somaSecundaria += matriz[linha][coluna]
            diagonalSecundaria += matriz[linha][coluna] + ' '
        }
    }
}

console.log(`Elementos da Diagonal Principal:\n${diagonalPrincipal}`)
console.log(`Elementos da Diagonal Secundária:\n${diagonalSecundaria}`)
console.log(`Soma dos Elementos da Diagonal Principal:\n${somaPrincipal}`)
console.log(`Soma dos Elementos da Diagonal Secundária:\n${somaSecundaria}`)
