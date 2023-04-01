// For repite en bucle hasta (variable ; limite ; operacion)

let n = 5;
for (let i = 0; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}

let texts = 'JavaScript';
let estudiantes = ['Alex', 'Roel', 'Juan', 'Pedro'];

// for In saca los indices, for Of saca los datos
for (let dato of estudiantes){
    console.log(`Hola ${dato}`);
}
