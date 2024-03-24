function verificaNumero(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } 
    else {
        console.log(numero + " é ímpar");
    }
}

// Testando a função com diferentes números
verificaNumero(5);  // Saída: 5 é ímpar
verificaNumero(10); // Saída: 10 é par
verificaNumero(17); // Saída: 17 é ímpar
verificaNumero(20); // Saída: 20 é par
