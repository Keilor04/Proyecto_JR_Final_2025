console.log(`Funcionando Archivo: Servicios`);

document.addEventListener('DOMContentLoaded', (e) => {
  Mostrar_Articulos()
});

function Mostrar_Articulos() {
  let Contenedor_IdArticulos = document.getElementById('Articulos'); //gi ls

  Contenedor_IdArticulos.innerHTML
    = `
        
        <div>
        <h1 class ="text-center">Servicios</h1>
        <div class="content-center text-center m-3 ">
                    <div class="border-top m-3">
                        <h3>Planeamiento</h3>
                        <p class = "text-justify">En Esfera Construcciones es fundamental garantizar el éxito de cada proyecto; por lo cual
                            desde la fase inicial, nos enfocamos en definir objetivos claros, establecer cronogramas
                            realistas y gestionar recursos de manera eficiente, un adecuado planeamiento permite
                            minimizar riesgos, optimizar costos y asegurar la calidad y el cumplimiento de plazos en
                            cada uno de nuestros proyectos</p>
                            <img class="w-50 img-thumbnail mb-3" src="/Assets/Img01_seccion02.png" alt="">
                    </div>
                    <div class=" border-top m-3">
                        <h3>Arquitectura e Ingeniería</h3>
                        <p class = "text-justify">En Esfera Construcciones, combinamos la creatividad de la arquitectura con la precisión de la
                            ingeniería para ofrecer soluciones integrales y de alta calidad para cada uno de nuestros
                            clientes, nuestros profesionales trabajan de manera colaborativa para diseñar y ejecutiva
                            para poder desarrollar proyectos innovadores, funcionales y sostenibles.</p>
                            <img class="w-50 img-thumbnail mb-3" src="/Assets/Img02_seccion02.png" alt="">
                        </div>
                    <div class="border-top m-3">
                        <h3>Construcción</h3>
                        <p class = "text-justify">En Esfera Construcciones, nos especializamos en la ejecución de proyectos de construcción con
                            estándares del más alto nivel para cumplir con los objetivos establecidos en cada uno de
                            nuestros proyectos.</p>
                            <img class="w-50 img-thumbnail mb-3" src="/Assets/Img03_seccion02.png" alt="">
                        </div>
                   <div class="border-top m-3">
                        <h3>Inversiones inmobiliarias</h3>
                        <p class = "text-justify">En esfera construcciones, estamos comprometidos con sus proyectos, por lo cual nos
                            especializamos en identificar oportunidades rentables, que
                            combinan calidad, ubicación estratégica y sostenibilidad.</p>
                            <img class="w-50 img-thumbnail mb-3" src="/Assets/Img04_seccion02.png" alt="">
                        </div>
                </div>
            </div>
`;

}