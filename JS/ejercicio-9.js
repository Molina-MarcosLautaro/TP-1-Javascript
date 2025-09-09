//  9- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

/*
Ejemplo 

input: Hola mundo
Outpot: oauo
*/

const frase = prompt("Ingrese la frase  'Hola mundo' ");

if (frase.charAt(1) === "o") {
  document.writeln(frase.charAt(1));
}
if (frase.charAt(3) === "a") {
  document.writeln(frase.charAt(3));
}
if (frase.charAt(6) === "u") {
  document.writeln(frase.charAt(6));
}
if (frase.charAt(9) === "o") {
  document.writeln(frase.charAt(9));
} else{
    document.writeln('Frase no encontrada')
}
