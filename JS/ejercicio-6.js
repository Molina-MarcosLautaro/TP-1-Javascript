// 6- Escibe un programa que pida dos numeros y escriba en la pantalla cual es el mayor

let num1 = parseInt(prompt("Ingrese el primer numero:"));
let num2 = parseInt(prompt("Ingrese el segundo numero:"));

if (num1 > num2) {
  alert("El numero mayor es: " + num1);
} else if (num2 > num1) {
  alert("El numero mayor es: " + num2);
} else {
  alert("Ambos numeros son iguales.");
}