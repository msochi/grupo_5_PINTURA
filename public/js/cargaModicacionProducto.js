window.addEventListener ("load",function(){
    let formulario = document.querySelector(".form");
    let formularioBorrar= document.querySelector(".formBorrar");
    
    
    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        let aceptar= confirm("¿LOS DATOS SON CORRECTOS?");
        
       let errores =[];

        let campoSku = document.querySelector ("input.sku")
            if( campoSku.value == "") {
            errores.push("*SKU: Tenes que ingresar un numero de 5 cifras. Ej: 00001");
            }
            else if(campoSku.value.length < 5) {
            errores.push("*SKU: El numero de sku debe tener 5 cifras. Ej: 00015 ");
            };
        let campoPresentacion = document.querySelector ("input.presentacion")
            
            if( campoPresentacion.value == "") {
                console.log("error campo",typeof campoPresentacion.value )
            errores.push("*PRESENTACION: Tenes que ingresar detalles de la presentacion. Ej:2 Litros - 100 CM3 - 3 Unidade");
            console.log("aca va el error", errores)
            }
            else if(campoSku.value.length < 3) {
            errores.push("*PRESENTACION: Tenes que ingresar detalles de la presentacion. Ej: 2 Litros - 100 CM3 - 3 Unidades");
            };
        let campoContenidoNeto = document.querySelector ("input.contenido_neto")
            if( campoContenidoNeto.value == "") {
            errores.push("*CONTENIDO NETO: Tenes que ingresar detalles del contenido Neto. Ej: 5 Litros - 50 grs- 900 CM3" );
            }
            else if(campoContenidoNeto.value.length < 3) {
            errores.push("*CONTENIDO NETO: Tenes que ingresar detalles del contenido Neto. Ej: 5 Litros - 50 grs- 900 CM3");
            };
        let campoColor = document.querySelector ("input.color")
            if( campoColor.value == "") {
                errores.push("*COLOR: Tenes que ingresar detalles del color. Ej: Blanco - Rojo -Azul" );
                }
            else if(campoColor.value.length < 3) {
                errores.push("*COLOR: Tenes que ingresar detalles del color. Ej: Blanco - Rojo -Azu");
                };   
        let campoTiempoEntreManos = document.querySelector ("input.tiempo_entre_manos")
            if( campoTiempoEntreManos.value == "") {
                errores.push("*TIEMPO ENTRE MANOS: Tenes que ingresar el tiempo de espera. Ej: 15 minutos- 1 hora - 1 día" );
                 }
            else if(campoTiempoEntreManos.value.length < 3) {
                errores.push("*TIEMPO ENTRE MANOS: Tenes que ingresar el tiempo de espera. Ej: 15 minutos- 1 hora - 1 día");
                }; 
        let campoBase = document.querySelector ("input.base")
            if( campoBase.value == "") {
                errores.push("*BASE: Tenes que ingresar detalles del tipo de base. Ej: Al agua - Al aceite - Al aguarras" );
                        }
            else if(campoBase.value.length < 3) {
                errores.push("*BASE: Tenes que ingresar detalles del tipo de base. Ej: Al agua - Al aceite - Al aguarras" );
                };   
        let campoRendimiento = document.querySelector ("input.rendimiento")
            if( campoRendimiento.value == "") {
            errores.push("*RENDIMIENTO: Tenes que ingresar detalles del rendimiento. Ejemplo 12 a 16 m2/l por mano");
            }
            else if(campoRendimiento.value.length < 5) {
            errores.push("*RENDIMIENTO: Tenes que ingresar detalles del rendimiento. Ejemplo 12 a 16 m2/l por mano");
            };               
                            
        let campoUsoRecomendado = document.querySelector ("input.uso_recomendado")
            if( campoUsoRecomendado.value == "") {
            errores.push("*USO RECOMENDADO: Tenes que detallar el tipo de uso. Ej: Interior o exterior" );
            }
            else if(campoUsoRecomendado.value.length < 3) {
            errores.push("*USO RECOMENDADO: Tenes que detallar el tipo de uso. Ej: Interior o exterior");
            }; 
        let campoTiempoSecado = document.querySelector ("input.tiempo_de_secado")
            if( campoTiempoSecado.value == "") {
            errores.push("*TIEMPO DE SECADO: Tenes que ingresar detalles tiempo de secado: Ej: 30 minutos- 4 horas");
            }
            else if(campoTiempoSecado.value.length < 5) {
            errores.push("*TIEMPO DE SECADO: Tenes que ingresar detalles tiempo de secado: Ej: 30 minutos- 4 horas");
            };   
        let campoGarantia = document.querySelector ("input.garantia")
            if ((campoGarantia.value == "") || (dataValues.campoGarantia== "")) {
            errores.push("*GARANTIA: Tenes que detallar el periodo de garantía. Ej: 1 año" );
            }
            else if(campoGarantia.value.length < 3) {
            errores.push("*GARANTIA: Tenes que detallar el periodo de garantía. Ej: 1 año" );
            }; 
        let campoImagen = document.querySelector ("input.imagen_producto")
            if( campoImagen.value == "") {
            errores.push("*IMAGEN: Tenes que cargar una imagen" );
            };               

     

        let ulErrores = document.querySelector("div.errores ul");
        console.log(ulErrores)
            for (let i= 0; i < errores.length; i++) {
            ulErrores.innerHTML += "<li>"+ errores[i] +"</li>"+"<br>"
            }
            if (aceptar == true && errores.length<=0) {
                formulario.submit()
            }  
            console.log(errores)
    });

    formularioBorrar.addEventListener("submit", function(e){
        let aceptar2= confirm("ESTAS SEGURO DE QUERER ELIMINAR EL PRODUCTO?");
       
        if (aceptar2 == true){formularioBorrar.submit()} 
        e.preventDefault();
        
    })

    
       
});

