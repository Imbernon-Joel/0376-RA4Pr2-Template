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









// creamos la lista de numeros del 0 al 9 para cada select de la clase .code-input

function generarSelects() {
    listaDeSelects = document.querySelectorAll('.code-input');

    listaDeSelects.forEach(function(selectIndividual) {
        for (let numero = 0; numero <= 9; numero++) {
            opcionNueva = document.createElement('option');
            opcionNueva.value = numero;
            opcionNueva.textContent = numero;
            selectIndividual.appendChild(opcionNueva);
        }
    });
}

//Ponemos mensaje en la pantalla segun lo que pasa si gana se equivoca o empieza

function logTerminal(missatge, tipus) {
  // Buscar la zona del terminal en el HTML
  const terminal = document.getElementById('terminal');

  // Crear una nueva línea de texto
  const linia = document.createElement('p');

  // Añadir el símbolo de "línea de comando" + el mensaje
  linia.textContent = '> ' + missatge;

  // Cambiar color según el tipo
  if (tipus === 'exit') {
    linia.style.color = '#00ff00';   // verde brillante → ganar
  } else if (tipus === 'error') {
    linia.style.color = '#ff0000';   // rojo → perder
  } else {
    linia.style.color = '#00aa00';   // verde apagado → normal
  }

  // Añadimos el resultado a la terminal
  terminal.appendChild(linia);
}

//Escoltar el clic del botó "Executar Codi", recollir els valors dels 4 selects i cridar a la lògica de comparació..

function gestorEsdeveniments() {
    const boto = document.getElementById('execute-btn'); // el id del botón

    boto.addEventListener('click', function() {
        
        // Recollim els valors dels 4 selects
        const listaDeSelects = document.querySelectorAll('.code-input');
        const intentUsuari = [];

        listaDeSelects.forEach(function(select) {
            intentUsuari.push(Number(select.value));
        });

        // Mostrem l'intent per terminal
        logTerminal('Intent: ' + intentUsuari.join(' - '), 'normal');
        comprovarIntent(intentUsuari);
    });
}

const MAX_RONDES = 5;
let rondesRestants = MAX_RONDES;

function actualitzarRondes() {
    rondesRestants--;  // restamos 1 ronda

    // Buscar el elemento del contador en el HTML
    const comptador = document.getElementById('rondes-restants');
    comptador.textContent = rondesRestants + ' / ' + MAX_RONDES;

    // Avisar por terminal cuantas quedan
    logTerminal('Rondes restants: ' + rondesRestants, 'normal');

    // Si no quedan rondas, se acaba el juego
    if (rondesRestants === 0) {
        logTerminal('GAME OVER. Has esgotat els intents.', 'error');
    }
}

// Aqui llamamos a las funciones para que funcionen
generarSelects();
logTerminal(" " , 'normal');
gestorEsdeveniments();
