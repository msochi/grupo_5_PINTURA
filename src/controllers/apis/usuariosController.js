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



    }