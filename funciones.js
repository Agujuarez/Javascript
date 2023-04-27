/* Funcion Declarada

function estoEsUnaFuncion() {
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
    return 15
}

let retorno = estoEsUnaFuncion()

console.log(retorno)
*/

//Funcion Expresada
function saludar(nombre, edad) {
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`)
}

saludar("Jorge", 7)

//Funcion Anonima

const expresada = function() {
    console.log("función asignada como valor a una variable")
}

expresada()

// Funcion Arrow

const saludo = (nombre) => console.log(`Hola ${nombre}`)
saludo("Irma")

const sumar = (a, b) => a + b

console.log(sumar(8, 9))
//
const varias = () => {
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
}

const numeros = [1, 2 ,3 ,4, 5]

numeros.forEach((el, index) => {
    console.log(`El elemento ${el} esta en la posición ${index}`)
})
    