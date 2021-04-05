function select (){
    let provincia2= document.getElementById('id_provincia')

    fetch("crearUsuario/buscar/"+ provincia2.value, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }                 
      })      
      .then(function(response) {
        console.log (response)
        return response.json();
    })
    
      .then(function(localidades) { 
          var listaLocalidades = document.getElementById('id_localidad')
          while (listaLocalidades.options.length) {
            listaLocalidades.remove(0);
            
          }
          for (let i = 0; i < localidades.length; i++) {
            let localidad = new Option(localidades[i].localidad, localidades[i].id);
            listaLocalidades.options.add(localidad);
            console.log(localidad)
          }

         
      });
    }
