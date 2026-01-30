const leia = require('readline-sync')

let nome = leia.question('Digite o nome do doador: ')
let idade = leia.questionInt('Digite a idade do doador: ')
let doar = leia.keyInYN('Primeira doacao de sangue?(digite y para sim e n para nao)')
