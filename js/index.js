// Ejercicios Clase 1

// let nombre = prompt("Ingrese aqui su nombre");
// let numero = prompt("Ingrese un numero");
// let texto1 = prompt("Concatenemos esto con lo que viene");
// let texto2 = prompt("A ver que sale?");
// let numero2 = 5;
// let resultado = parseInt(numero) + numero2;

// console.info("Bienvenido " + nombre);
// console.info(`La suma de ${numero} + ${numero2} es =  ${resultado} `);
// console.info(`${texto1} ${texto2}`);

// Ejercicios Clase 2

// let a = prompt("Diga un numero");

// a = parseInt(a);

// if (a > 1000) {
//   console.log(`Su numero es ${a} y es mayor a 1000`);
// } else {
//   console.log(`Su numero es ${a} y es inferior a 1000`);
// }

// let b = prompt("Ingrese cualquier texto");

// if (b === "Hola") {
//   alert("Saludos compañero");
// } else {
//   console.info("Usted no ha saludado");
// }

// let c = prompt("Ingrese un numero del 1 al 50");

// c = parseInt(c);

// if (c >= 10 && c <= 50) {
//   alert("Su numero esta entre 10 y 50");
// } else {
//   console.info("Su numero no cumple los requisitos de la evaluacion");
// }

// Ejercicios Clase 3

// const repetirTextos = (cadena = "", veces = undefined) => {
//   if (!cadena) return console.warn("no ingresaste un texto");
//   if (veces === undefined)
//     return console.warn("No ingresaste numero a repetir del texto");
//   if (veces === 0) return console.error("El numero de veces no puede ser 0");
//   if (Math.sign(veces) === -1)
//     return console.error("El numero de veces no puede ser negativo");

//   for (let i = 1; i <= veces; i++) {
//     console.info(`${cadena},${i}`);
//   }
// };

// repetirTextos("Cadena", 5);

// Ejercicios Clase 4

// Funcion 1

// const contarCaracteres = (cadena = "") => {
//   if (!cadena) {
//     console.warn("No has ingresado ninguna cadena de texto");
//   } else {
//     console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
//   }
// };
// contarCaracteres("Hola");

// Funcion 2
// const capicua = (numero = 0) => {
//   if (!numero) return console.warn("No ingresaste un numero");
//   if (typeof numero !== "number")
//     return console.error(`El valor "${numero} ingresado, NO es un numero`);

//   numero = numero.toString();
//   let alReves = numero.split("").reverse().join("");

//   return numero === alReves
//     ? console.info(
//         `Si es capicua. Numero Original ${numero}, Numero al reves ${alReves}`
//       )
//     : console.info(
//         `No es capicua. Numero Original ${numero}, Numero al reves ${alReves}`
//       );
// };

// capicua(858);

// Funcion 3
// const descuentoProducto = (monto = undefined, descuento = 0) => {
//   if (monto === undefined) return console.warn("No has ingresado el monto");
//   if (typeof monto !== "number")
//     return console.error(`El valor ${monto} ingresado, no es un numero`);
//   if (monto === 0) return console.error("El monto no puede ser 0");
//   if (Math.sign(monto) === -1)
//     return console.error("El monto no puede ser negativo");
//   if (typeof descuento !== "number")
//     return console.error(`El valor ${descuento} ingresado, NO es un numero`);
//   if (Math.sign(descuento) === -1)
//     return console.error(" El descuento no puede ser negativo");

//   return console.info(
//     `${monto} - ${descuento}% = ${monto - (monto * descuento) / 100}`
//   );
// };

// descuentoProducto(5000, 5);

// Funcion nada mas para cumplir la consigna ;p
// const avanzar = () => {
//   confirm("Seguro quieres avanzar?");

// Ejercicios Clase 5

let content = document.getElementById('content');
let nroPregunta;
//let modalImage = document.getElementById('modalImageSource');
class Persona {
  constructor(nombre, mail, puntaje) {
    this.nombre = nombre;
    this.mail = mail;
    this.puntaje = puntaje;
  }
}

function hideElement(id) {
  $('#' + id).hide('slow');
}

function selectOption() {
  $('button').attr('disabled', false);
}

