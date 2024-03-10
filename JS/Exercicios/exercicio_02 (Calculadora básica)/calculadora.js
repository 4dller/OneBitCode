
// Variaveis criada para receber e armazenar os números de entrado do usuário, utilizado para realizar o cálculo

const entrada1 = prompt (" Imforme o primeiro número: ")
const entrada2 = prompt (" Informe o segundo número: ")

// Variareis criadas desnecessariamente para salvar as entrada do usuario numa NOVA variavel x e y, e convertendo-as para números!

const x = parseFloat (entrada1)
const y = parseFloat (entrada2)

// variaveis de calculos matematicos simples

const soma = x + y
const subtração = x - y
const multiplicação = x * y
const divisão = x / y

//Recursos nativos do navegador, para informar na tela os resultados dos calculos realizados pelo usuario. 

alert (
    "Resultados: \n" +

    "\n Soma: " + soma +
    "\n Subtração: " + subtração +
    "\n Multiplicação: " + multiplicação +
    "\n Divisão: " + divisão
)

