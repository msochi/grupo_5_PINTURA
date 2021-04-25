const path = require('path');
const db = require('../../database/models')


module.exports ={
   
 
    lista: function(req,res){
       // return res.json (req.body)
        console.log ('Estoy viendo API Lista de usuarios')
     
         db.Clientes.findAll({           
            include: [
               //{association: 'provincias' },
               {association: 'localidades'},
              
             ],  
            }).then(function(usuarios){
            console.log(usuarios)
            for (let i = 0; i < usuarios.length; i++) {
              usuarios[i].setDataValue("endpoint","/apis/usuarios/"+usuarios[i].id)
                
            }
        let respuesta= {
            meta: {
                status: 200,
                total: usuarios.length,
                url:"/apis/usuarios/"
            },
            data: {
                users: usuarios,
                count: usuarios.length
             }
            
            //data: usuarios

        };
        
      
        res.json(respuesta)
    })

       
    
        },
        detalleUsuario: function(req,res){
            // return res.json (req.body)
             console.log ('Estoy viendo API detalle de Usuarios')
         
              db.Clientes.findAll({
                  where: { id: req.params.id },           
                include: [
                  //  {association: 'provincias'},
                    {association: 'localidades'},
                  
                 ],  
                }).then(function(usuarios){
                 console.log(usuarios)
                 for (let i = 0; i < usuarios.length; i++) {
                    usuarios[i].setDataValue("endpoint","/apis/usuarios/"+usuarios[i].id)
                     
                 }
             let respuesta= {
                 meta: {
                     status: 200,
                     total: usuarios.length,
                     url:"/apis/usuarios/"
                 },
                 data: {
                    users: usuarios 
                 }
                 //  data: usuarios
     
             };
             
           
             res.json({respuesta})
         })
     
            
         
             },
             provincia: function(req,res){
                // return res.json (req.body)
                 console.log ('Estoy viendo API detalle de Usuarios')
             
                  db.Provincias.findOne({
                      where: { id: req.params.id }           
                    }).then(function(provincia){
                     console.log(provincia)
                 let respuesta= {
                     meta: {
                         status: 200,
                         url:"/apis/usuarios/provincia"
                     },
                     data: {
                        provincia: provincia 
                     }
                     //  data: usuarios
         
                 };
                 
               
                 res.json({respuesta})
             })
         
                
             
                 },
                 localidad: function(req,res){
                    // return res.json (req.body)
                     console.log ('Estoy viendo API detalle de Usuarios')
                 
                      db.Localidades.findOne({
                          where: { id: req.params.id }           
                        }).then(function(localidad){
                         console.log(localidad)
                     let respuesta= {
                         meta: {
                             status: 200,
                             url:"/apis/usuarios/localidad"
                         },
                         data: {
                            localidad: localidad 
                         }
                         //  data: usuarios
             
                     };
                     
                   
                     res.json({respuesta})
                 })
             
                    
                 
                     },
    


    }