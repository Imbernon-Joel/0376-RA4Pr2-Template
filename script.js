let codigosecreto = [];

function generarnumerosrandom() {
    return Math.floor(Math.random() * 10);
}

function generarcodigosecreto() {
    let codigo = [];
    for (let i = 0; i < 4; i++) {
        codigo.push(generarnumerosrandom());
    }
    return codigo;
}
window.onload = function() {
    codigosecreto = generarcodigosecreto();
    console.log(codigosecreto);
}