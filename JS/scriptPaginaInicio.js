function registrarse() {
    var cajaFormularioRegistro = document.getElementById("cajaFormularioRegistro");
    cajaFormularioRegistro.style.visibility="visible";
    var cajaFormularioIniciarSesion = document.getElementById("cajaFormularioIniciarSesion");
    cajaFormularioIniciarSesion.style.visibility="hidden";
    var cajaFormularioIniciarSesion2 = document.getElementById("cajaFormularioIniciarSesion2");
    cajaFormularioIniciarSesion2.style.visibility="hidden";
    var cajaRegistroCompletado = document.getElementById("cajaRegistroCompletado");
    cajaRegistroCompletado.style.visibility="hidden";
    var cajaFormularioRegistro = document.getElementById("contenidoUserNoRegistrado");
    cajaFormularioRegistro.style.visibility="hidden";
    var cajaFormularioRegistro = document.getElementById("IniciarSesion");
    cajaFormularioRegistro.style.visibility="hidden";
    var cajaFormularioRegistro = document.getElementById("Registrarse");
    cajaFormularioRegistro.style.visibility="hidden";
}

function iniciarSesion() {
    var cajaFormularioLogIn2 = document.getElementById("cajaFormularioIniciarSesion2");
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

function buscarCookie() {
    event.preventDefault();
    var numero = 1;
    var email = getCookie("email" + numero);
    var encontrado = 0;
    var numeroCont = 0;
    while(getCookie("email" + numero) != ""){
        if (email == document.forms["formularioLogIn"]["email"].value) {
            encontrado = 1;
            numeroCont = numero;
        }
        numero = numero + 1;
        email = getCookie("email" + numero);
    }
    if (encontrado == 1){
        var contraseña = getCookie("contraseña" + numeroCont);
            if (contraseña == document.forms["formularioLogIn"]["contraseña"].value) {
                alert("Has iniciado sesion.");
                var usuario = getCookie("nombreUsuario" + numeroCont);
                document.getElementById("userName").textContent= usuario;
                var cajaFormularioIniciarSesion = document.getElementById("cajaFormularioIniciarSesion");
                cajaFormularioIniciarSesion.style.visibility="hidden";
                location.href ="PáginaSesión.html";
                /*var columna = document.getElementById("cajaIzquierda");
                columna.style.visibility= "visible";
                var columna = document.getElementById("cajaCentral");
                columna.style.visibility= "visible";
                var columna = document.getElementById("cajaDerecha");
                columna.style.visibility= "visible";
                var cerrarSesion = document.getElementById("cerrarSesion");
                cerrarSesion.style.visibility= "visible";
                var footer = document.getElementById("cajaFooter");
                footer.style.visibility= "visible";
                var inicio = document.getElementById("iniciarSesion");
                inicio.remove();
                var registro = document.getElementById("registrarse");
                registro.remove();*/
            }
            else{
                alert("Contraseña incorrecta.");
            }
        }
    else {
        alert("Registrate para poder acceder.");
    }
}

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
    //if (username != "" && username != null) {
        document.cookie= "nombreUsuario" + numero + "=" + document.forms["formularioRegistrarse"]["nombreFormulario"].value + ";"
        document.cookie= "email" + numero + "=" + document.forms["formularioRegistrarse"]["email"].value + ";"
        document.cookie= "contraseña" + numero + "=" + document.forms["formularioRegistrarse"]["contraseña"].value + ";"
        var cajaFormularioIniciarSesion = document.getElementById("cajaFormularioRegistro");
        cajaFormularioIniciarSesion.style.visibility="hidden";
        var cajaFormularioIniciarSesion = document.getElementById("cajaFormularioIniciarSesion");
        cajaFormularioIniciarSesion.style.visibility="visible";
        var cajaRegistroCompletado = document.getElementById("cajaRegistroCompletado");
        cajaRegistroCompletado.style.visibility="visible";
    //}
}