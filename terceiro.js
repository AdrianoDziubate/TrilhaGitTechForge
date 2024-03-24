// Declarando uma string
let minhaString = "Olá, mundo! Este é um exemplo de string.";

// Imprimindo o comprimento da string no console
console.log("Comprimento da string:", minhaString.length);

// Convertendo a string para letras maiúsculas
let stringMaiuscula = minhaString.toUpperCase();
console.log("String em maiúsculas:", stringMaiuscula);

// Dividindo a string em palavras e imprimindo cada palavra no console
let palavras = minhaString.split(" ");
console.log("Palavras na string:");
palavras.forEach(palavra => console.log(palavra));
