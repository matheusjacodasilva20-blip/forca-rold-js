console.log("Jogo iniciado");

const palavras = [
    "THOR",
    "FLASH",
    "BATMAN",
    "AQUAMAN",
    "DEMOLIDOR"
];

const palavra =
    palavras[Math.floor(Math.random() * palavras.length)];

console.log(palavra);