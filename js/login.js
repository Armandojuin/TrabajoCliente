document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formu");
  const inputUsuario = document.getElementById("username");
  const inputContrasena = document.getElementById("password");

  formulario.addEventListener("submit", function (evento) {
    if (!validarUsuario(inputUsuario.value)) {
      alert("Nombre de usuario incorrecto, por favor escriba otro diferente.");
      evento.preventDefault();
    }

    if (!validarContrasena(inputContrasena.value)) {
      alert("Contraseña incorrecta, por favor escriba otra diferente.");
      evento.preventDefault();
    }
  });

  function validarUsuario(username) {
    const regexUsername = /^[a-zA-Z0-9]{3,}$/;
    return regexUsername.test(username);
  }

  function validarContrasena(password) {
    const regexPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    return regexPass.test(password);
  }
});
