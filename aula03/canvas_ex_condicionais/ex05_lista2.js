const leia = require('readline-sync')

console.log('                              ')
console.log('=============================')
console.log('  1 - Cachorro quente R$10.00')
console.log('  2 - X-Salada R$15.00')
console.log('  3 - X-Bacon R$18.00')
console.log('  4 - Bauru R$12.00')
console.log('  5 - Refrigerante R$8.00')
console.log('  6 - Suco de Laranja R$10.00')
console.log('=============================')
console.log('                             ')

let produto = leia.questionInt('Codigo do produto: ')
let quantidade = leia.questionInt('Quantidade: ')

switch(produto){
    case 1:
        console.log(`Produto: Cachorro Quente\n Valor total: R$ ${(10*quantidade).toFixed(2)}`)
    break
    case 2:
        console.log(`Produto: X-Salada\nValor total: R$ ${(15*quantidade).toFixed(2)}`)
    break
    case 3:
        console.log(`Produto: X-Bacon\nValor total: R$ ${(18*quantidade).toFixed(2)}`)
    break
    case 4:
        console.log(`Produto: Bauru\nValor total: R$ ${(12*quantidade).toFixed(2)}`)
    break
    case 5:
        console.log(`Produtor: Refrigerante\nValor total: R$ ${(8*quantidade).toFixed(2)}`)
    break
    case 6:
        console.log(`Produto: Suco de Laranja\nValor total: R$${(10*quantidade).toFixed(2)}`)
    break
}