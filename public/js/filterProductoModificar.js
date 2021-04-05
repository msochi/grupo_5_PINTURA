function select (){
    let proveedores2= document.getElementById('id_proveedor')

    fetch("/admin/buscar/"+ proveedores2.value, {
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
          
          while (listaMarcas.options.length) {
            listaMarcas.remove(0);
          }

          for (let i = 0; i < marcas.length; i++) {
            let marca = new Option(marcas[i].marca, marcas[i].id);
            listaMarcas.options.add(marca);
          }

         
      });
    }

function familia (){
  let familia= document.getElementById('id_familia')

  fetch("/admin/buscar/familia/"+ familia.value, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          }           
    })
    .then(function(response) {
      return response.json();
  })
    .then(function(subfamilias) { 
        console.log(subfamilias);
        var listaSubfamilia = document.getElementById('id_subfamilia')
        
        while (listaSubfamilia.options.length) {
          listaSubfamilia.remove(0);
        }

        for (let i = 0; i < subfamilias.length; i++) {
          console.log(subfamilias[i].subfamilia)
          let newList = new Option(subfamilias[i].subfamilia, subfamilias[i].id);
          listaSubfamilia.options.add(newList);
        }

        
    });
  }
  
function tipo (){
  let tipo= document.getElementById('id_tipo')

  fetch("/admin/buscar/tipo/"+ tipo.value, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          }           
    })
    .then(function(response) {
      return response.json();
  })
    .then(function(subtipos) { 
        console.log(subtipos);
        var listaSubtipos = document.getElementById('id_subtipo')
        
        while (listaSubtipos.options.length) {
          listaSubtipos.remove(0);
        }

        for (let i = 0; i < subtipos.length; i++) {
          console.log(subtipos[i].subtipo)
          let newList = new Option(subtipos[i].subtipo, subtipos[i].id);
          listaSubtipos.options.add(newList);
        }

        
    });
 }