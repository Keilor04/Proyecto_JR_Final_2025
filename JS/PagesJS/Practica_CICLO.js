console.log(`Funcionando Archivo: Practica_CICLO`);
let personas = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];

//Trabajo en clase del 05-02-2025

console.log(personas[4])

console.log(personas[1].nombre)

//Información de ciclos 


//Foreach significa que es por cada uno de los objetos del array 
//Reemplace el array=personas y reemplazarlo 
//Element es el nombre de la variable que se le asigna a cada objeto del array
//Con la propiedad index se puede saber la posición del objeto en el array 
personas.forEach(element => {
    console.log(element);
});



let clientes = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: false },
    { nombre: "Carlos", edad: 30, activo: true },
    { nombre: "Laura", edad: 16, activo: true },
    { nombre: "Pedro", edad: 40, activo: false }
];

clientes.forEach(element => {
    console.log(element);
});

//Para mostrar nombre y activo de los objetos del array 

clientes.forEach(element => {
    console.log(element.nombre, element.activo);
});

clientes.forEach(element => {
    //Si la condición es verdadera se muestra el nombre y activo del objeto
    // Se usa doble = es una comparación 
    // Se usa triple = es una comparación estricta 
    // Ejemplos: 1 === "1" o 1 ==1 o 1 = 1

    if (element.activo == true) {
        console.log(element.nombre, element.activo);
    }

});

//length es una propiedad que se usa para saber la cantidad de objetos en un array
//Se agrega length con punto luego del nombre del array:
console.log(personas.length)


let buscarnombre

//Se crea la variable x 
//find es para filtrar por una propiedad de un objeto del array
buscarnombre = personas.find(x => x.nombre === "Ana")

console.log(buscarnombre)

let buscaractivo

//Se crea la variable x 
buscaractivo = personas.find(x => x.activo === "true")

console.log(buscaractivo)


//Se crea la funtion filtrar para el input del html 

function filtrar() {

    let valor
    valor = document.getElementById(`Sensitivo`).value;
    console.log(valor)
}

//Ejercicios de la página html 

//Ejercicio 1


function buscarDesdeInput() {
    //Se crea la variable Input1 
    let Input1
    let resultado
    let busqueda

    Input1 = document.getElementById(`buscarNombre`).value;
    resultado = document.getElementById(`resultadoBusqueda`)

    //Para que se busque en el array el dato que el usuario ingreso en el input del html 
    //trim() es para remover los espacios en blanco al inicio y al final de la cadena de texto
    //toUpperCase() es para convertir el texto en mayúsculas

    busqueda = personas.find(x => x.nombre.toUpperCase().trim() === Input1.toUpperCase().trim())

    //Si la condición es verdadera (que existe) se muestra el nombre del objeto en el array
    if (busqueda) {
        resultado.innerHTML = `Nombre: ${busqueda.nombre}`
    }
    else {  //Si la condición es falsa se muestra el siguiente mensaje 
        resultado.innerHTML = `No se encontró el nombre`
    }

}

//Ejercicio 02 

function primeraPersonaActiva() {
    let resultado
    let busqueda

    resultado = document.getElementById(`resultadoActivo`)
    busqueda = personas.find(x => x.activo === true)

if (busqueda) {
    resultado.innerHTML = `Nombre de la primera persona activa: ${busqueda.nombre}`
} else {
    resultado.innerHTML = `No se encontró el nombre de la persona activa`
}


}