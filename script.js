/* ^[^@]+@[^@]+\.[a-zA-Z]{2,}$

let email =     "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"



                /^([A-Za-z0-9]{2,5})+(!|@|#|$|%|&)$/.test("qqqqq")


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

/* document
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
 */



  //////////////////////EJERCICIO 2/////////////////////////
/*   2. Validación de Contraseña
Que empiece por una letra o número
Que tenga entre 6 y 20 caracteres
Que se pueda poner alguno de estos símbolos, o varios: !,@,#,$,%,&
Que haga una búsqueda global en toda la cadena Para la implementación de validar la contraseña, vamos a crear la función checkPassword. Esta función será   la que ejecute la expresión regular. Se le pasará como argumento el valor de la contraseña recogida */


document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let correoDelUsuario = document.getElementById("correo").value;
    let passDelUsuario = document.getElementById("password").value;
    let razaUsuario = document.getElementById("razas").value;
    console.log(razaUsuario)

    let regexMail = /^c@([a-z0-9]+).([a-z]{2,4})$/;
    let regexPass = /^([A-Za-z0-9.#!$%&'*+=?^_`~-]{6,20})+$/;
    let regexRaza=/^([A-Za-z])+(Humano|Enano|Elfo|Hobbit)$/

    checkEmail(regexMail,correoDelUsuario)
    checkPassword(regexPass,passDelUsuario)
   

   
  });

 


  /* 
  
  const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/

/^([a-z0-9]+)@([a-z0-9]+).([a-z]{2,4})$/;

const result = re.exec('2015-01-02')

  
  
  
  
  
  
  
  */

function checkEmail (regexMail,correoDelUsuario){


  if (regexMail.test(`${correoDelUsuario}`)) {
    alert(" CORREO CORRECTO ");

   

  } else if (!regexMail.test(`${correoDelUsuario}`)) {
    alert("CORREO INVALIDO");
  }

 

}

function checkPassword(regexPass,passDelUsuario){

  if (regexPass.test(`${passDelUsuario}`)) {
    alert(" PASS CORRECTA ");
  } else if (!regexPass.test(`${passDelUsuario}`)) {
    alert("PASS INCORRECTA");
  }

 

}
function checkRace(regexRaza,razaUsuario){

  if (regexRaza.test(`${razaUsuario}`)) {
    alert(" PASS CORRECTA ");
  } else if (!regexRaza.test(`${razaUsuario}`)) {
    alert("PASS INCORRECTA");
  }

 

}

/* 3. Extra: Checkear raza
Que no tenga caracteres alfanuméricos(ya que son opciones que hemos puesto para elegir)
Que se pueda elegir entre humano, elfo, hobbit o enano
Que haga una búsqueda global en toda la cadena Para la implementación de checkear si es una de las razas o no, en el datalist del formulario, lo relacionaremos con la función checkRace. Esta función será la que ejecute la expresión regular. Se le pasará como argumento el parámetro raceOrNot, que será el valor de la opción seleccionada del datalist */

/^([A-Za-z])+(Humano|Enano|Elfo|Hobbit)$/.test('')