const str = 'Programando con Grover';

//const result = str.indexOf('con'); // Devuelve el numero del indice
result = str.includes('con'); 
result = str.slice(1, 4); // trae indice desde X hasta Y
result = str.substring(1, 2); // trae indice desde X hasta Y o infinito
result = str.substr(5, 4); // trae la cantidad de caracteres desde X
result = str.charAt(9); // traer la letra del indice
result = str.repeat(2); // Repite conjunto de caracteres X veces
result = str.split(' '); // Divide el conjunto de str desde X
result = str.startsWith('Pro');
result = str.endsWith('ver');
result = str.search('con');
result = str.toLowerCase(); // convierte a minuscula
result = str.toUpperCase(); // convierte a mayuscula
result = str.replace('Grover', 'Agustin')

const str2 = ' Programando con Grover '
result = str2.trim();
result = str2.trimStart();
result = str2.trimEnd();

console.log(result);