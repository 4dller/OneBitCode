
// Variavel de valor constante, usado para salvar o valor passado do usuario, valor esse à ser convertido.
const medida = parseFloat(prompt("Insira uma medida em metros:"))

// Opções de Unidade de medida para o usuario escolher:
const unidade = prompt(
    "Para qual unidade de medida deseja converter?" +
    "\n1 - milímetros (mm)" +
    "\n2 - centímetros (cm)" +
    "\n3 - decímetros (dm)" +
    "\n4 - decâmetros (dam)" +
    "\n5 - hectômetro (hm)" +
    "\n6 - quilômetro (km)"
  )

  //A estrutura condicional switch permite executar um bloco de código diferente de acordo com cada opção (case) especificada. Seu uso é indicado quando os valores a serem analisados nessas condições são pré-definidos.
  switch (unidade) {
    case "1":
      alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
      break
    case "2":
      alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
      break
    case "3":
      alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
      break
    case "4":
      alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
      break
    case "5":
      alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
      break
    case "6":
      alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
      break
    default:
      alert("Opção inválida!")
      break
  }