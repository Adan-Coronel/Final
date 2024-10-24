
let enviar = document.getElementById("enviar")
var errores = document.getElementById("ul-error")
var nombre = document.getElementById("nombres")
var apellido = document.getElementById("apellidos")
var deporte = document.getElementById("deporte")
var telefono = document.getElementById("tel")
var fmr = document.getElementById("fmr")


enviar.addEventListener("click", () => {
    errores.innerHTML = "";
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
        var li = document.createElement("li");
        li.innerHTML = "Exito al registrarse."
        errores.appendChild(li);
        fmr.reset();
        nombre.focus();
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