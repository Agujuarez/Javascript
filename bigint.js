//BigInt
/*
const number = 2n ** 53n;
console.log(number);
*/
/*
number.constructor.name;    // "BigInt" (Es de tipo BigInt)

number;       // 9007199254740992n
number + 1n;  // 9007199254740993n
number + 5n;  // 9007199254740997n
number + 40n; // 9007199254741032n

//Mezclando tipo de datos
const number = 5 + 5n;          // ERROR: Cannot mix BigInt and other types, use explicit conversions
const number = BigInt(5) + 5n   // 10n (Ok, convierte a BigInt y realiza la operación)
const number = 5 + Number(5n);  // 10 (Ok, convierte a Number y realiza la operación)
*/

//let numero = 123n;
//console.log(numero);

//let numero = 0b1n;
//console.log(numero);

//let numero = 0o7n;
//console.log(numero);

//let numero = 0xFn;
//console.log(numero);

let numero = 123;
numero = BigInt(numero); // Convierte a tipo BigInt
console.log(numero);
