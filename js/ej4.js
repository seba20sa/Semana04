// EJ 4 If Else
//A) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es
// mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta
// con el mensaje “Lower than 0,5”
var x = Math.random();
console.log(x);
if (x >= 0.5) {
    alert('Greater than 0,5')
} else {
    alert('Lower than 0,5');
}
// B) Crear una variable “Age” que contenga un número entero entre 0 y 100 y
// muestre los siguientes mensajes de alerta:
//i) “Bebe” si la edad es menor a 2 años
//ii) “Nino” si la edad es entre 2 y 12 años
//iii) “Adolecente” si la edad es entre 13 y 19 años
//iv) “Joven” si la edad está entre 20 y 30 años
//v) “Adulto” entre 31 y 60 años
//vi) “Adulto mayor” entre 61 y 75 años
//vii) “Anciano” si es mayor a 75 años
var age = parseInt(100*Math.random());
console.log(age);
if (age < 2) {
    alert('Bebe');
} else if(age >=2 && age <=12) {
    alert('Nino');
} else if (age >=13 && age <=19) {
    alert('Adolecente');
} else if (age >=20 && age <=75) {
    alert('Adulto mayor');
} else {
    alert('Anciano');
}