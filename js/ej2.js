/*EJ-2 Strings
A) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
 texto en mayúscula (utilizar toUpperCase).*/
var srtCar ='Kuala lumpur';
console.log(srtCar.toUpperCase());
/*B) Crear una variable de tipo string con al menos 10 caracteres y generar
  un nuevo string con los primeros 5 caracteres guardando el resultado
   en una nueva variable (utilizar substring).*/
var srtFive = 'mississippi';
var srtSub = srtFive.substring(0,5);
console.log(srtSub);
/*C) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
  con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var srtReverse = 'Lorem ipsu lorem';
var srtReverseSub = srtReverse.substring(srtReverse.length-3,srtReverse.length);
console.log(srtReverseSub);
/*D) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la
  primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva
   variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
var srtExtract = 'el resultado en Una Nueva';
var srtMix = srtExtract[0].toUpperCase()
  +srtExtract.substring(1,srtExtract.length).toLocaleLowerCase();
console.log(srtMix);
/*E) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
 Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf)*/
var strExtract2 = 'al menos 10 caracteres y generar'
var x = strExtract2.indexOf(' ');
console.log(x);
/*F) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio
 entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
 nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras
 en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
var srtLongOne = 'occurrence specified';
var y = srtLongOne.indexOf(' ');
var srtMixedOne = srtLongOne[0].toUpperCase()+srtLongOne.substring(1,y).toLowerCase()+' '
  +srtLongOne[y+1].toUpperCase()+srtLongOne.substring(y+2,srtLongOne.length).toLowerCase();
console.log(srtMixedOne);