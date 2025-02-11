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


//Paso 01: Se define una constante llamada API2 con el enlace URL del API 
const Api2 = "https://rickandmortyapi.com/api/character"

//Paso 02: Se crea un array llamado DatosFIltrados2 para almacenar los datos filtrados
//Se define la variable contenedor2
let DatosFiltrados2
let contenedor2

//Se inicializan las variables, DatosFiltrados2 como un array se inicia vacio 
DatosFiltrados2 = [];
//se inicializa la variable contenedor2, misma que es igual a document.getElementById("tbody2")
//del archivo API_Listado_Clientes.html
contenedor2 = document.getElementById("tbody2");


//Paso 03: Se usa addEventListener para que se ejecute la función cuando el documento esté cargado
document.addEventListener("DOMContentLoaded", function () {
    consultarDatos2() //Cuando trabajamos con API se debe llamar a la función consultarDatos2

});

//Paso 04: Esta función se crea una sola vez para un API 
function consultarDatos2() {

    //Se ejecuta la función fetch.get para obtener los datos de la API
    //Se agrega la función API2 para obtener los datos del enlace de la API
    fetch(Api2)
        .then(response => response.json())
        .then(result => {
            // custom error
            //Se agrega un console.log para mostrar los datos en la consola
            //se define result.results para que se muestren los datos de la API 
            //que se encuentran en el apartado results del API 
            console.log(result.results);
            //Se agrega DatosFiltrados2 sea igual a result.results para que se muestren los datos 
            //en la página web (html)
            DatosFiltrados2 = result.results;
            //Paso 06:Se hace un llamado a la función Mostrar_CampoTabla2 
            //para que se muestren los datos en la página web (html)
            Mostrar_CampoTabla2()
        })
        .catch(error => {
            // common error
            return null;
        });
}

//Para pintar la tabla en el HTML 

//Paso 05: Se crea la función Mostar_CampoTabla2 para que se muestren los datos en la página web
function Mostrar_CampoTabla2() {
    //Se crea la variable html para almacenar los datos de la API
    let html

    html = ""; //Se inicializa la variable html y se deja vacia

    //Se define la funcion DatosFiltrados2.forEach para que se analice en cada uno 
    // de los elementos del array DatosFiltrados2
     
    DatosFiltrados2.forEach(element => {
        console.log(element);

        //Se agrega += para que se muestren todos los elementos del array (DatosFiltrados2
        //Se crea un tr para que se agreguen los datos del API DatosFiltrados2
        //Se agrega la propiedad img al 2 td para agregar la información de la imagen de cada elemento
        //que se encuentra contenida en la propiedad image del API
        html += `<tr>
        <td>${element.name}</td>
        <td><img src="${element.image}"alt=""></td>   
                </tr>`
    });
//Se da la instrucción de insertar en el html fuera de la función for each para que no se sobreescriba
//la información de la tabla y en su lugar se agreguen todos los datos del API en la tabla y se muestren
    contenedor2.innerHTML = html;

}