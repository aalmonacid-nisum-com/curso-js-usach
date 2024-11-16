/*const obtenerNumeros = () => [6, 8, 9, 2, 5, 10];

const calcularPromedio = () => {
    const numeros = [6, 8, 9, 2, 5, 10];
    return numeros.reduce((acc, num) => acc + num, 0) / numeros.length;
  }
  
console.log(calcularPromedio()); // Esto imprime el promedio*/

// numeros de la tarea
const numeros = [6, 8, 9, 2, 5, 10];

// creo variable suma
let suma = 0;

// uso de for para realizar la suma
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

// calcular el promedio
const promedio = suma / numeros.length;

// uso de elementos con id para mostrarlos en el archivo tarea5.html
document.getElementById('suma').textContent = suma;
document.getElementById('promedio').textContent = promedio;

