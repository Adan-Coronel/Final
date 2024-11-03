
let enviar = document.getElementById("enviar")
var errores = document.getElementById("ul-error")
var nombre = document.getElementById("nombres")
var apellido = document.getElementById("apellidos")
var deporte = document.getElementById("deporte")
var telefono = document.getElementById("tel")
var fmr = document.getElementById("fmr")
const datosEnviados = document.createElement("div");
datosEnviados.id = "datos-enviados";
fmr.parentNode.insertBefore(datosEnviados, fmr.nextSibling);


enviar.addEventListener("click", () => {
    errores.innerHTML = "";
    datosEnviados.innerHTML = "";
    if (nombre.value === "") {
        var li = document.createElement("li")
        li.innerHTML = "* Falta registrar nombre";
        errores.appendChild(li);
    }
    if (apellido.value === "") {
        var li = document.createElement("li")
        li.innerHTML = "* Falta registrar apellido";
        errores.appendChild(li);
    }

    if (telefono.value === "") {
        if (telefono.value === "") {
            var li = document.createElement("li")
            li.innerHTML = "* Falta ingresar un Telefono"
            errores.appendChild(li);
        }
    }

    validar();

    if (deporte.value === "") {
        var li = document.createElement("li")
        li.innerHTML = "* seleccione una disciplina"
        errores.appendChild(li);
    }


    if (errores.childNodes.length > 0) {
        var li = document.createElement("li");
        li.innerHTML = "Error al registrarse."
        errores.appendChild(li);
    } else { 
        mostrarDatosEnviados();
        fmr.reset();
    } 
    return
}
)

function validar() {
    const numeros = /^[0-9]+$/;
    if (!numeros.test(telefono.value)) {
        var li = document.createElement("li")
        li.innerHTML = "* solo se puede ingresar numeros"
        errores.appendChild(li);

        telefono.focus();
    }
}

function mostrarDatosEnviados() {
    datosEnviados.innerHTML = "";
    
    var titulo = document.createElement("h3");
    titulo.textContent = "¡Bienvenido nuevo socio!";
    datosEnviados.appendChild(titulo);

    var datos = [
        {label: "Nombre", value: nombre.value},
        {label: "Apellido", value: apellido.value},
        {label: "Teléfono", value: telefono.value},
        {label: "Deporte", value: deporte.options[deporte.selectedIndex].text}
    ];

    var ul = document.createElement("ul");
    datos.forEach(function(dato) {
        var li = document.createElement("li");
        li.textContent = dato.label + ": " + dato.value;
        ul.appendChild(li);
    });

    datosEnviados.appendChild(ul);
}