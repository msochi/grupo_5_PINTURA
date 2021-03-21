// Variables globales
var formulario = document.getElementById('registro');
var nombre = document.getElementById('name');
var email = document.getElementById('email');
var dni = document.getElementById('dni');
var crearCuenta = document.getElementById('crearCuenta');


// Evento 1
crearCuenta.addEventListener('click',function(event){ 
    event.preventDefault();
   comprobacion();  
})


// Evento 2
email.addEventListener("change", function(event) {
    alert("Tu direción de email tiene que contener un @");
})

// Evento 3
nombre.addEventListener("change", function(event) {
    alert("Tenes que ingresar tu verdadero nombre");
})

dni.addEventListener("change", function(event) {
    alert("Tenes que ingresar un número de DNI válido");
})


function comprobacion(){

    if ( (nombre.value=="") || (email.value=="") || (!email.value.includes("@")) || (dni.value=="")) {
        alert("Complete los campos correctamente");
    }
    else{
        formulario.submit(); 
    }

}

