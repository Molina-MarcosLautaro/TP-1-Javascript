// 7- Escribe un programa que pida 3 numeros y escriba en la pantalla el mayor de los tres

const num1 = parseInt(prompt("Ingrese el primer numero:"));
const num2 = parseInt(prompt("Ingrese el segundo numero:"));
const num3 = parseInt(prompt("Ingrese el tercer numero:"));

let mayor;

if (num1 >= num2 && num1 >= num3) {
  mayor = num1;
} else if (num2 >= num1 && num2 >= num3) {
  mayor = num2;
} else {
  mayor = num3;
}
alert("El numero mayor es: " + mayor);