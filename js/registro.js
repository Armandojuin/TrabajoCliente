//En chrome no funciona pero en firefox va perfecto




//-----------------------------------------------------VALIDAR TEXTO-----------------------------------------------------------------------


function validarTexto (texto) {

   let cadena = document.getElementById(texto).value
   let expresion_regular_texto = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;

   if(expresion_regular_texto.test (cadena) == true ) {

      console.log(texto+' insertado correctamente');

   }else {console.log('fallo al meter el '+texto)}


}
 


//----------------------------------------------------CALCULAR DNI-------------------------------------------------------------

function nif() {
   let dni = document.getElementById("dni").value;
   const letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
   let letradni;
   let expresion_regular_dni;
   let numero;

   expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

   if(expresion_regular_dni.test (dni) == true) {

      let algo = dni.substring(0, dni.length-1 )
      numero = parseInt(algo);
      numero = numero%23;
      letradni = letras.charAt(numero);

      if(letras != letradni.toUpperCase()) {

         console.log('DNI erroneo, la letra no se corresponde');

      }else {console.log('DNI correcto')}

   }else{console.log('DNI erroneo bro, formato no valido')}

  }

//--------------------------------------------------------METER MAXIMO Y MINIMO--------------------------------------------------------------------

function tamanoMax (id, mindigitos ,maxdigitos) {

   var calcular = document.getElementById(id).value;
   var longitud = calcular.length;

   if(longitud < mindigitos||longitud > maxdigitos || calcular == '') {

      console.log('numero de digitos erroneo, el rango esta entre: '+mindigitos+' y '+maxdigitos);

   }else if(calcular == undefined) {

      console.log('Introduce un numero')

   } else{console.log(id+" correcto")}

}


//-----------------------------------------------------------VALIDAR CONTRASEÑA--------------------------------------------------------------------------


function validarPass () {

   let password = document.getElementById("pass").value;
   let expresion_regular_pass;

   expresion_regular_pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;

   if(expresion_regular_pass.test (password) == true) {

      console.log("Formato de la contraseña valido");
   } else {console.log("Formato de la contraseña NO valido")}

}


//-------------------------------------------------------------------VALIDAR EMAIL------------------------------------------------------------------------

function validarEmail () {

   let email = document.getElementById("email").value;
   let expresion_regular_email;

   expresion_regular_email = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;


   if(expresion_regular_email.test(email) == true) {

      console.log('Formato de email valido')
   }else {console.log('Formato de email NO valido')}

}


//--------------------------------------------------------------CALCULAR FECHA-----------------------------------------------------------------------------

function calcularFecha (year) {

   //fechas sin parsear
   let hoy = new Date();
   let fechaInsertada = document.getElementById("fecha").value;
   
   //Calcular la fecha---- se saca el año de la fecha insertada y se le resta el del parametro
   let fechaCalculada = new Date(hoy.getFullYear() - year, hoy.getMonth(), hoy.getDate());

   //parses
   let fechaCalculadaParse = fechaCalculada.toLocaleDateString('ko', { year:"numeric", month:"numeric", day:"numeric"});

   if(fechaInsertada < fechaCalculadaParse) {

      console.log('Fecha NO correcta');

   } else{console.log('Fecha correcta')}

}


//----------------------------------------------------------------IMPRIMIR------------------------------------------------------------------------------------------


function imprimir () {

   validarTexto('nombre');
   validarTexto('primer apellido');
   validarTexto('segundo apellido');
   nif();
   validarTexto('ciudad');
   validarTexto('direccion');
   tamanoMax('postal', 5, 5);
   tamanoMax('telefono', 9, 9);
   validarTexto('usuario');
   validarPass();
   validarEmail();
   calcularFecha(100);

}