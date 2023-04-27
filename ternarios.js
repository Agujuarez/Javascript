//let n = 8;
let v = 'F'

let r = (v === 'a' || v === 'A') ? `${v} es VOCAL`
        :(v === 'e' || v === 'E') ? `${v} es VOCAL`
        :(v === 'i' || v === 'I') ? `${v} es VOCAL`
        :(v === 'o' || v === 'O') ? `${v} es VOCAL`
        :(v === 'u' || v === 'U') ? `${v} es VOCAL`
        :`${v} no es VOCAL`; 
//let r = (n > 0) ? 'Es Positivo' : 'Es Negativo';

console.log(r);