console.log('Funcionando Archivo: API_Listado_Clientes');

const Api_Usuarios = "https://jsonplaceholder.typicode.com/users"

// Datos locales simulando la API
let Datos_Locales = [
     
];

//Se define la variable a fuera de la función para que sea global y se pueda reutilizar en varias funciones


//Se crea un array para almacenar los datos filtrados
let DatosFiltrados = [];

let contenedor

contenedor = document.getElementById("tbody");

//Se iguala la variable DatosFiltrados a Datos_Locales para que se muestren todos los datos
DatosFiltrados = Datos_Locales;


//Se inicializa la variable 
//Se usa addEventListener para que se ejecute la función cuando el documento esté cargado
document.addEventListener("DOMContentLoaded", function () {
consultarDatos()
consultarAPIClientes()

});

function consultarDatos() {

    //Se ejecuta la función fetch.get para obtener los datos de la API
    //Se agrega la función API_Usuarios para obtener los datos de la API
    fetch(Api_Usuarios)
        .then(response => response.json())
        .then(result => {
            // custom error
            //Se agrega un console.log para mostrar los datos en la consola
            console.log(result);
        })
        .catch(error => {
            // common error
            return null;
        });
}

//consultarAPIClientes 
//Puntos Extras 8:25 pm 10-02-2025

function consultarAPIClientes() {

    //Se ejecuta la función fetch.get para obtener los datos de la API
    //Se agrega la función API_Usuarios para obtener los datos de la API
    fetch(Api_Usuarios)
        .then(response => response.json())
        .then(result => {
            // custom error
            //Se agrega un console.log para mostrar los datos en la consola
            console.log(result);
        })
        .catch(error => {
            // common error
            return null;
        });
}