window.addEventListener ("load",function(){
    let formulario = document.querySelector("form.registro");
  
    
    
    formulario.addEventListener("submit", function(e){
        let aceptar= confirm("Estas por crear tu cuenta, ¿tus datos son correctos?");
        
       let errores =[];

        let email =document.querySelector ("input.email")
        if (!email.value.includes("@"))  {
         errores.push("*Tu dirección de mail debe contener @. Ejemplo: juan@tumail.com");
        };    

        let campoNombre = document.querySelector ("input.name")
            if( campoNombre.value == "") {
            errores.push("*Tenes que ingresar un nombre válido.");
            }
            else if(campoNombre.value.length < 2) {
            errores.push("*El nombre debe tener al menos 3 caracteres.");
            };
        let campoApellido = document.querySelector ("input.last_name")
            if( campoApellido.value == "") {
            errores.push("*Tenes que ingresar tu apellido.");
            }
        let campoDni = document.querySelector ("input.dni")
            if( campoDni.value == "") {
            errores.push ("*Tenes que ingresarun DNI válido con 8 números y sin puntos.");
            }
        let campoDireccion = document.querySelector ("input.street")
            if( campoDireccion.value == "") {
            errores.push("*Tenes que ingresar una dirección válida.");
            }
            else if(campoDireccion.value.length < 5) {
            errores.push("*Tenes que ingresar una dirección válida.");
            }
        let campoTelefono = document.querySelector ("input.phone")
            if( campoTelefono.value == "") {
            errores.push("*Tenes que ingresar un número de teléfono válido con su código de area.");
            }
            else if(campoTelefono.value.length < 5) {
            errores.push("*Tenes que ingresar un número de teléfono válido con su código de area.");
            }

            if (aceptar == true && errores.lenght > 0){}
            e.preventDefault();

            let ulErrores = document.querySelector("div.errores ul");
                for (let i= 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>"+ errores[i] +"</li>"
                }
            if (aceptar == true && errores.length<=0) {
                formulario.submit()
            }    
    })
      
})       

   



   
    




// Variables globales
//var formulario = document.getElementById('registro');
//var nombre = document.getElementById('name');
//var email = document.getElementById('email');
//var dni = document.getElementById('dni');
//var crearCuenta = document.getElementById('crearCuenta');


// Evento 1
//crearCuenta.addEventListener('click',function(event){ 
  //  event.preventDefault();
   //comprobacion();  
//})


// Evento 2
//email.addEventListener("change", function(event) {
  //  alert("Tu direción de email tiene que contener un @");
//})

// Evento 3
//nombre.addEventListener("change", function(event) {
  //  alert("Tenes que ingresar tu verdadero nombre");
//})

//dni.addEventListener("change", function(event) {
  //  alert("Tenes que ingresar un número de DNI válido");
//})


//function comprobacion(){

  //  if ( (nombre.value=="") || (email.value=="") || (!email.value.includes("@")) || (dni.value=="")) {
    //    alert("Complete los campos correctamente");
    //}
    //else{
      //  formulario.submit(); 
   // }

//}
       
