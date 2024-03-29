/*Funcion utilizada para abrir formulario de registrarse*/
function registrarse() {
    var cajaFormularioRegistro = document.getElementById("cajaFormularioRegistro");
    cajaFormularioRegistro.style.visibility="visible";
    var cajaFormularioIniciarSesion = document.getElementById("cajaFormularioIniciarSesion");
    cajaFormularioIniciarSesion.style.visibility="hidden";
    var cajaRegistroCompletado = document.getElementById("cajaRegistroCompletado");
    cajaRegistroCompletado.style.visibility="hidden";
    var cajaFormularioRegistro = document.getElementById("contenidoUserNoRegistrado");
    cajaFormularioRegistro.style.visibility="hidden";
    var cajaFormularioRegistro = document.getElementById("IniciarSesion");
    cajaFormularioRegistro.style.visibility="hidden";
    var cajaFormularioRegistro = document.getElementById("Registrarse");
    cajaFormularioRegistro.style.visibility="hidden";
}
/*Funcion utilizada para abrir formulario de iniciar sesion*/
function iniciarSesion() {
    var cajaFormularioLogIn2 = document.getElementById("cajaFormularioIniciarSesion");
    cajaFormularioIniciarSesion.style.marginTop = "2%";
    cajaFormularioLogIn2.style.visibility="visible";
    var cajaFormularioRegistro = document.getElementById("cajaFormularioRegistro");
    cajaFormularioRegistro.style.visibility="hidden";
    var cajaFormularioRegistro = document.getElementById("contenidoUserNoRegistrado");
    cajaFormularioRegistro.style.visibility="hidden";
    var cajaFormularioRegistro = document.getElementById("IniciarSesion");
    cajaFormularioRegistro.style.visibility="hidden";
    var cajaFormularioRegistro = document.getElementById("Registrarse");
    cajaFormularioRegistro.style.visibility="hidden";
}

/*Funcion utilizada para cerrar formularios de registrarse e iniciar sesion*/
function cerrarTodo(){
    var cajaFormularioLogIn2 = document.getElementById("cajaFormularioIniciarSesion");
    cajaFormularioLogIn2.style.visibility = "hidden";
    var cajaFormularioRegistro = document.getElementById("cajaFormularioRegistro");
    cajaFormularioRegistro.style.visibility = "hidden";
    var cajaRegistroCompletado = document.getElementById("cajaRegistroCompletado");
    cajaRegistroCompletado.style.visibility="hidden";
    var cajaFormularioRegistro = document.getElementById("contenidoUserNoRegistrado");
    cajaFormularioRegistro.style.visibility="visible";
    var cajaFormularioRegistro = document.getElementById("IniciarSesion");
    cajaFormularioRegistro.style.visibility="visible";
    var cajaFormularioRegistro = document.getElementById("Registrarse");
    cajaFormularioRegistro.style.visibility="visible";
    document.forms["formularioRegistrarse"]["nombreUsuario"].value = "";
    document.forms["formularioRegistrarse"]["email"].value = "";
    document.forms["formularioRegistrarse"]["contraseña"].value = "";
    document.forms["formularioIniciarSesion"]["email"].value = "";
    document.forms["formularioIniciarSesion"]["contraseña"].value = "";
}

var emails;
/*Funcion utilizada para comprobar que haya un usuario registrado con un email*/
function buscarCookie() {
    event.preventDefault();
    var numero = 1;
    var email = getCookie("email" + numero);
    var encontrado = 0;
    var numeroCont = 0;
    while(getCookie("email" + numero) != ""){
        if (email == document.forms["formularioIniciarSesion"]["email"].value) {
            encontrado = 1;
            numeroCont = numero;
        }
        numero = numero + 1;
        email = getCookie("email" + numero);
    }
    if (encontrado == 1){
        var contraseña = getCookie("contraseña" + numeroCont);
            if (contraseña == document.forms["formularioIniciarSesion"]["contraseña"].value) {
                emails = email;
                var nombreUser = getCookie("nombreUsuario" + numeroCont);
                localStorage.setItem("Usuario", nombreUser);
                var email2 = getCookie("email" + numeroCont);
                localStorage.setItem("email", email2);
                location.href ="PáginaSesión.html";
            }
            else{
                alert("Contraseña incorrecta.");
            }
        }
    else {
        alert("Registrate para poder acceder.");
    }
}

window.currentUser = {name: emails};

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cemail) {
    var email = cemail + "=";
    var decCookie = decodeURIComponent(document.cookie);
    var matriz = decCookie.split(';');
    for(var i = 0; i <matriz.length; i++) {
        var a = matriz[i];
        while (a.charAt(0) == ' ') {
            a = a.substring(1);
        }
        if (a.indexOf(email) == 0) {
            return a.substring(email.length, a.length);
        }
    }
    return "";
}

/*Funcion utilizada para registrarse y guardar datos*/
function comprobarCookie() {
    event.preventDefault();
    var numero = 0;
    var email = getCookie("email" + numero);
    do{
        if (email == document.forms["formularioRegistrarse"]["email"].value) {
            alert("Ya existe una cuenta asociada al correo: " + email);
            return;
        }
        numero = numero + 1;
        email = getCookie("email" + numero);
    }
    while (getCookie("email" + numero)!="");
    document.cookie= "nombreUsuario" + numero + "=" + document.forms["formularioRegistrarse"]["nombreFormulario"].value + ";"
    document.cookie= "email" + numero + "=" + document.forms["formularioRegistrarse"]["email"].value + ";"
    document.cookie= "contraseña" + numero + "=" + document.forms["formularioRegistrarse"]["contraseña"].value + ";"
    var cajaFormularioIniciarSesion = document.getElementById("cajaFormularioRegistro");
    cajaFormularioIniciarSesion.style.visibility="hidden";
    var cajaFormularioIniciarSesion = document.getElementById("cajaFormularioIniciarSesion");
    cajaFormularioIniciarSesion.style.marginTop = "10%";
    cajaFormularioIniciarSesion.style.visibility="visible";
    var cajaRegistroCompletado = document.getElementById("cajaRegistroCompletado");
    cajaRegistroCompletado.style.visibility="visible";
    document.forms["formularioIniciarSesion"]["email"].value = "";
    document.forms["formularioIniciarSesion"]["contraseña"].value = "";
}
