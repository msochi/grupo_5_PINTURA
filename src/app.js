const express = require ("express");
const app = express ();
const path = require ("path"); // adoptamos PATH para escribir rutas.
const session = require ('express-session'); // Instalo y requiero session (middleware de aplicacion).Se ejecuta en todos los pedidos - es global.
const methodOverride = require('method-override');
const cookieParser = require("cookie-parser"); //Cookies

let port = process.env.PORT || 3000;



const middlewareusuarioLogueado = require ('../src/middlewares/usuarioLogueado');
const verSession = require ('../src/middlewares/verSession');
const indexRouter = require ('./routes/indexRouter');     //Indicamos cual es la funciòn u objeto literal que queremos usar.
const plpRouter = require ('./routes/plpRouter')//Indicamos cual es la funciòn u objeto literal que queremos usar.
const adminRouter = require ('./routes/adminRouter');
const loginRouter = require ('./routes/loginRouter');
const pdpRouter = require ('./routes/pdpRouter');
const miCarritoRouter = require ('./routes/miCarritoRouter');
const checkOutRouter = require ('./routes/checkOutRouter');
const thankYouRouter = require ('./routes/thankYouRouter');
const crearUsuarioRouter = require   ('./routes/crearUsuarioRouter');
//const cargaProductoRouter = require('./routes/cargaProductoRouter');
//const modificarProductoRouter = require ('./routes/modificarProductoRouter');
const modificarUsuarioRouter = require ('./routes/modificarUsuarioRouter');
const recuperoPassRouter = require ('./routes/recuperoPassRouter');
const searchRouter = require ('./routes/searchRouter');
const productosRouter= require("./routes/apis/productosRouter"); //agrego las rutas para poder disponibilizar los endpoints de cada ruta.
//const registroValidacion = require ('../middlewares/registroValidacion');
const usuariosRouter= require("./routes/apis/usuariosRouter"); 



app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.urlencoded({extenden:false})); // estas 2 lineas sirven para poder interpretar los formularios. Por ejemplo el de registro.
app.use(express.json());
app.use(session({secret:'El microchip esta en el enchufe'}));
app.use ( verSession );
app.use (middlewareusuarioLogueado);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Para usar ejs  agregamos estas líneas de código para configurar el proyecto e indicar que usamos como motor de vistas a ejs. "view engine"  lo tenemos que pasar siempre independientemente del motor de vistas que vayamos a utilizas (ej: ejs)
app.set ("view engine" , "ejs");
// Agregamos esta línea extra para indicar que  todas las vistas están es esta carpeta. 
app.set ("views", path.join(__dirname, "views")); // para escribir rutas utilizamos requerimos PATH. De esta forma indicamos le indicamos al proyecto una sola vez la ruta en donde están las vistas.

// Tenemos que disponibilizar una carpeta estática para todos los pedidos que nos hagan. Todos los archivos públicos.

app.use (express.static(path.join(__dirname, '../public'))); // usamos este middleware para indicar que hay una carpeta estática en nuestro proyecto.Tenemos que utilizar nuevamente PATH.JOIN para agregar la ruta a donde esta la carpeta.

app.use ('/', indexRouter) // Le estamos diciendo a Express que cuando llegue este prefijo '/' va a usar este enrutador: index.Router.

app.use ('/plp', plpRouter) // Aca le indico a express que cuando llegue este prefijo tengo que usar este enrutador.
app.use ('/admin',adminRouter);
//app.use ('/admin/modificarusuario',adminRouter);

app.use ('/login',loginRouter);
app.use ('/plp', plpRouter);
app.use ('/PDP', pdpRouter);
app.use ('/miCarrito', miCarritoRouter);
app.use ('/Checkout', checkOutRouter);
app.use ('/ThankYou', thankYouRouter);
app.use ('/crearUsuario', crearUsuarioRouter);
//app.use ('/cargaProducto', cargaProductoRouter);
//app.use ('/modificarProducto', modificarProductoRouter);
app.use ('/modificarUsuario', modificarUsuarioRouter);
app.use ('/recupero', recuperoPassRouter);
app.use ('/search', searchRouter);
app.use("/apis/productos", productosRouter);
app.use("/apis/usuarios", usuariosRouter); // agrego la ruta de la Api para productos.



//app.listen (3000, function () {console.log ("El Servidor esta corriendo")});
app.listen(port, ()=> console.log ('Server Listen to port: ${port}'));



