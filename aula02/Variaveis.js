let nome = 'Marcus'
let profissao = 'Dev'
let salarioBruto = 3500.90
const bonus = 0.05 //5%
let verificar = false

console.log(`O Tipo da variavel nome é: ${typeof(nome)}`)

if (salarioBruto > 1000){
    let msg = 'Salario maior que 1000'
    console.log(msg)
    verificar = true
}

if(verificar === true){
    console.log(`Salario liquido: ${new Intl.NumberFormat('pt-BR', {
    style: 'currency', 
    currency: 'BRL',
}).format(salarioBruto + (bonus * salarioBruto))
}
`)
}

