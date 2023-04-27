// console.log(Date()); // Fecha y Hora actual


let fecha = new Date();
console.log(fecha);
console.log(fecha.getDay()); // de 0 a 6 (D a S)
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getUTCDate());
console.log(fecha.getMilliseconds());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getUTCHours());
console.log(Date.now()); // Timestamp (tiempo Unix)

let cumpleAgu = new Date(1983,3,8);
console.log(cumpleAgu);