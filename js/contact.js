document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();// evita que la pagina se recargue

    //Almacena cada valor que llega del formulario html en una variable
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;


    //Como no tenemos backed vamos a mostrar lo enviado por la consola para combrobar que funciona
    console.log("Nombre: " + name);
    console.log("Email: " + email);
    console.log("Mensaje: " + message);
    

    alert("Mensaje enviado con éxito"); //Alerta confirmando el envio del formulario
    document.getElementById("contactForm").reset(); //limpia los campos del formulario 
});
