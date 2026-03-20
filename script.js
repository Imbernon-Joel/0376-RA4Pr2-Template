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