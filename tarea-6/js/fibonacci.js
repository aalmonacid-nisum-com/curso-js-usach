// secuencia de Fibonacci de 0 a 1000
const fibonacci = [];
let a = 0, b = 1;

while (a <= 1000) {
    fibonacci.push(a);
    [a, b] = [b, a + b]; // actualizo los valores usando desestructuracion
}

//muestro los resultados en index.html
const container = document.getElementById('fibonacci-todos');
container.textContent = fibonacci.join(', ');

// mostrar pares e impares
const pares = fibonacci.filter(num => num % 2 === 0);
const impares = fibonacci.filter(num => num % 2 !== 0);

// Mostrar los números en los divs correspondientes
document.getElementById('fibonacci-pares').textContent = pares.join(', ');
document.getElementById('fibonacci-impares').textContent = impares.join(', ');