
let primeiroNome;
let sobreNome;
let campoDeEstudo;
let anoDeNascimento;

do {
    primeiroNome = prompt("Informe o primeiro nome do recruta: ");
    
    if (/^[a-zA-Z]+$/.test(primeiroNome)) {
       
    } else {
        alert("Por favor, insira apenas letras de a-z ou A-Z para o primeiro nome.");
    }
} while (!/^[a-zA-Z]+$/.test(primeiroNome) || Object.is(primeiroNome, null));

console.log("Nome válido:", primeiroNome);

// !primeiroNome.match(/^[a-zA-Z]+$/) 


do {
    sobreNome = prompt("Informe o sobrenome do recruta: ");
    
    if (/^[a-zA-Z]+$/.test(sobreNome)) {
        console.log("Nome válido:", sobreNome);
    } else {
        alert("Por favor, insira apenas letras de a-z ou A-Z para o sobrenome.");
    }
} while (!/^[a-zA-Z]+$/.test(sobreNome));

/*
do {
    campoDeEstudo = prompt("Informe o seu campo de estudo:");
    
    if (/^[a-zA-Z]+$/.test(campoDeEstudo)){
        console.log("Campo de estudo:", campoDeEstudo);
    }

}  */