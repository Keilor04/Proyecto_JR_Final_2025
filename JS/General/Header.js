
import { nombrePagina } from '../Datos/ConsultaDatos.js'



//aela
document.addEventListener('DOMContentLoaded', (e) => {

    Mostrar_Footer()

});




function Mostrar_Footer() {
    let Contenedor_IdHeader = document.getElementById('Header'); //gi ls
    let Nombreempresa = "Esfera Construcciones";

    Contenedor_IdHeader.innerHTML
        = `

   
   <div class="container border-radius-10">
        <p class="h2 mb-2 text-center">
        LÍDERES EN CALIDAD DE CONSTRUCCIÓN E INFRAESTRUCTURA
           <img src="Assets/Datosempresa.png" class="w-100" alt="">  
        </p>
        <p class="h4 lead text-center">  Destacamos por la innovación, sostenibilidad y cumplimiento de los más altos estándares globales en
                    diseño y ejecución de proyectos </p>
    </div>
            
`;
}