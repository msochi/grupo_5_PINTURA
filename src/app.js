const express = require ("express");
const app = express ();
const path = require ("path"); // adoptamos PATH para escribir rutas.



const indexRouter = require ('./routes/indexRouter');     //Indicamos cual es la funciòn u objeto literal que queremos usar.

const plpRouter = require ('./routes/plpRouter')//Indicamos cual es la funciòn u objeto literal que queremos usar.
const loginRouter = require ('./routes/loginRouter');
const pdpRouter = require ('./routes/pdpRouter');
const miCarritoRouter = require ('./routes/miCarritoRouter');
const checkOutRouter = require ('./routes/checkOutRouter');
const thankYouRouter = require ('./routes/thankYouRouter');
const crearUsuarioRouter = require   ('./routes/crearUsuarioRouter');
const cargaProductoRouter = require('./routes/cargaProductoRouter');

app.listen (3000, function () {console.log ("El Servidor esta corriendo")});

// Para usar ejs  agregamos estas líneas de código para configurar el proyecto e indicar que usamos como motor de vistas a ejs. "view engine"  lo tenemos que pasar siempre independientemente del motor de vistas que vayamos a utilizas (ej: ejs)
app.set ("view engine" , "ejs");
// Agregamos esta línea extra para indicar que  todas las vistas están es esta carpeta. 
app.set ("views", path.join(__dirname, "views")); // para escribir rutas utilizamos requerimos PATH. De esta forma indicamos le indicamos al proyecto una sola vez la ruta en donde están las vistas.

// Tenemos que disponibilizar una carpeta estática para todos los pedidos que nos hagan. Todos los archivos públicos.

app.use (express.static(path.join(__dirname, '../public'))); // usamos este middleware para indicar que hay una carpeta estática en nuestro proyecto.Tenemos que utilizar nuevamente PATH.JOIN para agregar la ruta a donde esta la carpeta.

app.use ('/', indexRouter) // Le estamos diciendo a Express que cuando llegue este prefijo '/' va a usar este enrutador: index.Router.

app.use ('/plp', plpRouter) // Aca le indico a express que cuando llegue este prefijo tengo que usar este enrutador.
app.use ('/login',loginRouter);
app.use ('/plp', plpRouter);
app.use ('/PDP', pdpRouter);
app.use ('/miCarrito', miCarritoRouter);
app.use ('/Checkout', checkOutRouter);
app.use ('/ThankYou', thankYouRouter);
app.use ('/crearUsuario', crearUsuarioRouter);
app.use ('/cargaProducto', cargaProductoRouter);

app.use(express.urlencoded({extenden:false})); // estas 2 lineas sirven para poder interpretar los formularios. Por ejemplo el de registro.
app.use(express.json());


//hola