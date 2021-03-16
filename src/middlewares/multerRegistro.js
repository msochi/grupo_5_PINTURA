const multer = require("multer");
const path= require('path');

// storage sirve para poder guargar las imagenes que sube el usuario junto con requerir multer.
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../public/uploadsAvatars") )
    },
    filename: function (req, file, cb) {
      console.log (req.body.email + Date.now() + path.extname(file.originalname));
      console.log (req.body);
      console.log (Date.now());
      console.log (path.extname(file.originalname));
      cb(null,req.body.email + Date.now() + path.extname(file.originalname))
    }
  })
   
  var upload = multer({ storage: storage });

  module.exports = upload;