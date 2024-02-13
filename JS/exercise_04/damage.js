const atacante = prompt ("Qual nome do personamgem atacante?")
const poderDeAtaque = parseFloat (prompt("Qual é o seu pode de atack?"))

const defensor = prompt ("Qual é o nome do adversario defensor?")
let pontosDeVida = parseFloat( prompt ("Quantos pontos de vida ele possui?"))
const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui Escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa 
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert (atacante + " Causou " + danoCausado + " pontos de dano em " + defensor)
alert ( 
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" + 
    defensor + "\nPontos de vida: " + pontosDeVida + 
    "\nPoder de defesa: " +  poderDeDefesa + "\nPossui escudo: " + possuiEscudo
    )