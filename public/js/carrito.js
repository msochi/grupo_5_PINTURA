
const botonAgregar = document.getElementsByClassName ("agregar")

const productos =[];


for (let i= 0; i <botonAgregar.length; i ++){
    let cartBtn= botonAgregar[i];
    cartBtn.addEventListener("click", ()=> {
             
        let producto={
           // imagen: event.target.parentElement.previousElementSibling.children[0].src,
           imagen: event.target.parentElement.parentElement.parentElement.previousElementSibling.children[0].src,
           sku:parseInt(event.target.parentElement.parentElement.parentElement.children[0].textContent),
           descripcion: event.target.parentElement.parentElement.parentElement.children[1].textContent,
           precio: Number(event.target.parentElement.parentElement.parentElement.children[2].textContent.replace(/[^0-9.-]+/g,"")),
        
            cantidad: 1,
        }
       // console.log(producto);
        addItemToLocal(producto)
    })
}  

function addItemToLocal(producto){
let carItem = JSON.parse(localStorage.getItem("productoEnCarro"))
if (carItem=== null){
productos.push(producto);
localStorage.setItem("productoEnCarro", JSON.stringify(productos));
//console.log (carItem) 

} else{
    carItem.forEach(item => {
        if(producto.sku== item.sku){
            producto.cantidad= item.cantidad + 1;
           
        } else{
            productos.push(item)
        }
    });
    productos.push(producto)

}
localStorage.setItem("productoEnCarro", JSON.stringify(productos));
window.location.reload();             
}
///////
//AGREGANDO DATOS AL CARRITO EN EL HEADER

function numeroEnCarro(){
   
    let numeroCarro= 0;
    let carItem = JSON.parse(localStorage.getItem("productoEnCarro"));
   carItem.forEach (item=>{
        numeroCarro= item.cantidad += numeroCarro;
   });
//console.log(numeroCarro);
document.querySelector(".cantidadcarro").textContent = numeroCarro;

}
numeroEnCarro()

