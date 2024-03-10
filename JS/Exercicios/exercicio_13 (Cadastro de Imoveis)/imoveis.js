const imoveis = []

let opcao = ""

do {
    opcao = prompt ("Bem-vindo ao cadastro de imóveis.\nTotal de imóveis: " + imoveis.length +"\n\nEscolha uma opção: \n1. Novo Imóvel \n2. Listar Imóveis \n3. Sair" )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel: ")
            imovel.quartos = parseFloat(prompt("Quantos quartos o imóvel possui?"))
            imovel.banheiros = parseFloat(prompt("QUantos banheiros possui o imóvel?"))
            imovel.garagem =prompt ("O imóvel possui garagem? (Sim/Não)")
            
            const confirma = confirm (
                "Salvar este imóvel?\n" +
                "\nPropietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagem? " + imovel.garagem
            )

            if (confirma) {
                imoveis.push(imovel)
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++){
                alert (
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nPossui Garagem? " + imoveis[i].garagem
                    )
            }    
            break
        case "3":
            alert("Saindo...")

            break
            default:
            alert("Opção Inválida!")
                
            break
    }
} while (opcao !== "3");




