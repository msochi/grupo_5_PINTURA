function select (){
       let proveedores2= document.getElementById('id_proveedor')
    
   
          
    fetch("cargaProducto/buscar/"+ proveedores2.value, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }           
      })
      .then(function(response) {
        return response.json();
    })
      .then(function(preference) { 
          var listaMarcas = document.getElementById('id_marca')
          console.log(listaMarcas.options.length)
          for(let j=0; j<listaMarcas.length;j++){
          console.log(j)
          console.log(listaMarcas.options[j])
            listaMarcas.options.value.remove(j)
          }
          console.log(listaMarcas)
         // var selectobject = document.getElementById("mySelect");
          //for (var i=0; i<selectobject.length; i++) {
            //  if (selectobject.options[i].value == 'A')
              //    selectobject.remove(i);
          //}
          //listaMarcas.remove()
        console.log(preference);
        
      });
    }
