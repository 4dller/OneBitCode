
//Primeiro é preciso captar as informações dos personagens (nomes, dano, defesa, escudo), 
// Utilizando as variaveis para salvar os dado do usuario

const atacante = prompt ("Qual nome do Herói atacante?")
const poderDeAtaque = parseFloat (prompt("Qual é o seu poder de atack?"))

const defensor = prompt ("Qual é o nome do demonio defensor?")
let pontosDeVida = parseFloat( prompt ("Quantos pontos de vida ele possui?"))
const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui Escudo? (Sim/Não)")

//Depois é feito um calculo, de dano - def e considerando se o personagem defensor possui escudo

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa 
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

// O dano causado será abatido os pontos de vida e exibido na tela

pontosDeVida -= danoCausado

//O alert é um recurso nativo do navegador que vai mostrar na tela as informações pedidas.


alert (atacante + " Causou " + danoCausado + " pontos de dano em " + defensor)
alert ( 
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" + 
    defensor + "\nPontos de vida: " + pontosDeVida + 
    "\nPoder de defesa: " +  poderDeDefesa + "\nPossui escudo: " + possuiEscudo
    )