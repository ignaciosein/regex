/* ^[^@]+@[^@]+\.[a-zA-Z]{2,}$

let email = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"


\/^W |^\d@ */

///EJERCICIO 1 .1 ///
/* Que empiece por letra o número, y tenga al menos un carácter Para el dominio (ej. @hotmail @gmail): */

/* /^([a-z0-9]+)@([a-z0-9]+)$/.test("usuario@servidor") */

/* Que tenga solo letras, y al menos tres caracteres Para el dominio padre (ej. .es .com .org) */

/* /^([a-z0-9]+)@([a-z0-9]+).([a-z]{3})$/.test("usuario@servidor.com") */

/* Podrá tener dos (.es, .fr, .it,…) o tres letras (.com, .net, .org,..) o cuatro (.mobi, info,…) */
/* 
/^([a-z0-9]+)@([a-z0-9]+).([a-z]{2,4})$/.test("usuario@servidor.com") */

/* Crearemos un formulario que llamará a la función checkEmail */

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let correoDelUsuario = document.getElementById("correo").value;
    let regexMail = /^([a-z0-9]+)@([a-z0-9]+).([a-z]{2,4})$/;

    console.log(correoDelUsuario);
    console.log(regexMail);

    if (regexMail.test(`${correoDelUsuario}`)) {
      alert(" la sintaxis es correcta ");
    } else if (!regexMail.test(`${correoDelUsuario}`)) {
      alert("la sintaxis no es correcta");
    }
  });
