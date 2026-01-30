const leia = require('readline-sync')

let num = 0
let idoso = 0
let jovem = 0

while(num >= 0){ 
    num = leia.questionInt('Digite sua idade: ')
    if(num > 50){
        idoso ++
    }
    if(num < 21 && num > -1){
        jovem ++
        
    }
}
console.log(`Total de pessoas menores que 21 anos: ${jovem}`)
console.log(`Total de pessoas maiores que 50 anos: ${idoso}`)
