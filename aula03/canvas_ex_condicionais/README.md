# ATIVIDADE PRÁTICA - JAVASCRIPT
## JS-05 - Laços Condicionais

### Lista 01 - Laço Condicional If

**1) Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.**

| ENTRADA | SAÍDA |
| --- | --- |
| Digite o número A: 2<br>Digite o número B: 4<br>Digite o número C: 5 | 4 + 2 = 6 > 5<br>A Soma de A + B é Maior do que C |
| Digite o número A: 2<br>Digite o número B: 2<br>Digite o número C: 5 | 2 + 2 = 4 < 5<br>A Soma de A + B é Menor do que C |
| Digite o número A: 2<br>Digite o número B: 2<br>Digite o número C: 4 | 2 + 2 = 4 = 4<br>A Soma de A + B é Igual a C |

---

**2) Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo.**

| ENTRADA | SAÍDA |
| --- | --- |
| Digite um número: 2 | O Número 2 é par e positivo! |
| Digite um número: -3 | O Número -3 é ímpar e negativo! |
| Digite um número: -2 | O Número -2 é par e negativo! |
| Digite um número: 3 | O Número 3 é ímpar e positivo! |

---

**3) Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean).**

| ENTRADA | SAÍDA |
| --- | --- |
| Digite o Nome do doador: João da Silva<br>Digite a Idade do doador: 62<br>Primeira doação de sangue? true | João da Silva não está apto para doar sangue! |
| Digite o Nome do doador: Maria dos Anjos<br>Digite a Idade do doador: 50<br>Primeira doação de sangue? true | Maria dos Anjos está apta para doar sangue! |
| Digite o Nome do doador: Fábio Camões<br>Digite a Idade do doador: 14<br>Primeira doação de sangue? false | Fábio Camões não está apto para doar sangue! |
| Digite o Nome do doador: Pedro Souza<br>Digite a Idade do doador: 68<br>Primeira doação de sangue? false | Pedro Souza está apto para doar sangue! |

---

**4) Escreva um algoritmo que leia 3 palavras (string), que definem as características de um tipo de animal, segundo o diagrama abaixo, que deve ser lido da esquerda para a direita.**

* **Vertebrado**
  * Ave
    * Carnívoro: **Águia**
    * Onívoro: **Pomba**
  * Mamífero
    * Onívoro: **Homem**
    * Herbívoro: **Vaca**
* **Invertebrado**
  * Inseto
    * Hematófago: **Pulga**
    * Herbívoro: **Lagarta**
  * Anelídeo
    * Hematófago: **Sanguessuga**
    * Onívoro: **Minhoca**

| ENTRADA | SAÍDA |
| --- | --- |
| vertebrado<br>mamífero<br>onívoro | Homem |
| invertebrado<br>inseto<br>herbívoro | Lagarta |
| vertebrado<br>ave<br>carnívoro | Águia |

<br>

### Lista 02 - Laço Condicional Switch

**5) Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro). A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.**

| Código do Produto | Produto | Preço Unitário |
| :---: | :--- | :--- |
| 1 | Cachorro Quente | R$ 10.00 |
| 2 | X-Salada | R$ 15.00 |
| 3 | X-Bacon | R$ 18.00 |
| 4 | Bauru | R$ 12.00 |
| 5 | Refrigerante | R$ 8.00 |
| 6 | Suco de laranja | R$ 13.00 |

| ENTRADA | SAÍDA |
| --- | --- |
| Código do Produto: 2<br>Quantidade: 5 | Produto: X-Salada<br>Valor total: R$ 75.00 |
| Código do Produto: 4<br>Quantidade: 2 | Produto: Bauru<br>Valor total: R$ 24.00 |

---

**6) Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.**

| Código do Cargo | Cargo | Percentual do Reajuste |
| :---: | :--- | :--- |
| 1 | Gerente | 10% |
| 2 | Vendedor | 7% |
| 3 | Supervisor | 9% |
| 4 | Motorista | 6% |
| 5 | Estoquista | 5% |
| 6 | Técnico de TI | 8% |

| ENTRADA | SAÍDA |
| --- | --- |
| Nome do colaborador: João da Silva<br>Cargo: 1<br>Salário: R$ 10000.00 | Nome do colaborador: João da Silva<br>Cargo: Gerente<br>Salário: R$ 11000.00 |
| Nome do colaborador: Maria dos Anjos<br>Cargo: 5<br>Salário: R$ 2000.00 | Nome do colaborador: Maria dos Anjos<br>Cargo: Estoquista<br>Salário: R$ 2100.00 |

---

**7) Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. O programa deverá ler dois números reais: numero1 e numero2, e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4).**

| Código | Operação |
| :---: | :--- |
| 1 | Soma |
| 2 | Subtração |
| 3 | Multiplicação |
| 4 | Divisão |

| ENTRADA | SAÍDA |
| --- | --- |
| Digite o 1º número: 10.0<br>Digite o 2º número: 5.0<br>Operação: 1 | 10.0 + 5.0 = 15.0 |
| Digite o 1º número: 10.0<br>Digite o 2º número: 5.0<br>Operação: 2 | 10.0 - 5.0 = 5.0 |
| Digite o 1º número: 10.0<br>Digite o 2º número: 5.0<br>Operação: 3 | 10.0 * 5.0 = 50.0 |
| Digite o 1º número: 10.0<br>Digite o 2º número: 5.0<br>Operação: 4 | 10.0 / 5.0 = 2.0 |

---

**8) Desenvolva um algoritmo que simule as operações básicas de uma Conta Bancária. O programa deverá ler o tipo da operação a ser realizada com base na tabela abaixo (número inteiro entre 1 e 3) e o valor a ser depositado ou sacado (somente nas opções 2 e 3).**

| Código da Operação | Operação |
| :---: | :--- |
| 1 | Saldo |
| 2 | Saque |
| 3 | Depósito |

| ENTRADA | SAÍDA |
| --- | --- |
| Operação: 1 | Operação - Saldo<br>Saldo: R$ 1000.00 |
| Operação: 2<br>Valor: R$ 10000.00 | Operação - Saque<br>Saldo Insuficiente! |
| Operação: 2<br>Valor: R$ 500.00 | Operação - Saque<br>Novo Saldo: R$ 500.00 |
| Operação: 3<br>Valor: R$ 2000.00 | Operação - Depósito<br>Novo Saldo: R$ 3000.00 |