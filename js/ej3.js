// Ej 3 Arrays
// A) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
//"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola
// los meses 5 y 11 (utilizar console.log)
var year =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(year[4]);
console.log(year[10]);
//B) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log(year.sort());
//C) Agregar un elemento al principio y al final del array (utilizar unshift y push).
year =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
year.push('Decembro');
year.unshift('Janeiro');
console.log(year);
//D) Quitar un elemento del principio y del final del array (utilizar shift y pop).
year.shift();
year.pop();
console.log(year);
//E) Invertir el orden del array (utilizar reverse)
year.reverse();
console.log(year);
//F) Unir todos los elementos del array en un único string donde cada mes
// este separado por un guión - (utilizar join).
var joinedYear = year.reverse().join('-');
console.log(joinedYear);
//G) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var slicedYear = year.slice(4,11);
console.log(slicedYear);