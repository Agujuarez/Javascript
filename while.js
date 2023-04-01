// Mantiene un bucle infinito, salvo q agreguemos un operador de incremento
let n = 2, c = 0
while (c <= 10) {
    console.log(`${n} x ${c} = ${n * c}`);
    c++;
}

let estudiantes = ['Alex', 'Roel', 'Juan', 'Pedro'];
let texts = 'JavaScript';

let i = 0
while(i < estudiantes.length){
    console.log(estudiantes[i]);
    i++;
}

let s = 0;
do{
    console.log('Hola');
    s++;
}while(s < 5);