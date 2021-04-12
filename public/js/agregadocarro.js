

function mostrarCarItem (){
    let html =" ";
    let carItem = JSON.parse(localStorage.getItem("productoEnCarro"));
    carItem.forEach(item=> {
        html += ` 
        <div class="ordenes">
            <div class="forImage"><img src="${item.imagen}" alt=""></div>
            <div class="forItem"> <h3 class ="numeroProducto">${item.sku} </h3></div>   
            <div class="forDetalle"><h3 class= "detalle">${item.descripcion}</h3></div>
            <div class="forUnidades">  <h3 class="unidades"> ${item.cantidad} </h3></div>
            <div class="forPrecio"><h3 class"preciofinal"> ${item.precio} </h3></div>
            <div class="forTotalcompra"><input Value=""></div>   
            <div class ="remover"><button>Eliminar</button></div>
            
        </div>
         `
    });
   
document.querySelector(".mostrarCarro").innerHTML = html;
}

mostrarCarItem ()




const remover = document.getElementsByClassName("remover")
for (let i= 0; i <remover.length; i ++){
    let botonRemover = remover[i];
    console.log(botonRemover)
     botonRemover.addEventListener("click", () => {
       // console.log("Funciona");         
        //console.log ( event.target.parentElement.parentElement.children[1].children[0].textContent)
         let carItem = JSON.parse(localStorage.getItem("productoEnCarro"))
         console.log (event.target.parentElement.parentElement.children[2].children[0].textContent)
        /carItem.forEach(item => {
              if(item.descripcion != event.target.parentElement.parentElement.children[2].children[0].textContent){
                productos.push(item)
       
              }
       }
        );
        localStorage.setItem("productoEnCarro", JSON.stringify(productos));
      window.location.reload();   
      });

}