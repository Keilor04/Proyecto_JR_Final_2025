
console.log(`Funcionando Archivo: Practica_Calculadora`);

 function enviarDatos() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;


    //Mostrar se hace con: 
//Alert, Console log o Inner
//cl 
console.log('Mostrar Nombre:',nombre);
console.log(`Mostrar Edad:`, edad);
alert (`Nombre: ${nombre} Edad: ${edad}`);
}

 function realizarSuma() {
    //Por control de calidad se usa la consola, luego se quita al momento de realizar entregar la página web
    console.log(`Funcionando realizarSuma`)


    //con el comando gi se puede obtener el valor de un input de getelementbyid
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value; 

let resultado = numero1 + numero2;

console.log(resultado); 



 }

