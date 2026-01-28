const leia = require('readline-sync')
let media = leia.questionFloat('Digite sua media:',
    {limitMessage: 'Digite um numero para calcularmos a media'}
)

if (media >= 7){
    console.log('Aluno aprovado!')
}else if(media >= 5 && media < 7)
    console.log('Aluno de recuperação!')
else{
    console.log('Aluno reprovado!')
}
/*
if (media < 7){
    console.log('Aluno reprovado!')
}
*/    
