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

//Se inicializa la variable 
//Se usa addEventListener para que se ejecute la función cuando el documento esté cargado
document.addEventListener("DOMContentLoaded", function () {
consultarDatos() //Cuando trabajamos con API se debe llamar a la función consultarDatos
consultarAPIClientes()
});


//Esta función se crea una sola vez para un API 
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


//Se agrega la función Mostrar_CampoTabla del archivo Practica_Listado_Clientes.js
function Mostrar_CampoTabla() {

    let html

    html = "";
    DatosFiltrados.forEach(element => {
        console.log(element);

        //Se agrega += para que se muestren todos los elementos del array (Datos_Locales
        html += `<tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.email}</td>      
                </tr>`
    });

    contenedor.innerHTML = html;
}



//consultarAPIClientes 
//Puntos Extras 8:25 pm 10-02-2025

function consultarAPIClientes() {

    //Se ejecuta la función fetch.get para obtener los datos de la API
    //Paso 01: Se agrega la función API_Usuarios para obtener los datos de la API
    fetch(Api_Usuarios)
    // Punto 02: Si obtengo una respuesta de la API, la convierto a formato JSON (javascript object notation)
        .then(response => response.json())
        //Paso 03: se muestra el resultado en el html 
        .then(result => {
            // custom error
            //Se agrega un console.log para mostrar los datos en la consola
            console.log(result);
             //Se agrega Datos_Locales sea igual a result para que se muestren los datos en la página web
             DatosFiltrados = result;
                Mostrar_CampoTabla() // Se llama la función Mostrar_CampoTabla para que se muestren los datos en la página web
                //Por motivos que esta 
        })

        //Paso 04: En caso de error, se muestra un mensaje en la consola
        .catch(error => {
            // common error
            return null;
        });
}



//API 2 

const Api2 = "https://rickandmortyapi.com/api/character"

let DatosFiltrados2 = [];

//Se usa addEventListener para que se ejecute la función cuando el documento esté cargado
document.addEventListener("DOMContentLoaded", function () {
    consultarDatos2() //Cuando trabajamos con API se debe llamar a la función consultarDatos2
    
    });

//Esta función se crea una sola vez para un API 
function consultarDatos2() {

    //Se ejecuta la función fetch.get para obtener los datos de la API
    //Se agrega la función API_Usuarios para obtener los datos de la API
    fetch(Api2)
        .then(response => response.json())
        .then(result => {
            // custom error
            //Se agrega un console.log para mostrar los datos en la consola
            console.log(result.results);
        })
        .catch(error => {
            // common error
            return null;
        });
}

