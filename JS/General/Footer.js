console.log('Archivo: Footer');
//aela
document.addEventListener('DOMContentLoaded', (e) => {

    Mostrar_Footer()

});

function Mostrar_Footer() {
    let Contenedor_IdFooter = document.getElementById('IdFooter'); //gi ls

    Contenedor_IdFooter.innerHTML
        = `

    <!-- Inicio: footer-informacion    -->
        <div class="container">
            <div class="row">
                <!-- Inicio: Contenedor 1  -->
               <!-- Fin: Contenedor 1 -->
                <div class="col-md-6 col-sm-6 text-center align-content-center">
                          <h3  class="text-muted">Socios comerciales</h3>
                          <img src="Assets/Img02_footer.png" alt="" class = "w-75">
                </div>
                <!-- Fin: footer-mensaje -->

                <!-- Inicio: Contenedor 2 5 columnas  -->

                <div class="col-md-5 col-sm-6">

                    <!-- Fin: Contenedor 2 -->

                 <!-- Inicio: Contenedor 1 12 columnas  -->
                 <div class="col-md-12 col-sm-12">
                 <h3 class="text-muted text-center">Derechos de Autor</h3> 
                 <br><a href="./Inicio.html"><img src="Assets/Logo empresa.png" alt=""></a>
            </div>
            </div>
                </div>
                <!-- Inicio: Contenedor 3 2 columnas  -->
                <div class="col-md-12 col-sm-12 iconos mt-3 mb-3 img-fluid">
                    <i class="fab fa-facebook-f m-2"></i>
                    <i class="fab fa-instagram m-2"></i>
                    <i class="fab fa-twitter m-2"></i>
                    <i class="fab fa-youtube m-2"></i>
                    <!-- Fin: Contenedor 3 -->
                </div>
            <!-- Fin: footer-mensaje -->

        </div>
`;

}