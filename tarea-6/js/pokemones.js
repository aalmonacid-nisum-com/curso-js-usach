// Arreglo inicial
let pokemon = [
    { nombre: 'Pikachu', tipo: 'Electrico' },
    { nombre: 'Charmander', tipo: 'Fuego' },
    { nombre: 'Bulbasaur', tipo: 'Planta' },
    { nombre: 'Squirtle', tipo: 'Agua' },
    { nombre: 'Charmeleon', tipo: 'Fuego' },
    { nombre: 'Weedle', tipo: 'bicho' },
    { nombre: 'Charizard', tipo: 'Fuego' }
];

// Filtro pokemones tipo Fuego
let pokemonFuego = pokemon.filter(poke => poke.tipo === 'Fuego');
let resultado = pokemonFuego.map(poke => poke.nombre + ' (' + poke.tipo + ')');

// Resultado en pokemones.html
document.getElementById('resultadoPokemones').innerHTML = resultado.join('<br>');