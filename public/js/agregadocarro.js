

function mostrarCarItem (){
    let html =" ";
    let carItem = JSON.parse(localStorage.getItem("productoEnCarro"));
    carItem.forEach(item=> {
        html += ` 
        
        <div class="ordenes" onload="subTota()">
            <div class="forImage"><img src="${item.imagen}" alt=""></div>
            <div class="forItem"> <h3 class ="numeroProducto">${item.sku} </h3></div>   
            <div class="forDetalle"><h3 class= "detalle">${item.descripcion}</h3></div>
            <div class="forUnidades">  <h3 class="unidades"> 
              <button class ="adicionar"  style="font-size:10px" type="button" onclick="incrementar()">+</button>&nbsp 
                <input id='elnumero' class="incrementoCantidad"  type="text" min=1 max=1 value="${item.cantidad}">&nbsp&nbsp            
            <button class ="restar" style="font-size:10px; padding-left:1%; padding-right: 1%" type="button" onclick="decrease()">-</button> </h3></div>
            <div class="forPrecio"><h3 class"preciofinal">$ ${item.precio} </h3></div>
            <div class="forTotalcompra">$<input class="TT" disabled placeholder= "" Value="${item.cantidad * item.precio}"></div>   
            <div class ="remover"><button>Eliminar</button></div>
            
        </div>
        
         `
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
 console.log(totalOrden);




/// INCREMENTO CANTIDADES - NO FUNCIONA
// function increase(){
//   var a = 1;
//   var textBox = document.getElementById("text");
//   textBox.value++;

// }   
// increase() 
// function decrease(){
// var textBox = document.getElementById("text");
//   textBox.value--;
//  // window.location.reload(); 
// }
//  var nuevoValor;
// document.querySelector('.adicionar').addEventListener("click", function(){
// // agarro el valor del input
//   nuevoValor = document.getElementById('elnumero').value
// // incremento el valor en 1
//  nuevoValor ++;
// // seteando el incremento en el input
// document.getElementById('elnumero').value=nuevoValor

// })

function subir(){
var ordenesDiv= document.getElementsByClassName('mostrarCarro')[0]
var ordenesMacro= ordenesDiv.getElementsByClassName('ordenes')
for (var i= 0; i<ordenesMacro.length;i++){
  var ordenesMacro= ordenesMacro[i]
  var cantidadElemento= ordenesMacro.getElementsByClassName("incrementoCantidad")
  

  var precioElemento= ordenesMacro.getElementsByClassName("preciofinal")[0]
  console.log(cantidadElemento)
}


}
subir()

