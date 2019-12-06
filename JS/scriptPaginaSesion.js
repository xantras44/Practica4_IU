function cogerNombreUsuario() {
    alert(window.currentUser.name);
}

function abrirMenu() {
    var cajaMenu = document.getElementById("cajaMenu");
    cajaMenu.style.animation="slide";
    cajaMenu.style.animationDuration="0.5s";
    cajaMenu.style.visibility="visible";
    var cajaCerrarMenu = document.getElementById("cajaCerrarMenu");
    cajaCerrarMenu.style.visibility="visible";
    var menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.visibility="hidden";
}

function cerrarMenu() {
    var cajaMenu = document.getElementById("cajaMenu");
    cajaMenu.style.animation="slideCerrar";
    cajaMenu.style.animationDuration="0.5s";
    setTimeout(function(){cajaMenu.style.visibility="hidden"}, 500);
    var cajaCerrarMenu = document.getElementById("cajaCerrarMenu");
    cajaCerrarMenu.style.visibility= "hidden";
    var menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.visibility="visible";
} 
<<<<<<< Updated upstream

function mostrarNotificaciones() {
    var popUpNotificaciones = document.getElementById("popUpNotificaciones");
    popUpNotificaciones.style.visibility="visible";
    imagen = document.getElementById("numeroNotificaciones");
    padre = imagen.parentNode;
    padre.removeChild(imagen);
}
// Esto eh un comentario de Manuel-AA desde Pinto y para toda la mujere de Puelto Rico
=======
>>>>>>> Stashed changes

function añadirActividad(columna) {
    var titulo = prompt("Introduzca la actividad", "Spinning");
    var foto = prompt("Introduzca la foto", "https://i.blogs.es/dc3961/istock-918931148/450_1000.jpg");
    var descripcion = prompt("Introduzca la descripcion de la nueva actividad", "No se que es esto.");
    if (titulo == "" || titulo == null || descripcion == "" || descripcion == null) {
        alert("El titulo y la descripcion son obligatorio");
    }
    else {
        var cajaGrande = document.getElementById("columnaPrincipal" + columna);
        //var cajaGrande = document.getElementById("arrastrar" + nombre_columna);

        var button = document.getElementById("añadir" + columna);
        button.remove();
        
        var actividad = document.createElement("div");
        actividad.setAttribute("id", "actividad" + titulo);
        actividad.setAttribute("class", "actividad");
        cajaGrande.appendChild(actividad);

        cajaGrande.appendChild(button);
    }
}