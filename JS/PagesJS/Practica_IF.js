console.log(`Funcionando Archivo: Practica_IF`);

// Información para If que significa si 

function verificarEdad() {
    //Se definen las variables del formulario
    let edad
    let pais
    //Se asignan los valores del formulario a las variables 
    edad = document.getElementById("edad").value;
    pais = document.getElementById("pais").value;
    //Se muestran los valores del formulario a las variables 
    console.log(edad);
    console.log(pais);

    //se usa el if para que se cumpla la condición de que si la edad 
    // es mayor o igual a 18 se muestre un mensaje de que es 
    // mayor de edad y si no se cumple la condición se muestre 
    // un mensaje de que no es mayor de edad
    if (edad >= 18) {
        alert(`Eres mayor de edad en ${pais}`);

    } else {
        alert(`No eres mayor de edad en ${pais}`);
    }

}

function verificarParImpar() {
    let numero3

    numero3 = document.getElementById("numero3").value;

    let numeroconvertido = parseInt(numero3);

    console.log(numeroconvertido);

    // % es el operador de módulo, que devuelve el resto de una división
    // si el número es par, el resto de dividirlo por 2 es 0

    if (numeroconvertido % 2 == 0) {
        document.getElementById("mensajeParImpar").innerHTML = `El número ${numeroconvertido} es par`;


    } else {
        document.getElementById("mensajeParImpar").innerHTML = `El número ${numeroconvertido} es impar`;

    }
}

function evaluarNota() {
    let nota

    nota = document.getElementById("nota").value;

    let numeroconvertido = parseInt(nota);
    console.log(numeroconvertido);

    if (numeroconvertido >= 90) {
        document.getElementById("mensajeNota").innerHTML = `Aprobado con ${numeroconvertido}, excelente nota`;
    }

    else if (numeroconvertido >= 70) {
        document.getElementById("mensajeNota").innerHTML = `Aprobado con ${numeroconvertido}`;
    }

    else {
        document.getElementById("mensajeNota").innerHTML = `Reprobado con ${numeroconvertido}`;
    }
}

function calcularDescuento() {

    let precio
    let descuento
    let total

    precio = document.getElementById("monto").value;
    descuento = 10;

    let precioconvertido = parseFloat(precio);

    console.log(precioconvertido);
    console.log(descuento);

    total = precioconvertido - (precioconvertido * descuento / 100);

    document.getElementById("mensajeDescuento").innerHTML = `El precio con descuento es de ${total}`;

}

function verificarMayorMenor() {
 
    let verificarEdad

    verificarEdad = document.getElementById("edadSimple").value;

    let datoconvertido = parseInt(verificarEdad);
    console.log(datoconvertido);

    if (datoconvertido >= 18) {
        document.getElementById("mensajeEdadSimple").innerHTML = `Eres mayor de edad, tienes ${datoconvertido} años`;
    }
    else {
        document.getElementById("mensajeEdadSimple").innerHTML = `Eres menor de edad, tienes ${datoconvertido} años`;
    }
}