console.log(`Funcionando Archivo: Inicio`);



document.addEventListener('DOMContentLoaded', (e) => {

    Mostrar_Testimonios()
    Mostrar_Articulos()

});




function Mostrar_Testimonios() {
    let Contenedor_IdFooter = document.getElementById('Testimonios'); //gi ls

    Contenedor_IdFooter.innerHTML
        = `
        <div class="container">
                <div class="row">
                    <!-- Inicio: Contenedor 1  -->
                    <div class="col-md-12 col-sm-12 ">
                        <img src="Assets/img_cabecera_01.png" class="w-100 center mt-3 mb-3" alt="">
                    </div>
                    <!-- Fin: Contenedor 1 -->

                    <!-- Inicio: Contenedor 2  -->
                    <div class="col-md-12 col-sm-12 mt-3 mb-3">
                        <!-- b4-jumbotron-default -->
                        <div class="">
                            <h3 class="lead text-center"><strong>Acerca de Nosotros</strong></h3>
                            <p class="lead mt-5 text-justify">
                            En un mercado en desarrollo, nos destacamos por ofrecer soluciones integrales en
                                construcción, combinando innovación, calidad y compromiso en cada proyecto; contamos con
                                un equipo altamente capacitado, nos aseguramos de cumplir con los más altos estándares,
                                garantizando resultados eficientes y satisfactorios para nuestros clientes.
                            </p>
                            <a class="btn btn-link btn-lg mt-2 d-flex justify-content-center" href="Jumbo action link" role="button">Más información</a>


                        </div>
                    </div>
                    <!-- Fin: Contenedor  2-->
                </div>
            </div>

`;

}

function Mostrar_Articulos() {
    let Contenedor_IdFooter = document.getElementById('Articulos'); //gi ls

    Contenedor_IdFooter.innerHTML
        = `
        <h1 class ="text-center">Servicios</h1>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner text-center content-center">
    <div class="carousel-item active">
      <img class="w-25 img-thumbnail" src="/Assets/Img01_seccion02.png" alt="First slide">
       <h3>Planeamiento</h3>
       <p>Planeación de cada una de las etapas sus proyectos de forma integral</p>
       <a href="Servicios.HTML">Más información<i class="fas fa-angle-double-right"></i></a>
    </div>
    <div class="carousel-item">
      <img class="w-25 img-thumbnail" src="/Assets/Img02_seccion02.png" alt="Second slide">
      <h3>Arquitectura e Ingeniería</h3>
       <p>Profesionales comprometidos para cumplir sus proyectos en alcance, costo y plazo, todo acorde a sus expectativas</p>
       <a href="Servicios.HTML">Más información <i class="fas fa-angle-double-right"></i></a>
    </div>
    <div class="carousel-item">
      <img class="w-25 img-thumbnail" src="/Assets/Img03_seccion02.png" alt="Third slide">
      <h3>Construcción</h3>
      <p>Desarrollo constructivo de sus proyectos tanto de infraestructura civil como vial bajo estándares de calidad internacional</p>
      <a href="Servicios.HTML">Más información <i class="fas fa-angle-double-right"></i></a>
    </div>
     <div class="carousel-item">
      <img class="w-25 img-thumbnail" src="/Assets/Img04_seccion02.png" alt="Third slide">
       <h3>Inversiones inmobiliarias</h3>
       <p>Comprometidos con la gestión eficiente de sus recursos en proyectos de alta demanda en el mercado local e internacional</p>
       <a href="Servicios.HTML">Más información <i class="fas fa-angle-double-right"></i></a>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
`;

}