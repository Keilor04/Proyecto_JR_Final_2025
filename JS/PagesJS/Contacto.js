
console.log(`Funcionando Archivo: Contacto`);

function Confirmardatos() {
    let Nombre 
    let PrimerApellido
    let SegundoApellido
    let Fechanacimiento
    let Edad
    let resultado

    Nombre = "";
    PrimerApellido = "";
    SegundoApellido = "";
    Fechanacimiento = "";
    Edad = "";



    Nombre = document.getElementById("Nombre").value;
    PrimerApellido = document.getElementById("Primer Apellido").value;
    SegundoApellido = document.getElementById("Segundo Apellido").value;
    Fechanacimiento = document.getElementById("Fecha").value;
    Edad = document.getElementById("Edad").value;
    
    resultado = `Los datos registrados son: <br>
    Nombre: ${Nombre} <br>
    Primer Apellido: ${PrimerApellido}<br> 
    Segundo Apellido: ${SegundoApellido} <br>
    Fecha de nacimiento: ${Fechanacimiento} <br>
    Edad: ${Edad}`
    
    console.log(`Registro confirmado: 
Nombre: ${Nombre}
Primer Apellido: ${PrimerApellido}
Segundo Apellido: ${SegundoApellido}
Fecha de nacimiento: ${Fechanacimiento}
Edad: ${Edad}`);

alert(resultado)

document.getElementById("datos").innerHTML = resultado

}



function Confirmardatos2() {
    let Email
    let Contraseña
 

    Email = "";
    Contraseña = "";
    
    Email = document.getElementById("Nombre").value;
    Contraseña = document.getElementById("Primer Apellido").value;
    
    resultado2 = `Los datos registrados son: <br>
    Email: ${Email} <br>
    Contraseña: ${Contraseña}<br>`
    
    console.log(`Registro confirmado: 
Email: ${Email}
Contraseña: ${Contraseña}
`);

document.getElementById("datos2").innerHTML = resultado2

}





 