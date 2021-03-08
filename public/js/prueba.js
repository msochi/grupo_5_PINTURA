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
      .then(function(marcas) { 
          console.log(marcas);
          var listaMarcas = document.getElementById('id_marca')
          // console.log(listaMarcas.options.length)

          // var i;
          // for(i=listaMarcas.options.length-1; i>=0; i--)
          //   {
          //     if(listaMarcas.options[i].selected) {
          //       // listaMarcas.remove(i);  
          //       listaMarcas.remove(listaMarcas.selectedIndex);
          //     }
              
          //   }

          while (listaMarcas.options.length) {
            listaMarcas.remove(0);
          }

          // var selectobject = document.getElementById("mySelect");
          // for (var i=0; i<selectobject.length; i++) {
          //     if (selectobject.options[i].value == 'A')
          //         selectobject.remove(i);
          // }

          for (let i = 0; i < marcas.length; i++) {
            let marca = new Option(marcas[i].marca, marcas[i].id);
            listaMarcas.options.add(marca);
          }

          // for (let j=0; j<listaMarcas.options.length; j++){
          //   console.log(j)
          //   console.log(listaMarcas.options[j].value)
          //   // listaMarcas.remove(j)
          //   // for (let x = 0; x<marcas.length; x++) {
          //     // if (listaMarcas.options[j].value != marcas[x].marca) {
          //   listaMarcas.options.remove(j);
          //     // }
          //   // }
            
            
          //}
          // console.log(listaMarcas)
         // var selectobject = document.getElementById("mySelect");
          //for (var i=0; i<selectobject.length; i++) {
            //  if (selectobject.options[i].value == 'A')
              //    selectobject.remove(i);
          //}
          //listaMarcas.remove()
       
        
      });
    }
