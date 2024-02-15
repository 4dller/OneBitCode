const turista = prompt ("Eae turista, qual é o seu nome?")

let cidades = ""
let contagem = 0
let continuar = prompt ("Qual cidade/país voce visitou? (Sim/Não)")

while (continuar === "Sim")
{
    let cidade = prompt ("Qual foi o nome da cidade/Pais visitado?")
    
    cidades += " - " + cidade
}

