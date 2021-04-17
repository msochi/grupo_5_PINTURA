const mercadopago = require("mercadopago");

module.exports ={
    checkOut: function(req,res){
        console.log(req.query.totalOrden);
        mercadopago.configure({
            access_token: "APP_USR-8442008759715479-112723-661e0dca501b5e89f23da7e5f9df9700-458408084"
            });

        // Crea un objeto de preferencia
        let preference = {
            items: [
            {
                title: 'Compra total',
                unit_price: parseInt(req.query.totalOrden),
                quantity: 1,
            }
            ],
            back_urls: {
                "success": "https://pintame.herokuapp.com/thankyou",
                "failure": "https://pintame.herokuapp.com/thankyou",
                "pending": "https://pintame.herokuapp.com/thankyou"
            },
            auto_return: 'approved'
        };

        mercadopago.preferences.create(preference)
            .then(function(response){
                console.log(response.body.id);
                let pref = response.body.id;
                res.render('./checkout', {
                    id: pref,
                    price: req.query.totalOrden
                });
            }).catch(function(error){
            console.log(error);
            res.render ('./checkout')
            });
    },
    
    }