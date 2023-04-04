// Bases

// Base binaria: 0, 1 (Base 2)
// Base octal: 0, 1, 2, 3, 4, 5, 6, 7 (Base 8)
// Base decimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (Base 10)
// Base hexadecimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F (Base 16)

// Convertir a Decimal
Number.parseInt("11101", 2);    // 11101 en binario, es 29 en decimal
Number.parseInt("31", 8);       // 31 en octal, es 25 en decimal
Number.parseInt("FF", 16);      // FF en hexadecimal, es 255 en decimal

0b11101;   // 29
0o31;      // 25
0xFF;      // 255

// Convertir desde decimal
(16).toString();        // "16"     (lo convierte a string)
(42.5).toString();      // "42.5"   (lo convierte a string)
(26).toString(2);       // "11010"  (26 en decimal, es 11010 en binario)
(80).toString(8);       // "120"    (80 en decimal, es 120 en octal)
(245123).toString(16);  // "3bd83"  (245123 en decimal, es 3bd83 en hexadecimal)