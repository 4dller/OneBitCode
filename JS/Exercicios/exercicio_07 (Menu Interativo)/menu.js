
//variavel que vai armazenar a opção selecionada pelo usuario
let opcao = ""

// estrutura de laço do while, que irá executar  uma declaração até que o teste da condição for falsa (false)
do {
    opcao = prompt (
         "Sejam bem vindxs!\n" +
         "\nEscolha uma das opções abaixo:" +
         "\n1. Opção um" + 
         "\n2. Opção dois" +
         "\n3. Opção três" +
         "\n4. Opção quatro" +
         "\n5. Encerrar"
         )

         switch(opcao){
            case "1" : 
            alert("Voce escolheu a opção 1")
            break

            case "2" : 
            alert("Voce escolheu a opção 2")
            break

            case "3" : 
            alert("Voce escolheu a opção 3")
            break
            
            case "4" : 
            alert("Voce escolheu a opção 4")
            break

            case "5" : 
            alert("Voce escolheu encerrar!")
            alert("Encerrando...")
            break

            default:
                alert("Opção Inválida!")

         }

}while (opcao !== "5")