/* EJ-1 Variables y Operadores 
A)Crear dos variables numéricas y utilizar el operador suma para guardar el 
valor de la suma de ambos números en una 3er variable.*/
var a = 2;
var b= 7;
var c = a + b;
console.log(c);
/*B)Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/
var strA = 'Hola';
var srtB = 'gente.';
var srtC = strA + ' ' + srtB;
console.log(srtC);
/*C)Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del
     string) guardando el resultado la suma una 3er variable (utilizar length).*/
var strFirst = 'Android';
var strSecond = 'Apple';
var srtLengthSum = strFirst.length + strSecond.length;
console.log(srtLengthSum);
/*EJ-2 Strings 
A) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
 texto en mayúscula (utilizar toUpperCase).*/
var srtCar ='Kuala lumpur' ;
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
var srtExtract = 'el resultado en Una Nueva'  ;
var srtMix = srtExtract[0].toUpperCase()+
    srtExtract.substring(1,srtExtract.length).toLocaleLowerCase();
console.log(srtMix);
/*E) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
 Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf)*/
var strExtract2 = 'al menos 10 caracteres y generar'
var x = strExtract2.indexOf(' ');
console.log(x);
/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio
     entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
      nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras
       en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
var srtLongOne = 'occurrence specified';
var y = srtLongOne.indexOf(' ');
var srtMixedOne = srtLongOne[0].toUpperCase()+srtLongOne.substring(1,y).toLowerCase()+' '
    +srtLongOne[y+1].toUpperCase()+srtLongOne.substring(y+2,srtLongOne.length).toLowerCase();
console.log(srtMixedOne);           
