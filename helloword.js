let nome = "Marcilei" // isso é uma variavel.
console.log("O nome em caixa baixa:", nome.toLowerCase()) // deixa em caixa pequena.
console.log("Nome em caixa alta:", nome.toUpperCase())// deixa em caixa alta.
let number = 12
console.log('O número é ', number.toFixed()) // deixa com duas casa após o ponto.

//Testando o tipo de variavel.
let n = "Marcilei";
let b = 12;
let boo = true;
console.log("O type:", typeof n)
console.log("O type:", typeof b)
console.log("O type:", typeof boo)
// continuando Os array que são mais de um valores na variavel
let ay = ["O valor 1", "O valor 2", "O valor 3"];
console.log(ay) // aqui está imprimindo os valores da lista;
// como trocar os valores do variavel demultipro número? 
ay[1] = "Marcilei"
console.log(ay.length) // imprime a quantidade de valores que tem na lista.

let idade = 0
//Escreva um programa que declare duas variáveis, “nome” e “idade”, e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”.
let Nome_user = "henrrique"
let Idade_user = 16
console.log("Meu nome é ", Nome_user, "e eu teho ", Idade_user, "Anos.")
//2. Declare uma string e utilize métodos para converter para maiúsculas e minúsculas.
let dado = "N"
console.log(dado.toLowerCase)
console.log(dado.toUpperCase)
//3. Declare uma variável e verifique se o tipo dela é number.
let variavel_type_number = 12
console.log("Typo da variavel:", typeof variavel_type_number)
//4. Calcule o Índice de Massa Corporal (IMC) utilizando variáveis para altura e peso.
let peso = 72
let altura = 1.80
let imc = peso / (altura * altura)
console.log("O imc é:", imc)

//1. Crie um programa que declare duas variáveis e exiba o resultado da soma,
//subtração, multiplicação e divisão desses números.
console.log(" ------------------- ATIVIDADE DOIS-------------------------------")
let log_n = 12
let log_p = 10
console.log("A soma das variaveis é:", log_n + log_p)
console.log("A subtração das variavel é:", log_n - log_p)
console.log("A multiplicação das variavel é:", log_n * log_p)
console.log("A divisão das variavel é:", log_n / log_p)
console.log("Exercicio 02 -----------------------------------------------------")
//2. Declare duas idades e utilize operadores de comparação para verificar se uma
//pessoa é mais velha que a outra.
let pessoa_1 = 20
let pessoa_2 = 30
let comparação = pessoa_1 > pessoa_2? "É mais velha":"É mais nova"
console.log("Exercicio 03 ------------------------------------------------------")
//3. Crie uma variável idade com um número e use o operador ternário para verificar
//se o valor armazenado na variável é maior ou igual a 18. Imprima “Maior de idade” ou “Menor de idade”.
let maior_idade = 19

let mens = menor_idade < 18 ? "É Menor de idade" : "É maior de idade"
console.log(mens)
console.log("Exercicio 04 -------------------------------------------------------")
//4. Crie uma variável com um número e use o operador ternário para verificar se é
//par ou ímpa
let tes = 2
let mesme = tes % 2 == 0 ? "É par" : "É impar"
console.log(mesme)