function startTest() {
  nroPregunta = 0;
  // Pido al Usuario sus datos
  $('#modalTarjeta').modal({ show: false });
  $('#content').html(
    '<div class="row d-inline-flex"> <div class="col-lg-6"><img width="300"data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" class="hero-img" src="/assets/user.png" class="img-fluid" alt="Regalo"></div><div class="col-lg-6 d-flex align-items-center"> <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200"><h4 class="my-3">Ingrese su nombre: </h4>' +
      '<input class="form-control" id="userName" type="text" placeholder="Ejemplo: Alan">' +
      '<h4 class="my-3"> Ingrese su email: </h4> <input id="email" class="form-control" id="userMail" type="text" placeholder="ejemplo: alan@gmail.com"><form>' +
      '<button id="btnUserData" type="button" class="my-3 btn btn-primary btn-lg px-4 gap-3">Click o ENTER para continuar</button> </div></div></div>'
  );
  //Creo un evento para que cuando el usuario presione ENTER pueda iniciar el test
  document.addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      userData();
    }
  });
  //Creo otro evento para que cuando el usuario clickee el boton pueda iniciar el test
  document.getElementById('btnUserData').addEventListener('click', function (event) {
    event.preventDefault();
    userData();
  });
}

function userData() {
  let usuario;
  let usuarios = [];
  let nombreUsuario = $('#userName').val();
  let mailUsuario = $('#email').val();

  if (localStorage.getItem('users')) {
    usuarios = JSON.parse(localStorage.getItem('users'));
  }
  let userCount;
  if (!localStorage.getItem('userCount')) {
    userCount = 0;
    localStorage.setItem('userCount', 0);
  } else {
    userCount = parseInt(localStorage.getItem('userCount'));
  }

  // Creo la matriz de puntajes
  let puntajes = [
    [3, 1, 1, 1],
    [7, 5, 4, 0],
    [2, 8, 14, 22],
  ];

  const preguntasUrl = '../data/preguntas.json';
  let preguntas;

  $.getJSON(preguntasUrl, function (respuestaServidor, estado) {
    if (estado === 'success') {
      preguntas = respuestaServidor;
    }
  });

  let puntajeUsuario = 0;
  function animate_progressbar() {
    $total_width = $('#progressbar_wrapper').width();
    $width_inc = $total_width / preguntas.length;
    if ($('#progressbar').width() < $total_width) {
      $width = $('#progressbar').width() + $width_inc;
      $('#progressbar').animate({ width: '' + $width + '' }, 300);
    }
  }

  function reset_progressbar() {
    $('#progressbar').animate({ width: '0px' }, 300);
    $('#progressbar').hide();
  }
  // Utilizo la función flecha para calcular su regalo y guardo el resultado en "respuesta"

  let calcularRegalo = () => {
    $('body').addClass('pattern-business');
    escribirPregunta(nroPregunta);
    $('#progressbar_wrapper').show();
    $('#progressbar').show();
  };

  function escribirPregunta(nroPregunta) {
    $('#content').hide('slow');
    setTimeout(function () {
      $('#content').html(`

    <div id="card" class="card h-lg-100 overflow-hidden">
      <div class="card-body p-0">
        <div class="table-responsive scrollbar">
          <table class="table table-dashboard mb-0 table-borderless fs--1 border-200">
            <thead class="bg-light">
              <tr class="text-900">
                <th class="px-5"><h5>${preguntas[nroPregunta].pregunta}</h5></th>
             </tr>
            </thead>
            <tbody id="formPreguntas">
                <!-- Inicio iteracion -->`);
      for (const rta in preguntas[nroPregunta].respuestas) {
        $('#formPreguntas').append(`
      <tr class="border-bottom border-200">
      <td>
        <div class="d-flex align-items-center position-relative"><img class="rounded-1 border border-200" width="60" alt="">
          <div class="flex-1 ms-3">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="respuesta" value="${rta}" onClick="selectOption()">
              <label class="form-check-label" for="flexRadioDefault2">
                  <p class="fw-semi-bold mb-0 text-500">${preguntas[nroPregunta].respuestas[rta]}</p>
              </label>
            </div>
          </div>
        </div>
      </td>
      </tr>`);
      }

      $('#content')
        .append(
          `
    <!--Fin iteracion-->
            </tbody>
          </table>
    <div class="card-footer bg-light py-2">
      <div class="row d-flex flex-row-reverse">
        <div class="col-auto">
          <button onClick="hideElement(${preguntas[nroPregunta].id})" class="my-3 btn btn-primary btn-lg px-4 gap-3" id="${preguntas[nroPregunta].id}" disabled >Siguiente</button>
        </div>
      </div>
    </div>
  </div>`
        )
        .show('slow');

      document
        .getElementById(preguntas[nroPregunta].id)
        .addEventListener('click', function () {
          var radios = document.getElementsByName('respuesta');
          for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
              guardarRta(radios[i].value);
              nroPregunta++;
              break;
            }
          }

          if (preguntas[nroPregunta]) {
            escribirPregunta(nroPregunta);
            animate_progressbar();
          } else {
            finTest();
          }
        });
    }, 1000);
  }

  function guardarRta(response) {
    switch (response) {
      case 'a':
        puntajeUsuario += puntajes[nroPregunta][0];
        console.log(
          nombreUsuario + ' suma ' + puntajes[nroPregunta][0] + ' puntos.'
        );
        break;
      case 'b':
        puntajeUsuario += puntajes[nroPregunta][1];
        console.log(
          nombreUsuario + ' suma ' + puntajes[nroPregunta][1] + ' puntos.'
        );
        break;
      case 'c':
        puntajeUsuario += puntajes[nroPregunta][2];
        console.log(
          nombreUsuario + ' suma ' + puntajes[nroPregunta][2] + ' puntos.'
        );
        break;
      default:
        puntajeUsuario += puntajes[nroPregunta][3];
        console.log(
          nombreUsuario + ' suma ' + puntajes[nroPregunta][3] + ' puntos.'
        );
    }
    nroPregunta++;
    // alert(
    //   nombreUsuario +
    //     ', tu puntaje final es: ' +
    //     puntajeUsuario +
    //     '. Te enviaremos tu perfil completo al mail: ' +
    //     mailUsuario
    // );
  }
  function guardarPuntaje() {
    // Creo el objeto Persona con los datos ingresados y puntaje en 0
    usuario = new Persona(nombreUsuario, mailUsuario, puntajeUsuario);
    usuario.puntaje = puntajeUsuario;
    usuarios.push(usuario);
    usuarios.sort(function (a, b) {
      return b.puntaje - a.puntaje;
    });
    //Guardo mi usuario en el local Storage
    localStorage.setItem('users', JSON.stringify(usuarios));
    if (localStorage.getItem('userCount')) {
      let addUser = parseInt(localStorage.getItem('userCount'));
      addUser++;
      localStorage.setItem('userCount', addUser);
    }
  }

  function armarTarjeta() {
    document.getElementById('eModalLabel').innerHTML =
      'Su puntaje final es: ' + puntajeUsuario + 'puntos.';
    switch (true) {
      case puntajeUsuario >= 7 && puntajeUsuario <= 13:
        $('#modalImage').html(
          `<img style="width: 100%;" src="../assets/bitcoin.png" alt="Bitcoin">"`
        );
        break;
      case puntajeUsuario >= 15 && puntajeUsuario <= 20:
        $('#modalImage').html(
          `<img style="width: 100%;" src="../assets/libros.png" alt="Libros">"`
        );
        break;
      case puntajeUsuario >= 21 && puntajeUsuario <= 25:
        $('#modalImage').html(
          `<img style="width: 100%;" src="../assets/fotografia.png" alt="camara de fotos">"`
        );
        break;
      default:
        $('#modalImage').html(
          `<img style="width: 100%;" src="../assets/cocina.png" alt="cocina">"`
        );
        break;
    }
  }

  function finTest() {
    reset_progressbar();
    guardarPuntaje();
    armarTarjeta();
    $('#modalTarjeta').modal('show');
    $('#progressbar_wrapper').hide();
    content.innerHTML = `<div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" class="text-center"><h4>Fin</h4>
        <button id="retry" type="button" class="my-3 btn btn-primary btn-lg px-4 gap-3">Reintentar!</button></div>`;
    // Utilizo método click() de Jquery
    $('#retry').click(function () {
      startTest();
    });
  }
  calcularRegalo();
}
