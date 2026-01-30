const leia = require('readline-sync')

num1 = leia.questionInt('Digite o primeiro numero do intervalo: ')
num2 = leia.questionInt('Digite o ultimo numero do intervalo: ')

if(num2 < num1){
    console.log('Intervalo inválido!')
}else{
    for(let contador = num1; contador <= num2; contador ++ ){
        if (contador % 3 === 0 && contador % 5 === 0){
            console.log(`${contador} é multiplo de 3 e 5`)
        }
}
}