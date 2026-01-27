const leia = require('readline-sync')
let salarioBruto = leia.questionFloat('Salario Bruto: ')
let addNoturno = leia.questionFloat('Adicional Noturno: ')
let extras = leia.questionFloat('Horas Extras: ')
let descontos = leia.questionFloat('Descontos')

let salarioLiquido = salarioBruto + addNoturno + (extras * 5) - descontos;