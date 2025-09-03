// Escribe un programa de una sola linea que haga que aparezca en la pantlla un alert que diga "un menasje"

// ventaa emergente
// alert('Un mensaje')

// Escribe un programa de una sola linea que escriba en la pantalla un texto que diga "Hola Mundo"

document.writeln("<h1>Hola Mundo</h1>");

// Escribe un programa de una sola linea que escriba en la pantalla el resultado de sumar 3 + 5

// document.writeln(3+5)

// Escribe un programa dos lineas que pida el nombre del usuario con un promt y escribe un texto que diga << nombreUsuario >>

// const nombreUsuario = prompt("Ingrese su Nombre")
// document.writeln(`<br>Hola ${nombreUsuario}`)

// Escribe un programa de tres lineas que pida un numero, pida otro numero y escriba el resultado de sumar estos dos numeros

// let num1 = parseInt(prompt('Ingrese el pirmer numero:'))
// let num2 = parseInt(prompt('Ingrese el segundo numero:'))
// alert('La suma es: ' + (num1 + num2))

// Escibe un programa que pida dos numeros y escriba en la pantalla cual es el mayor

// let num1 = parseInt(prompt("Ingrese el primer numero:"));
// let num2 = parseInt(prompt("Ingrese el segundo numero:"));

// if (num1 > num2) {
//   alert("El numero mayor es: " + num1);
// } else if (num2 > num1) {
//   alert("El numero mayor es: " + num2);
// } else {
//   alert("Ambos numeros son iguales.");
// }

// Escribe un programa que pida 3 numeros y escriba en la pantalla el mayor de los tres

// let num1 = parseInt(prompt("Ingrese el primer numero:"));
// let num2 = parseInt(prompt("Ingrese el segundo numero:"));
// let num3 = parseInt(prompt("Ingrese el tercer numero:"));

// let mayor 

// if (num1 >= num2 && num1 >= num3) {
//   mayor = num1
// } else if (num2 >= num1 && num2 >= num3) {
//   mayor = num2
// } else {
//     mayor = num3
// }
// alert('El numero mayor: ' + mayor)

// Escribe un programa que pida un número y diga si es divisible por 2

const numero = parseInt(promt('Ingrese un numero:'))

if (numero % 2 === 0) {
    alert('El numero ' + numero + ' Es divisible por 2.')
} else {
    alert('El numero ' + numero + ' No es divisible por 2')
}