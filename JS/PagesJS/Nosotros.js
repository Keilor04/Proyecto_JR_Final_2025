console.log(`Funcionando Archivo: Nosotros`);
console.log(`Funcionando Archivo: Clientes`);

document.addEventListener('DOMContentLoaded', (e) => {
    Mostrar_Nosotros()
    Mostrar_Clientes()
});

function Mostrar_Nosotros() {
    let Contenedor_IdNosotros = document.getElementById('Nosotros'); //gi ls

    Contenedor_IdNosotros.innerHTML
        = `
        <h3 class="lead text-center"><strong>Nosotros</strong></h3>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="Assets/Img_nosotros.png" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="Assets/Img_nosotros03.png" alt="Second slide">
    </div>
     <div class="carousel-item">
      <img class="d-block w-100" src="Assets/Registro.png" alt="Third slide">
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
function Mostrar_Clientes() {
  let Contenedor_IdClientes = document.getElementById('Clientes'); //gi ls

  Contenedor_IdClientes.innerHTML
      = `
      <h3 class="lead text-center"><strong>Clientes</strong></h3>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img class="d-block w-100" src="Assets/Clientes.png" alt="First slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="Assets/Clientes02.png" alt="Second slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="Assets/Clientes03.png" alt="Third slide">
  </div>
   <div class="carousel-item">
    <img class="d-block w-100" src="Assets/Clientes04.png" alt="Fourth slide">
  </div>
  <div class="carousel-item">
    <img class="d-block w-100" src="Assets/Clientes05.png" alt="Five slide">
  </div>
   <div class="carousel-item">
    <img class="d-block w-100" src="Assets/Clientes06.png" alt="Six slide">
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