// creamos la lista de numeros del 0 al 9 para cada select de la clase .code-input

listaDeSelects = document.querySelectorAll('.code-input');

listaDeSelects.forEach(function(selectIndividual) {
    for (let numero = 0; numero <= 9; numero++) {
        opcionNueva = document.createElement('option');
        opcionNueva.value = numero;
        opcionNueva.textContent = numero;
        selectIndividual.appendChild(opcionNueva);
    }
});


