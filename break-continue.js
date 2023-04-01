let c = 0;

// break rompe el bucle cuando llega a un valor determinado
//while (c < 10){
//    c++;
//    if(c === 5){
//        console.log('Termina el bucle');
//        break;
//    }
//    console.log(c);
//}

// continue salta a la siguiente linea cuando llega al valor determinado
while (c < 10){
    c++;
    if(c === 5){
        console.log('Salte a la siguiente linea');
        continue;
    }
    console.log(c);
}