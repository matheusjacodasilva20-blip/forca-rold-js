const palavras = [
    "THOR",
    "FLASH",
    "BATMAN",
    "AQUAMAN",
    "DEMOLIDOR"
];

let palavra = "";
let letrasUsadas = [];
let erros = 0;
const maxErros = 6;

function iniciarJogo() {

    palavra = palavras[Math.floor(Math.random() * palavras.length)];

    letrasUsadas = [];

    erros = 0;

    atualizarTela();

    document.getElementById("mensagem").innerText = "";
}

function atualizarTela() {

    let exibicao = "";

    for (let i = 0; i < palavra.length; i++) {

        let letra = palavra[i];

        if (letrasUsadas.includes(letra)) {
            exibicao += letra + " ";
        } else {
            exibicao += "_ ";
        }
    }

    document.getElementById("palavra").innerText =
        "Palavra: " + exibicao;

    document.getElementById("tentativas").innerText =
        "Tentativas restantes: " + (maxErros - erros);

    document.getElementById("usadas").innerText =
        "Letras utilizadas: " + letrasUsadas.join(" ");
}

function jogar() {

    let entrada =
        document.getElementById("letra")
        .value
        .toUpperCase();

    document.getElementById("letra").value = "";

    if (entrada === "") {
        return;
    }

    if (letrasUsadas.includes(entrada)) {
        return;
    }

    letrasUsadas.push(entrada);

    if (!palavra.includes(entrada)) {
        erros++;
    }

    atualizarTela();

    verificarVitoria();

    verificarDerrota();
}

function verificarVitoria() {

    let venceu = true;

    for (let i = 0; i < palavra.length; i++) {

        if (!letrasUsadas.includes(palavra[i])) {

            venceu = false;

            break;
        }
    }

    if (venceu) {

        document.getElementById("mensagem").innerText =
            "🎉 Parabéns! Você venceu!";
    }
}

function verificarDerrota() {

    if (erros >= maxErros) {

        document.getElementById("mensagem").innerText =
            "💀 Você perdeu! A palavra era: " + palavra;
    }
}

function novoJogo() {

    iniciarJogo();
}

iniciarJogo();