// Array
let pokemon = [
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
];

// Convertir arreglo pokemon a mayúsculas
let pokemonEnMayusculas = pokemon.map(nombre => nombre.toUpperCase());

// resultado se muestra en archivo array-mayusculas.html
document.getElementById('resultadoArray').textContent = pokemonEnMayusculas.join(', ');