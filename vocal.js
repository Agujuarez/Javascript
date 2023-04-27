let v = 'I', print = '';
// || hace que sea verdadero si cumple al menos una condición
if (v === 'a' || v === 'A'){
    print = `${v} es VOCAL`;
} else if (v === 'e' || v === 'E'){
    print = `${v} es VOCAL`; 
} else if (v === 'i' || v === 'I'){
    print = `${v} es VOCAL`; 
}  else if (v === 'o' || v === 'O'){
    print = `${v} es VOCAL`; 
} else if (v === 'u' || v === 'U'){
    print = `${v} es VOCAL`; 
} else{
    print = `${v} no es VOCAL`;
}

console.log(print);