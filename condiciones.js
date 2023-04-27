// Operadores Condicionales o Logicos
// if(true){
//    console.log('Se cumple la condición');

//} else {
 //   console.log('No se cumple la condición');
//}

let n = 78, printe = '';

if(n !== 0){
    if(n > 0){
        if(n % 2 === 0){
            print = `El número ${n} es PAR POSITIVO`;
        }
        else {
            print = `El número ${n} es IMPAR POSITIVO`;
        }
    }

    else {
        if(n > 0){
            if(n % 2 === 0){
                print = `El número ${n} es PAR NEGATIVO`;
            }
            else {
                print = `El número ${n} es IMPAR NEGATIVO`;
            }
        }

    } 

}

else {
    print = `El número ${n} es NEUTRO`;
}

console.log(print);
