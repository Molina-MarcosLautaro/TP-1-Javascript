// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

/*
Ejemplo:
input: 20
output: El 20 es divisible por 2
*/

// 1- creo un programa q le pida al usuario un numero
// 2- creo un programa q tenga numero devisibles por 2, 3, 5 o 7 cuando el usuario ingrese un numero

const numero = parseInt(prompt("Ingrese un numero"));

if (numero % 2 === 0) {
    alert(`El numero ${numero} es divisble por 2.` 
    )
} else if (numero % 3 === 0){
    alert(`El numero ${numero} es divisble por 3.`)
} else if (numero % 5 === 0){
    alert(`El numero ${numero} es divisble por 5.`)
}else if (numero % 7 === 0){
    alert(`El numero ${numero} es divisble por 7.`)
} else{
    alert('El numero ' + numero + ' que ingreso no divisible por 2, 3, 5 o 7')
}
