/* console.log(
      "Puntajes:" +
        puntajes[0][0] +
        " " +
        puntajes[0][1] +
        " " +
        puntajes[0][2] +
        " " +
        puntajes[0][3]
    );
    console.log(
      "Puntajes:" +
        puntajes[1][0] +
        " " +
        puntajes[1][1] +
        " " +
        puntajes[1][2] +
        " " +
        puntajes[1][3]
    );*/

let puntajeUsuario = 0;

function animate_progressbar() {
  // Utilizo la función flecha para calcular su perfil y guardo el resultado en "respuesta"

  let calcularPerfil = () => {
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
              //  console.log("Valor del radio: " + radios[i].value);
              break;
            }
          }

          if (preguntas[nroPregunta]) {
            animate_progressbar();
            escribirPregunta(nroPregunta);
          } else {
            animate_progressbar();
            setTimeout(function () {
              finTest();
            }, 1000);
          }
        });
    }, 1000);
  }

  function guardarRta(response) {
    // console.log("Ahora nropregunta vale: " + nroPregunta);
    switch (response) {
      case 'a':
        puntajeUsuario += puntajes[nroPregunta][0];
        /*  console.log(
          nombreUsuario + " suma " + puntajes[nroPregunta][0] + " puntos."
        );*/
        break;
      case 'b':
        puntajeUsuario += puntajes[nroPregunta][1];
        /*  console.log(
          nombreUsuario + " suma " + puntajes[nroPregunta][1] + " puntos."
        );*/
        break;
      case 'c':
        puntajeUsuario += puntajes[nroPregunta][2];
        /* console.log(
          nombreUsuario + " suma " + puntajes[nroPregunta][2] + " puntos."
        );*/
        break;
      default:
        puntajeUsuario += puntajes[nroPregunta][3];
      /*console.log(
          nombreUsuario + " suma " + puntajes[nroPregunta][3] + " puntos."
        );*/
    }
    nroPregunta++;
    //alert(nombreUsuario + ", tu puntaje final es: " + puntajeUsuario + ". Te enviaremos tu perfil completo al mail: " + mailUsuario);
  }
  function guardarPuntaje() {
    //   console.log("Puntaje total: " + puntajeUsuario);
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
      //Modifico el DOM con Jquery cambiando la imagen que se despliega en el modal
      case puntajeUsuario >= 0 && puntajeUsuario <= 11:
        $('#modalImage').html(
          `<img style="width: 100%;" src="img/muy-conservador.jpeg" alt="Muy Conservador">"`
        );
        break;
      case puntajeUsuario >= 12 && puntajeUsuario <= 21:
        $('#modalImage').html(
          `<img style="width: 100%;" src="img/conservador.jpeg" alt="Conservador">"`
        );
        break;
      case puntajeUsuario >= 22 && puntajeUsuario <= 33:
        $('#modalImage').html(
          `<img style="width: 100%;" src="img/moderado.jpeg" alt="Moderado">"`
        );
        break;
      case puntajeUsuario >= 34 && puntajeUsuario <= 43:
        $('#modalImage').html(
          `<img style="width: 100%;" src="img/agresivo.jpeg" alt="Agresivo">"`
        );
        break;
      case puntajeUsuario >= 44 && puntajeUsuario <= 53:
        $('#modalImage').html(
          `<img style="width: 100%;" src="img/muy-agresivo.jpeg" alt="Muy Agresivo">"`
        );
        break;

      default:
        $('#modalImage').html(
          `<img style="width: 100%;" src="img/especulativo.jpeg" alt="Especulativo">"`
        );
        break;
    }
  }

  function finTest() {
    reset_progressbar();
    guardarPuntaje();
    armarTarjeta();
    //Utilizo JQuery para mostrar el modal de la tarjeta del perfil inversor.
    $('#modalTarjeta').modal('show');
    $('#progressbar_wrapper').hide();
    content.innerHTML = `<div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" class="text-center"><h4>Fin del test</h4>
        <button id="retry" type="button" class="my-3 btn btn-primary btn-lg px-4 gap-3">Reintentar!</button></div>`;
    // Utilizo método click() de Jquery
    $('#retry').click(function () {
      startTest();
    });
  }
  calcularPerfil();
}

/*  Muy conservador: 0 a 11
    Conservador: 12 a 21
    Moderado: 22 a 33
    Agresivo: 34 a 43
    Muy Agresivo: 44 a 53
    Especulativo: 54 en adelante

*/
