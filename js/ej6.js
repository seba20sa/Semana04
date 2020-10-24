//C) Crear una función validate integer que reciba un
// número como parámetro y verdadero si es un número entero.
var val = 100;
function validateInteger(val){    
    if (parseInt(val)===val){    
        return true;      
    } else {
        return false;
    }
}
//Some examples
console.log(validateInteger(val))
console.log(validateInteger(50.1))
console.log(validateInteger(63))