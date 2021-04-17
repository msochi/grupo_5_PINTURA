//Create preference when click on button
function createCheckoutButton(preference) {
    var script = document.createElement("script");
    
    // The source domain must be completed according to the site for which you are integrating.
    // For example: for Argentina ".com.ar" or for Brazil ".com.br".
    script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.type = "text/javascript";
    script.dataset.preferenceId = preference;
    document.getElementById("Container100").innerHTML = "";
    document.querySelector("#Container100").appendChild(script);
  }