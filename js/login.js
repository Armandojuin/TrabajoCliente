document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formu");
  const inputUsuario = document.getElementById("username");
  const inputContrasena = document.getElementById("password");

  formulario.addEventListener("submit", function (event) {
    if (!validarUsuario(inputUsuario.value)) {
      alert("Nombre de usuario incorrecto, por favor escriba otro diferente.");
      event.preventDefault();
    } else {
      alert("Usuario correcto.");
    }

    if (!validarContrasena(inputContrasena.value)) {
      alert("Contraseña incorrecta, por favor escriba otra diferente.");
      event.preventDefault();
    } else {
      alert("Contraseña correcta.");
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
