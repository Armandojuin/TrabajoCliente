document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();// evita que la pagina se recargue

    //Almacena cada valor que llega del formulario html en una variable
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    //Como no tenemos backed vamos a mostrar lo enviado por la consola para combrobar que funciona
    console.log("Nombre: " + name);
    console.log("Email: " + email);
    console.log("Mensaje: " + message);
    

    alert("Mensaje enviado con éxito"); //Alerta confirmando el envio del formulario
    document.getElementById("contactForm").reset(); //limpia los campos del formulario 
});
