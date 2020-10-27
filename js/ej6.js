/*Ej 6 Funciones
A) Crear una función suma que reciba dos valores numéricos y retorne el resultado.
 Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable
  en la consola del navegador.*/
function suma(val1,val2) {
    return val1 + val2;
}
var j = suma(-1,0);
console.log(j);
/*B) A la función suma anterior, agregarle una validación para controlar si alguno de los
 parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene
  error y retornar el valor NaN como resultado.*/
function suma(val1,val2) {
    if (typeof val1 != 'number' || typeof val2 != 'number') {
        alert('Error');
        return NaN;
    } else {
        return val1 + val2;
    }
}
//Some examples
j = suma('test',3);
console.log(j);
j = suma(-6,0);
console.log(j);
j = suma(3.9,10.5);
console.log(j);
/*C) Crear una función validate integer que reciba un
 número como parámetro y verdadero si es un número entero.*/
function validateInteger(val) {
    if (parseInt(val) === val) {
        return true;
    } else {
        return false;
    }
}
//Some examples
console.log(validateInteger(50.1));
console.log(validateInteger(63));
/*D) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean
 enteros. En caso que haya decimales mostrar un alerta con el error y retorna el
 número convertido a entero (redondeado).*/
function suma(val1,val2) {
    if (typeof val1 != 'number' || typeof val2 != 'number') {
        alert('Error');
        return NaN;
    }else if (val1 != Math.round(val1) || val2 != Math.round(val2)) {
        alert ('Error');
        return Math.round(val1) + Math.round(val2);
    } else {
         return val1 + val2;
    }
}
//Examples
j = suma('string',2);
console.log(j);
j = suma(-2,7);
console.log(j);
j = suma(0.9,7.5);
console.log(j);
j = suma(-0.7,0);
console.log(j);
j = suma(3,2.5);
console.log(j);
/*E) Convertir la validación del ejercicio 6b) en una función separada y
 llamarla dentro de la función suma probando que todo siga funcionando igual.*/
function control(value) {
    if (typeof value === 'number') {
        return value;
    } else {
        alert('Error');
    }
}
function suma(val1,val2) {
    return control(val1) + control(val2);
}
//Examples
j = suma(-2,7);
console.log(j);
j = suma(-2,'string');
console.log(j);
j = suma('',7);
console.log(j);
j = suma(0,0);
console.log(j);