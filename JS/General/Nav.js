console.log('Archivo: Nav');

import {Datos_LiNav} from '../Datos/ConsultaDatos.js'
//aela
document.addEventListener('DOMContentLoaded', (e) => {
    
    Mostrar_Navbar()
 
    Mostrar_LiNav()
});

function Mostrar_Navbar() {

let Contenedor_IdNav = document.getElementById('IdNav');  //ls //gi

Contenedor_IdNav.innerHTML = 
`
  <a class="navbar-brand" href="/Inicio.html"><img src="/Assets/Logo empresa.png" class ="w-50" alt=""> </a>
      
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0" id="IdLiNav">            
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search">
                <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
`;
}

function Mostrar_LiNav() {
    let Contenedor_IdLiNav = document.getElementById('IdLiNav');  //gi

    let html = ""; // Variable para acumular el HTML

    Datos_LiNav.filter(element => element.Activo).forEach(element => {
        html += `
        <li>
            <a class="text-white m-3" href="${element.Url}">${element.Nombre}</a>
        </li>
        `;
    });
    
   

    Contenedor_IdLiNav.innerHTML = html; // Asignar todo el HTML al final
    

}