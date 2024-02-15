
// Variavel para pergunta o nome do turista
const turista = prompt ("Eae turista, qual é o seu nome?")

// Variavel vazia, para ser concatenada com as entradas de informações do usuario
let cidades = ""

// Variavel para a contagem de numero de cidades visitadas pelo turista
let contagem = 0

// Variavel para salvar uma string, que será a resposta do usuario usada para o funcionamento do laço de repeticção while
let continuar = prompt ("Você visitou alguma cidade? (Sim/Não)")



while (continuar === "Sim")
{
    let cidade = prompt ("Qual foi o nome da cidade/Pais visitado?")
    
    cidades += " - " + cidade
}

