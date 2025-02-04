
console.log(`Funcionando Archivo: Practica_Calculadora`);

function enviarDatos() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;


    //Mostrar se hace con: 
    //Alert, Console log o Inner
    //cl 
    console.log('Mostrar Nombre:', nombre);
    console.log(`Mostrar Edad:`, edad);
    alert(`Nombre: ${nombre} Edad: ${edad}`);
}

function realizarSuma() {
    //Por control de calidad se usa la consola, luego se quita al momento de realizar entregar la página web
    console.log(`Funcionando realizarSuma`)

    let numero1
    let numero2

    //con el comando gi se puede obtener el valor de un input de getelementbyid
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;

    console.log(numero1);
    console.log(numero2);

    let resultado;

    //La funcion parseInt convierte un dato string a un entero

    resultado = parseInt(numero1) + parseInt(numero2);

    console.log(suma)
//innertext es para mostrar el resultado en la pagina web
    document.getElementById("resultado").innerHTML = resultado;

}

