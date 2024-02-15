//Variavel de valor constante, usada para armazenar o primeiro nome do usuário.
const primeiroNome = prompt ("Informe o primeiro nome do recruta: ")
 
//Variavel de valor constante, usada para armazenar o segundo nome do usuário.
const sobrenome = prompt ("Informe o sobrenome do recruta: ")

//Variavel de valor constante, usada para armazenar o campo de estudo do usuário.
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?")

//Variavel de valor constante, usada para armazenar o ano de nascimento do usuário.
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta?")


//Recurso nativo do navegador usado para criar caixa de dialogo na tela do usuário, trazendo as informaçoes armazenadas nas variaveis
alert ("Recruta cadastrado com sucesso!" + 
        "\n Nome completo: " + primeiroNome + " " + sobrenome +
        "\n Campo de estudo: " + campoDeEstudo +
        "\n Idade: " + (2024 - anoDeNascimento) + "anos")