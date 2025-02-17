console.log(`Funcionando Archivo: Proyectos`);

document.addEventListener('DOMContentLoaded', (e) => {
    Mostrar_Proyectos()
    Mostrar_Proyectos2()
});

function Mostrar_Proyectos() {
    let Contenedor_Idproyectos = document.getElementById('Proyectos'); //gi ls

    Contenedor_Idproyectos.innerHTML
        = `
      
        <h1 class ="text-center">Proyecto</h1>
        <div class="content-center text-center m-3 ">
                    <div class="border-top m-3">
                        <h3>Residencial Sunset Village</h3>
                          <p>Proyecto residencial exclusivo de Esfera Construcciones, clasificado con 5 estrellas,
                            diseñado para ofrecer un estilo de vida moderno y cómodo, con amplias áreas verdes y
                            excelentes acabados, en una ubicación privilegiada.</p> 
</div>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="card-img-top img-fluid" src="./Assets/Img_residencial.png" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="card-img-top img-fluid" src="./Assets/Img_residencial02.png" alt="Second slide">
    </div>
 <div class="carousel-item">
      <img class="card-img-top img-fluid" src="./Assets/Img_residencial03.png" alt="Third slide">
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

function Mostrar_Proyectos2() {
    let Contenedor_Idproyectos2 = document.getElementById('Proyectos2'); //gi ls

    Contenedor_Idproyectos2.innerHTML
        = `
                       
        <h1 class ="text-center">Proyecto</h1>
        <div class="content-center text-center m-3 ">
                    <div class="border-top m-3">
                       <h3>Condominio horizontal vertical Los Maderos</h3>
                        <p>Es un proyecto con un desarrollo sostenible de Esfera Construcciones, que combina la
                            privacidad de un condominio horizontal con la comodidad de un diseño vertical, ofreciendo a
                            sus habitantes espacios modernos y funcionales en un entorno tranquilo y accesible.</p>

                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./Assets/Img_condominio.png" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./Assets/Img_condominio02.png" alt="Second slide">
    </div>
 <div class="carousel-item">
      <img class="d-block w-100" src="./Assets/Img_condominio03.png" alt="Third slide">
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
                </div>
            
`;

}