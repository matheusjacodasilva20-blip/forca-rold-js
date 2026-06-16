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

let exibicao = "";

for(let i = 0; i < palavra.length; i++){
    exibicao += "_ ";
}

document.body.innerHTML += `<p>${exibicao}</p>`;

function jogar(){

    const letra =
        document.getElementById("letra")
        .value
        .toUpperCase();

    document.getElementById("resultado")
        .innerText = `Você digitou: ${letra}`;
}