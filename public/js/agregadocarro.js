

function mostrarCarItem (){
    let html =" ";
    let carItem = JSON.parse(localStorage.getItem("productoEnCarro"));
    var count = 1;
    carItem.forEach(item=> {
        html += ` 
        <div class="ordenes" onload="subTota()">
            <div class="forImage"><img src="${item.imagen}" alt=""></div>
            <div class="forItem"> <h3 class ="numeroProducto">${item.sku} </h3></div>   
            <div class="forDetalle"><h3 class= "detalle">${item.descripcion}</h3></div>
            <div class="forUnidades">  <h3 class="unidades"> <button class ="adicionar" style="font-size:10px" type="button" onclick="increase(text${count})">+</button>&nbsp <input class="incrementoCantidad" min="0" type="text" id="text${count}" value="${item.cantidad}">&nbsp&nbsp            
            <button class ="restar" style="font-size:10px; padding-left:1%; padding-right: 1%" type="button" onclick="decrease(text${count})">-</button> </h3></div>
            <div class="forPrecio"><h3 class"preciofinal">$ ${item.precio} </h3></div>
            <div class="forTotalcompra">$<input class="TT" disabled placeholder= "" Value="${item.cantidad * item.precio}"></div>   
            <div class ="remover"><button>Eliminar</button></div>
            
        </div>
         `
         count++;
    });
   
document.querySelector(".mostrarCarro").innerHTML = html;
}

mostrarCarItem ()
////


////ELIMINAR PODUCTO DE LINEA DE ORDEN
const remover = document.getElementsByClassName("remover")
for (let i= 0; i <remover.length; i ++){
    let botonRemover = remover[i];
   // console.log(botonRemover)
     botonRemover.addEventListener("click", () => {
       // console.log("Funciona");         
        //console.log ( event.target.parentElement.parentElement.children[1].children[0].textContent)
         let carItem = JSON.parse(localStorage.getItem("productoEnCarro"))
         console.log (event.target.parentElement.parentElement.children[2].children[0].textContent)
        carItem.forEach(item => {
              if(item.descripcion != event.target.parentElement.parentElement.children[2].children[0].textContent){
                productos.push(item)
       
              }
       }
        );
        localStorage.setItem("productoEnCarro", JSON.stringify(productos));
      window.location.reload();   
      });

}
///FUNCIONA SUMA TOTAL ORDEN

const  traer =document.getElementsByClassName("TT")

var totalOrden = 0;
 for (var i = 0; i < traer.length; i ++) {
     var val = parseInt(traer[i].getAttribute('value'), 10);
     totalOrden += val;
 }
 document.getElementById("monto").innerHTML= "$ "+totalOrden;
 document.getElementById("totalCompra").href= "/checkout?totalOrden="+totalOrden;
 console.log(totalOrden);




/// INCREMENTO CANTIDADES - NO FUNCIONA
function increase(id){
  var textBox = document.getElementById(id.id);
  textBox.value++;

}   

function decrease(id){
var textBox = document.getElementById(id.id);
  textBox.value--;
}
 


