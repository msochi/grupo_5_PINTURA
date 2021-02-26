
const fs = require('fs');
const path= require ('path');
const express    = require("express");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const  crypto = require("crypto");
const { getMaxListeners } = require('process');

const sendMailOut= (mailOptions) => {
   const smtpTransport= nodemailer.createTransport({
       service: 'Gmail',
       auth: {
           user: "marcelo.sochi@gmail.com",
           pass: "",
       }
   });

   smtpTransport.sendMail(mailOptions, (err) => {
       if(err){
           console.log(err);
           return { status: 500,
               text: err
           };   
       }else{
           console.log('mail sent');
           return { status: 200,
                    text: "mail sent"
           };  
       }
   });
};






let usuarios = fs.readFileSync(path.join(__dirname, '../database/usuarios.json'),'utf8');
usuarios = JSON.parse(usuarios);

//https://github.com/r4pt0s/node-password-recovery/blob/master/views/reset.ejs
module.exports ={
    recuperar: function(req,res){
       res.render ('recupero')
    },
  // regenerar: function (req,res){

    //  try{
     //    const resolvedPromise= await Promise.all([
                                           //  User.findOne({email: req.body.email})
                                    //     ]);
 
      //   const token = crypto.randomBytes(20).toString('hex');
       //  const handleUser= resolvedPromise[0];                                 
 
        // const mailOptions= {
          //  to: handleUser.email,
        //     from: "marcelo.sochi@gmailcom",
           //  subject: '"Node Password Recovery Sample" is here',
            // text: `You are receiving this email because you (or someone else) have requested the reset of the password
               //  Please Click the following link below, or copy and paste it into your browser to reset your password
              //   \n\n http://${req.headers.host}/reset/${token}  \n\n
            //     If you did not request this, please ignore this mail and your password  will remain unchanged`
        // };
 
       //  handleUser.resetPasswordToken= token;
        // handleUser.resetPasswordExpires= Date.now()+3600000;// +1 Hour
                     
      //  handleUser.save((err) => {
       //     if(err){
       //          console.log(err);
        //     }else{
        //     sendMailOut(mailOptions);
                 
       //          debugTable("PASSWORD RECOVERY MAIL IS SENT", handleUser.toJSON());
       //      res.render("/recupero", {success: "Tenes un mail con informacion del recupero de tu clave"});
       //      }
      //  });
   //  }catch(err){
   //      console.log(`REACHED CATCH BLOCK. RESPONSE: ${err}`);
  //   }
 
// }
};
    console.log ("aca Controller");