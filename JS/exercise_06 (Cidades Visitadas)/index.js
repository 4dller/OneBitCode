
// Variavel para perguntar o nome do turista/usuario
const turista = prompt ("Eae turista, qual é o seu nome brow?")

// Variavel vazia, para ser concatenada com as entradas de informações do usuario
let cidades = ""

// Variavel para a contagem de numero de cidades visitadas pelo turista
let contagem = 0

// Variavel para salvar uma string, que será a resposta do usuario usada para o funcionamento do laço de repeticção while
let continuar = prompt ("Você visitou alguma cidade? (sim/não)")

//Estrutura de repetição while, vai repetir enquanto a resposta do usuario for Sim, e se sim vai atribuir valor a contagem e um nome da cidade/pais a lista! 

while (continuar === "sim")
{
    let cidade = prompt ("Qual foi o nome da cidade/Pais visitado?")    
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt ("Voce visitou alguma outra cidade?(sim/não) ")
}

//Recurso nativo do navegador usado para exibir na tela os resultados do programa 
alert(
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
  )
