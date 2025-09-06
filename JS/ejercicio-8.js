// 8- Escribe un programa que pida un número y diga si es divisible por 2

const numero = parseInt(prompt("Ingrese un numero:"));

if (numero % 2 === 0) {
  alert("El numero " + numero + " Es divisible por 2.");
} else {
  alert("El numero " + numero + " No es divisible por 2");
}