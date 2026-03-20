//ESTO ES EL APARTADO 1 DEL ESTUDIANTE B
//aqui esto es como una "caja" vacia donde guardamos el codigo del juego que se usara para comparar con los intentos del usuario
let codigosecreto = [];

//esta funcion genera un numero aleatorio del 0-9, donde genera numero entre 0 y 10 y elimina los decimales con math.floor()
function generarnumerosrandom() {
    return Math.floor(Math.random() * 10);
}

//esto es lo que genera el array de 4 numeros, creamos un array vacio donde guardaremos los numeros y en bucle que se repite 4 veces porque tenemos en el codigo 4 numeros
function generarcodigosecreto() {
    const codigo = [];
    for (let i = 0; i < 4; i++) {
        codigo.push(generarnumerosrandom());
    }
    return codigo;
}

//ESTO ES EL APARTADO B DEL ESTUDIANTE B
//funcion que compara el intento del usuario con el codigo secreto
function validarintento(intento, codigosecreto) {
    const pista = []  //guarda el resultado final
    const copiacodigo = [codigosecreto]  //copia del secreto codigo, el const se utiliza para modificar sin perder el original
    const copiaintento  = [intento]   //copia del intento del usuario o jugador
}

//detecta los numeros correctos en la posicion correcta
for (let i = 0; i < copiaintento.length; i++) {
    if (copiaintento[i] === copiacodigo[i]) {  //
        pista.push('1');  //añade un 1 si el numero es correcto
        copiacodigo[i] = null;   //marcamos el numero como usado para que no se vuelva a contar
        copiaintento[i] = undefined;  //marcamos el intento como procesado
    }
}

//detecta numeros correctos pero en posicion incorrecta
for (let i = 0; i < copiaintento.length; i++) {  
    if (copiaintento[i] !== undefined) {
        const index = copiacodigo.indexOf(copiaintento[i]);  //busca si el numero del intento esta en otra posicion del que tendria que estar

        if (index !== -1) {
            pista.push ('Ø') //numero correcto en mala posicion
            copiacodigo[index] = null;  //marcamos ese numero para evitar contarlo otra vez
        } else {
            copiacodigo.push('×'); //esto marca que el numero no es correcto
        }
    }
}

return correcto; //ejecuta y devuelve los numeros

//ESTO ES EL APARTADO C DEL ESTUDIANTE B

let rondasrestantes = 5; //tiene 5 rondas para acertar el codigo secreto

function comprovarcodigo(pista) {
    if (pista.length === 4 && pista.every(p => p === '1')) {  //si todas las pistas son '1' el jugador ha ganado
        return "LO CONSEGUISTE"; //el usuario o jugador adivino el codigo
    }
    
    if (rondasrestantes <= 0) {
        return "NO LO HAS CONSEGUIDO"; //si el jugador ha agotado los 5 intentos pierde
    }

    return "CONTINUA"; //si no ha ganado ni ha perdido, el juego continua
    }

window.onload = function() {
    codigosecreto = generarcodigosecreto(); //generamos el codigo secreto  al iniciar el juego
    console.log(codigosecreto); //esto se mostrara para pruebas en el juego real se ocultaria.
}