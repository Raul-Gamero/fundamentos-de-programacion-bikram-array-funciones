//PAIR PROGRAMMING

//ARRAYS

//1. Crear variable de nombre arrayVacio cuyo valor sea un array vacío

let arrayVacio = [];

//2. Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//3. Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9

let arrayNumerosPares = [0, 2, 4, 5, 8];

//4. Crear variable de nombre arrayBidimensional declarada con valor [[0, 1, 2], ['a', 'b', 'c']]

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//FUNCIONES

//5. Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma

function suma(a, b) {
    return a + b;
}

//6. Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b)

function potenciacion(base, exponente) {
    return base ** exponente;
}

//7. Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras

function separarPalabras(frase) {
    return frase.split(' ');
}

//8. Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces

function repetirString(str, num) {
    return str.repeat(num);
}

//9. Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es

function esPrimo(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

//MEZCLANDO ARRAYS Y FUNCIONES

//10. Crear la función ordenarArray que acepte como argumento un array de números y devuelva un array ordenado de menor a mayor

function ordenarArray(arr) {
    return arr.sort((a, b) => a - b);
}

//11. Crear la función obtenerPares que acepte como argumento un array de números y devuelva un array con los elementos pares

function obtenerPares(arr) {
    return arr.filter(num => num % 2 === 0);
}

//12. Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto

function pintarArray(arr) {
    return `[${arr.join(', ')}]`;
}

//13. Crear la función arrayMapi que acepte como argumento un Array y una función, y devuelva un array en el que se haya aplicado la función a cada elemento del array

function arrayMapi(arr, func) {
    return arr.map(func);
}

//14. Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados

function eliminarDuplicados(arr) {
    return [...new Set(arr)];
}

//PROYECTO INDIVIDUAL

//ARRAYS

//15. Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//16. Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'

let holaMundo = ['Hola', 'Mundo'];

//17. Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

//18. Crear variable de nombre arrayDeArrays declarada con valor array [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//FUNCIONES

//19. Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación

function multiplicacion(a, b) {
    return a * b;
}

//20. Crea la función division que acepte como argumento dos números y devuelva el resultado de su división
function division(a, b) {
    return a / b;
}

//21. Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

function esPar(num) {
    return num % 2 === 0;
}

//22. Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicacion

//anteriormente se agrego suma y multiplicacion solo agregaremos resta
function resta(a, b) {
    return a - b;
}

let arrayFunciones = [suma, resta, multiplicacion];

//MEZCLANDO ARRAY Y FUNCIONES

//23. Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor

function ordenarArray2(arr) {
    return arr.sort((a, b) => b - a);
}

//24. Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

function obtenerImpares(arr) {
    return arr.filter(num => num % 2 !== 0);
}

//25. Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array

function sumarArray(arr) {
    return arr.reduce((acumulador, actual) => acumulador + actual, 0);
}

//26. Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array

function multiplicarArray(arr) {
    return arr.reduce((acumulador, actual) => acumulador * actual, 1);
}