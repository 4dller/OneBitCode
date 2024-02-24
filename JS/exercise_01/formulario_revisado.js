function solicitarInformacao(mensagem) {
    let informacao;
    do {
        informacao = prompt(mensagem);
    } while (informacao !== null && !/^[a-zA-Z]+$/.test(informacao));
    return informacao;
}

let primeiroNome = solicitarInformacao("Informe o primeiro nome do recruta:");
let sobreNome = (primeiroNome !== null) ? solicitarInformacao("Informe o sobrenome do recruta:") : null;
let campoDeEstudo = (sobreNome !== null) ? solicitarInformacao("Informe o seu campo de estudo:") : null;

if (primeiroNome !== null && sobreNome !== null && campoDeEstudo !== null) {
    console.log("Nome válido:", primeiroNome);
    console.log("Sobrenome válido:", sobreNome);
    console.log("Campo de estudo:", campoDeEstudo);
}