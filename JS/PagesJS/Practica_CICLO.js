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
