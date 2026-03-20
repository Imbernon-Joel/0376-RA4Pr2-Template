// creamos la lista de numeros del 0 al 9 para cada select de la clase .code-input

function generarSelects() {
    const listaDeSelects = document.querySelectorAll('.code-input');
    
    listaDeSelects.forEach(function(selectIndividual) {
        for (let numero = 0; numero <= 9; numero++) {
            const opcionNueva = document.createElement('option');
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
    linia.style.color = '#00ff00';
  } else if (tipus === 'error') {
    linia.style.color = '#ff0000';
  } else {
    linia.style.color = '#ecd713';
  }


  terminal.appendChild(linia);
}

//Escoltar el clic del botó "Executar Codi", recollir els valors dels 4 selects i cridar a la lògica de comparació..

function gestorEsdeveniments() {
    const boto = document.getElementById('btn-enviar'); // el id del botón

    boto.addEventListener('click', function() {
        
        // Recollim els valors dels 4 selects
        const listaDeSelects = document.querySelectorAll('.code-input');
        const intentUsuari = [];

        listaDeSelects.forEach(function(select) {
            intentUsuari.push(Number(select.value));
        });

        // Mostrem l'intent per terminal
        logTerminal('Intent: ' + intentUsuari.join(' - '), 'normal');

        validarintento(intentUsuari, codigosecreto);
        actualitzarRondes();
         console.log("intento usuario=" + intentUsuari)
        console.log("code=" + codigosecreto)
    });
}




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
    console.log("intentousuario= " + intento + "code= " + codigosecreto)
    let numerocodesecreto = 0;
    let nuermointento = 0;
    let resultadodevalidarintento = [];
    for (let i = 0; i!==4; i++){
        numerocodesecreto = codigosecreto[i]
        numerointento = intento[i]

        if (numerocodesecreto == numerointento){
            resultadodevalidarintento.push("1");
        }
        else if (codigosecreto.includes(numerointento)){
            resultadodevalidarintento.push("Ø");
        }
        else {
            resultadodevalidarintento.push("x");
        }
    }

    if (resultadodevalidarintento.join('') === '1111'){
        return logTerminal("HAS GANADO BRO GGGSSSS", "exit");
        }
    else{
        return logTerminal(resultadodevalidarintento, "normal");
        }
}


//ESTO ES EL APARTADO C DEL ESTUDIANTE B
const MAX_RONDES = 5;
let rondesRestants = MAX_RONDES;

function actualitzarRondes() {
    rondesRestants--;  // restamos 1 ronda

    // Buscar el elemento del contador en el HTML
    const comptador = document.getElementById('rondes-restants');
    comptador.textContent = rondesRestants;

    // Avisar por terminal cuantas quedan
    logTerminal('Rondes restants: ' + rondesRestants, 'normal');

    // Si no quedan rondas, se acaba el juego
    if (rondesRestants === 0) {
        logTerminal('GAME OVER. Has esgotat els intents.', 'error');
    }
    if (rondesRestants < 0) {
        location.reload();
    }
}

    codigosecreto = generarcodigosecreto();
    generarSelects();
    logTerminal('Empieza', 'normal');
    gestorEsdeveniments();
