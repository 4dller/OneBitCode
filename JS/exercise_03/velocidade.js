const car1 = prompt ("Informe o nome do primeiro veiculo")
const velocidade1 = parseFloat (prompt ("Informe a velocidade do primeiro veiculo:"))

const car2 = prompt ("Informe o nome do segundo veiculo")
const velocidade2 = parseFloat (prompt ("Informe a velocidade do segundo veiculo:"))

if (velocidade1 > velocidade2) {
    alert(car1 + " é mais rápido do que " + car2)
  } else if (velocidade2 > velocidade1) {
    alert(car2 + " é mais rápido do que " + car1)
  } else {
    alert(car1 + " e " + car2 + " possuem velocidades iguais.")
  }