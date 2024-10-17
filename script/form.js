
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
 
    if (telefono.value === "" || validar()) {
        if(telefono.value===""){
            var li = document.createElement("li")
            li.innerHTML = "* Falta ingresar un Telefono"
            errores.appendChild(li);
        }
    }

    if (deporte.value === "") {
        var li = document.createElement("li")
        li.innerHTML = "* seleccione una disciplina"
        errores.appendChild(li);
    }

    exito()
})

function exito() {
    if (apellido.value !== "" && nombre.value !== "" && deporte.value !== "") {
       
        fmr.reset();
        nombre.focus();
    }
}
function validar() {
    const numeros= /^[0-9]+$/;
    if (!numeros.test(telefono.value)) {
        var li = document.createElement("li")
        li.innerHTML = "* solo se puede ingresar numeros"
        errores.appendChild(li);
        telefono.focus();
    } 
}



