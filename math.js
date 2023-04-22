// Constantes de Math
/*
console.log(Math.E) // Número de Euler - 2.718281828459045
Math.LN2	Equivalente a Math.log(2)	0.6931471805599453
Math.LN10	Equivalente a Math.log(10)	2.302585092994046
Math.LOG2E	Equivalente a Math.log2(Math.E)	1.4426950408889634
Math.LOG10E	Equivalente a Math.log10(Math.E)	0.4342944819032518
Math.PI	Número PI o Π	3.141592653589793
Math.SQRT1_2	Equivalente a Math.sqrt(1/2).	0.7071067811865476
Math.SQRT2	Equivalente a Math.sqrt(2).	1.4142135623730951
*/

// Metodos Matematicos

Math.abs(-5);             // 5
Math.sign(-5);            // -1
Math.exp(1);              // e, o sea, 2.718281828459045
Math.expm1(1);            // 1.718281828459045
Math.max(1, 40, 5, 15);   // 40
Math.min(5, 10, -2, 0);   // -2
Math.pow(2, 10);          // 1024 (Equivale a 2**10)
Math.sqrt(2);             // 1.4142135623730951 (Equivale a Math.SQRT2)
Math.cbrt(2);             // 1.2599210498948732
Math.imul(0xffffffff, 7); // -7

// Ejemplo de clz32 (count leading zeros)
//const x = 1;
//"0".repeat(Math.clz32(x)) + x.toString(2);
// Devuelve "00000000000000000000000000000001"

//Math.Random
let x = Math.random(); // Obtenemos un número al azar entre [0, 1) con 16 decimales
x = x * 5; // Multiplicamos dicho número por el valor máximo que buscamos (5)
x = math.floor(x); // Redondeamos inferiormente, quedándonos sólo con la parte entera

// Número al azar entre 0 y 5 (no incluido)
//const x = Math.floor(Math.random() * 5);
// Equivalente al anterior
//const x = ~~(Math.random() * 5);

/*
for (let x = 0; x <= 10; x++){
    console.log(Math.random())
}
*/
    
// Logaritmos

Math.log(2);    // 0.6931471805599453
Math.log10(2);  // 0.3010299956639812
Math.log2(2);   // 1
Math.log1p(2);  // 1.0986122886681096

// Metodos de redondeo
// Redondeo natural, el más cercano
Math.round(3.75);           // 4
Math.round(3.25);           // 3

// Redondeo superior (el más alto)
Math.ceil(3.75);            // 4
Math.ceil(3.25);            // 4

// Redondeo inferior (el más bajo)
Math.floor(3.75);           // 3
Math.floor(3.25);           // 3

// Redondeo con precisión
Math.round(3.123456789);    // 3
Math.fround(3.123456789);   // 3.1234567165374756

// Truncado (sólo parte entera)
Math.trunc(3.75);           // 3
Math.round(-3.75);          // -4
Math.trunc(-3.75);          // -3

// Metodos trigonometricos
Math.sin(x)	        //Seno de x
Math.asin(x)	    //Arcoseno de x
Math.sinh(x) 	    //Seno hiperbólico de x
Math.asinh(x) 	    //Arcoseno hiperbólico de x
Math.cos(x)	        //Coseno de x
Math.acos(x)	    //Arcocoseno de x
Math.cosh(x) 	    //Coseno hiperbólico de x
Math.acosh(x) 	    //Arcocoseno hiperbólico de x
Math.tan(x)	        //Tangente de x
Math.atan(x)	    //Arcotangente de x
Math.tanh(x) 	    //Tangente hiperbólica de x
Math.atanh(x) 	    //Arcotangente hiperbólica de x
Math.atan2(x, y)	//Arcotangente del conciente de x/y
Math.hypot(a, b) 	//Devuelve la raíz cuadrada de a2 + b2 + ...