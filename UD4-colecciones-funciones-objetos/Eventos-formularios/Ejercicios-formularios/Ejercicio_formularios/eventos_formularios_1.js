// Obtener el formulario
const formulario = document.getElementById("newEvent");

// Contenedor de errores
const errores = document.getElementById("errores");
let listaErrores = errores.querySelector("ul"); // LISTA

// Evento "submit" para validar los campos del formulario al ser enviados
formulario.addEventListener("submit", e => {

    e.preventDefault(); // Evita enviar el formulario
    listaErrores.innerHTML = ""; // Limpiar errores previos
    let hayErrores = false;      // Estado general de errores

    // ----------- EJERCICIO 1: validar campo NOMBRE y APELLIDOS -------------------------------
    // VALIDAR NOMBRE
    let nombre = document.getElementById("name");

    if (nombre.validity.valueMissing) {
        nombre.setCustomValidity("El nombre es obligatiorio.");
        nombre.reportValidity();
        listaErrores.innerHTML += '<li>El nombre esta vacio. <li/>';

        if (!hayErrores) {
            hayErrores = true;
            nombre.focus();
        }
    } else {
        nombre.setCustomValidity("");
    }

    // VALIDAR APELLIDOS
    let apellido = document.getElementById("lastName");
    if (apellido.validity.valueMissing) {
        apellido.setCustomValidity("El apellido es obligatorio.");
        listaErrores.innerHTML += '<li>El apellido esta vacio.</li>';
        apellido.reportValidity();

        if (!hayErrores) {
            apellido.focus();
            hayErrores = true;
        }
    } else {
        apellido.setCustomValidity("");
    }

    // ----------- EJERCICIO 2: Validar campo EDAD ------------------------------
    let edad = document.getElementById("age");

    if (edad.validity.valueMissing) {
        edad.setCustomValidity("La edad es obligatoria");
        listaErrores.innerHTML += "<li>La edad está vacía.</li>";
        edad.reportValidity();

        if (!hayErrores) {
            edad.focus();
            hayErrores = true;
        }
    } else if (edad.validity.rangeUnderflow || edad.validity.rangeOverflow) {
        edad.setCustomValidity("La edad debe estar entre 0 y 105");
        listaErrores.innerHTML += `La edad no está en el rango válido ${edad.min} y ${edad.max}.`;
        edad.reportValidity();
    
        if (!hayErrores) {
            edad.focus();
            hayErrores = true;
        }

    } else {
        edad.setCustomValidity("");
    }

    // ----------- EJERCICIO 3: Validar campo NIF ------------------------------
    let nif = document.getElementById('nif');
    // Acepta al inicio de la cadena ocho dígitos del 0 al 9, seguidos de un guion obligatorio
    // y una letra de la A a la B al final.
    const reNIF = new RegExp("^[0-9]{8}-[A-Z]{1}$");

    if (nif.validity.valueMissing) {
        nif.setCustomValidity("El NIF es obligatorio");
        listaErrores.innerHTML += "<li>El NIF está vacío.</li>";
        nif.reportValidity();

        if (!hayErrores) {
            nif.focus();
            hayErrores = true;
        }
    } else if (!reNIF.test(nif.value)) {
        nif.setCustomValidity("Formato de NIF incorrecto");
        listaErrores.innerHTML += "<li>NIF inválido. Formato esperado: 12345678-A</li>";
        nif.reportValidity();

        if (!hayErrores) {
            nif.focus();
            hayErrores = true;
        }
    } else {
        nif.setCustomValidity("");
    }

    // ----------- EJERCICIO 4: Validar campo EMAIL ------------------------------
    let email = document.getElementById('email');

    // ------------- PATRON : use el pattern en el input de html --------------------
    /*
        [a-zA-Z0-9._+-]+  Usuario del email -> Acepta de la a-z (Min/May), numeros del 0-9 y simbolos como ".", "_", "+" y "-"
        @                 Símbolo @ obligatorio 
        [a-z0-9.-]+       Dominio -> Acepta caracteres de a-z, 0-9, "." y "-"
        \.                Punto obligatorio
        [a-z]{2,}         Extensión mínima de 2 letras -> Caracteres de a-z como minimo 2 veces
    */
    const patronEmail = /^[a-zA-Z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (email.validity.valueMissing) {
        email.setCustomValidity("El email es obligatorio.");
        listaErrores.innerHTML += '<li> Email vacio. </li>';
        email.reportValidity();

        if (!hayErrores) {
            email.focus();
            hayErrores = true;
        }
    } else if (!patronEmail.test(email.value)) {
        email.setCustomValidity("Formato de email invalido.");
        listaErrores.innerHTML += '<li>"Email con formato incorrecto."</li>';
        email.reportValidity();

        if (!hayErrores) {
            email.reportValidity();
            email.focus();
            hayErrores = true;
        }
    } else {
        email.setCustomValidity("");
    }

    // ----------- EJERCICIO 5: Validar campo PROVINCIAS ------------------------------
    let provincia = document.getElementById('provincia');

    if (provincia.validity.valueMissing) {
        provincia.setCustomValidity("La provincia es obligatoria.");
        provincia.reportValidity();
        listaErrores.innerHTML += '<li>Debe seleccionar una provincia.</li>'
        if (!hayErrores) {
            provincia.focus();
            hayErrores = true;
        }
    } else {
        provincia.setCustomValidity("");
    }

    // ----------- EJERCICIO 6: Validar campo GENERO ------------------------------
    const radios = document.querySelectorAll('input[name="eventType"]'); // Nombre del grupo "eventType"
    let seleccionado = false;

    // Recorre cada radio (genero: fe)
    radios.forEach(radio => {
        if (radio.checked) { 
            seleccionado = true;
            radio.setCustomValidity("")
        } 
    });

    // Si no es seleccionado devuelve null
    if (!seleccionado) {
        hayErrores = true;
        listaErrores.innerHTML += '<li>Debe seleccionar un genero.</li>';
        radios[0].setCustomValidity("Seleccione un genero.");
        radios[0].reportValidity();
        radios[0].focus();
    } else {
        radios[0].setCustomValidity("");
    }

    // ----------- EJERCICIO 7: Validar campo FECHA ------------------------------
    let fecha = document.getElementById('date');
    const formato1 = /^(0[1-9]|[12][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/;// dd-mm-aaaa.;
    //  ^(0[1-9]|[12][0-9]|3[0-1])- --> Acepta caracteres 01-09 y 10-31, ademas de un "-" obligatorio.
    //  (0[1-9]|1[0-2])-    --> Acepta entre 01-09 y 10-12, siguiendo un guion obligatorio.
    //  \d{4}$              --> Acepta cualquier digito cuatro veces, como parte final de la cadena.

    // Sigue el mismo formato con la diferencia de "-" a "/"
    const formato2 = /^(0[1-9]|[12][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/; // dd/mm/aaaa o 
    
    if(fecha.validity.valueMissing) {
        fecha.setCustomValidity("La fecha es obligatoria.");
        listaErrores.innerHTML += "<li>El campo fecha esta vacio.</li>";
        if(!hayErrores) {
            fecha.focus();
            hayErrores = true;
        }
    } else if(!formato1.test(fecha.value) && !formato2.test(fecha.value)) {
        fecha.setCustomValidity("La fecha no sigue el formato correcto");
        listaErrores.innerHTML += "<li>Fecha con formato incorrecto, seguir: dd/mm/aaa o dd-mm-aaaa</li>";
        fecha.reportValidity();
        if(!hayErrores) {
            fecha.focus();
            hayErrores = true;
        }
    } else {
        fecha.setCustomValidity("");
    }

    // ----------- EJERCICIO 8: Validar campo TELEFONO ---------------------------
    let telefono = document.getElementById('telefono');
    //  ^([9]|[6]|[7]){1} -->   Acepta 9, 6 o 7 una vez, al inicio de la cadena
    //  [0-9]{8}$         -->   Acepta del 0-9 ocho veces al final de la cadena.
    const formatoTlf = /^([9]|[6]|[7]){1}[0-9]{8}$/;

    if(telefono.validity.valueMissing) {
        telefono.setCustomValidity("El telefono es obligatorio.");
        listaErrores.innerHTML += "<li>El campo telefono esta vacio.</li>";
        telefono.reportValidity();

        if(!hayErrores) {
            telefono.focus();
            hayErrores = true;
        }
    } else if (!formatoTlf.test(telefono.value)) {
        telefono.setCustomValidity("El telefono no sigue el patron correcto.");
        listaErrores.innerHTML += "<li>Formato incorrecto para telefono. Coreccto: 9 digitos maximo, el primer digito (9,6,7).</li>";
        telefono.reportValidity();

        if(!hayErrores) {
            telefono.focus();
            hayErrores = true;
        }
    } else {
        telefono.setCustomValidity("");
    }

    // ----------- EJERCICIO 9: Validar campo HORA ------------------------------
    let hora = document.getElementById('time');
    const formatoTime = /^(0[0-9]|[1][0-9]|[2][0-3]):(0[0-9]|[1-5][0-9]|)$/;
    //  0[0-9]|[1][0-9] --> Acepta del 00-09, del 10-19
    //  |[2][0-4])      --> 20-24
    //  : (...) --> Dos puntos obligatorio.
    //  Los caracteres validos se aceptan numeros entre:
    //  0[0-9]  --> Acepta un formato de 00-09
    //  [1-5][0-9]  --> Acepta caracteres del 10-59
    
    if (hora.validity.valueMissing) {
        hora.setCustomValidity("La hora es obligatorio.");
        listaErrores.innerHTML += "<li>El campo hora esta vacio.</li>";
        hora.reportValidity();

        if(!hayErrores) {
            hora.focus();
            hayErrores = true;
        }

    } else if (!formatoTime.test(hora.value)) {
        hora.setCustomValidity("La hora tiene el formato incorrecto.");
        listaErrores.innerHTML += "<li>El campo hora no sigue el formato correcto (hh:mm)(24h).</li>";
        hora.reportValidity();

        if(!hayErrores) {
            hora.focus();
            hayErrores = true;
        }
    } else {
        hora.setCustomValidity("");
    }

    // ----------- EJERCICIO 10: Envio válido si son correctos todos los campos ------------------------------
    if (!hayErrores) {
        // Si todo es correcto, eliminamos la lista del contenedor "errorDiv".
        errores.removeChild(listaErrores);
        errores.classList.remove("activo");
        // Si todo es válido → envío manual
        formulario.submit();
        
    } else {
        // Al haber errores se agrega la lista al contenedor "errorDiv"
        errores.appendChild(listaErrores);
        errores.classList.add("activo");
    }
    
});
