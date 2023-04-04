
/*
// Notación literal
const number = 4;
const decimal = 15.8;
const legibleNumber = 5_000_000;
// Notacion con objetos (evitar)
//const number = new Number(4);
//const decimal = new Number(15.8);
//const letter = new Number("A");
const incorrectNumber = 482598752875287528533; //numero fuera de valor seguro
const bigNumber = 482598752875287528533n; // añadiendo n creamos un BigInt
// Rangos numéricos seguros
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.EPSILON)
*/

//Número finito?
(Number.isFinite(42)); //true
(Number.isFinite(551.3)); //true
(Number.isFinite(Infinity)); //false

//Número entero?
(Number.isInteger(5)); //true
(Number.isInteger(4,6)); //false

//Número seguro?
(Number.isSafeInteger(1e15)); //true
(Number.isSafeInteger(1e16)); //false

// Notación exponencial
(1.25).toExponential(0);     // "1e+0"
(1.25).toExponential(1);     // "1.3e+0"
(1.25).toExponential(2);     // "1.25e+0"
(1.25).toExponential(3);     // "1.250e+0"

// Notación punto fijo
(1.25).toFixed(0);           // "1"
(1.25).toFixed(1);           // "1.3"
(1.25).toFixed(2);           // "1.25"
(1.25).toFixed(3);           // "1.250"

// Cambiando precisión
(523.75).toPrecision(1);      // "5e+2"
(523.75).toPrecision(2);      // "5.2e+2"
(523.75).toPrecision(3);      // "524"
(523.75).toPrecision(4);      // "523.8"
(523.75).toPrecision(5);      // "523.75"

(NaN == NaN);         // false (El valor no es el mismo)
(NaN === NaN);        // false (Ni el valor, ni el tipo de dato es el mismo)

// NaN
(Number.isNaN(NaN));  // true (Forma correcta de comprobarlo)
(Number.isNaN(5));    // false (5 es un número, no es un NaN)
(Number.isNaN("A"));  // false ("A" es un string, no es un NaN)

//Conversión de valoers NaN
(Boolean(NaN));   // false (convertimos a booleano)
(String(NaN));    // "NaN" (convertimos a texto)
(Number(NaN));    // NaN (Ya estaba en contexto numérico)

// Convertir String a Number

// Enteros
Number.parseInt("42");      // 42
Number.parseInt("42€");     // 42 (descarta todo desde un carácter no numérico)
Number.parseInt("Núm. 42"); // NaN (empieza a descartar en Núm, descarta también 42)
Number.parseInt("A");       // NaN (No se puede representar como un número)
Number.parseInt("");        // NaN (No se puede representar como un número)
Number.parseInt("42.5");      // 42 (descarta los decimales)
Number.parseInt("88.99€");    // 88 (descarta decimales y resto de caracteres)
Number.parseInt("Núm. 33.5"); // NaN (empieza a descartar en Núm, descarta todo)

// Números decimales
Number.parseFloat("42.5");      // 42.5 (Conserva decimales)
Number.parseFloat("42");        // 42 (El número es entero, convierte a entero)
Number.parseFloat("88.99€");    // 88.99 (Conserva decimales)
Number.parseFloat("42€");       // 42 (El número es entero, convierte a entero)
Number.parseFloat("Núm. 33.5"); // NaN (empieza a descartar en Núm, descarta todo)