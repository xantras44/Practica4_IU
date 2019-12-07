function cogerNombreUsuario() {
    alert(window.currentUser.name);
}

function abrirMenu() {
    var popUpFiltros = document.getElementById("popUpFiltros");
    if(popUpFiltros.style.visibility == "visible"){
        cerrarFiltros();
    }
    var cajaMenu = document.getElementById("cajaMenu");
    if(cajaMenu.style.visibility == "visible"){
        cerrarMenu();
    }
    else{
        cajaMenu.style.animation="slide";
        cajaMenu.style.animationDuration="0.5s";
        cajaMenu.style.visibility="visible";
        var cajaCerrarMenu = document.getElementById("cajaCerrarMenu");
        cajaCerrarMenu.style.visibility="visible";
        var cajaCerrarMenu2 = document.getElementById("cajaCerrarMenu2");
        cajaCerrarMenu2.style.visibility="visible";
    }
}

function cerrarMenu() {
    var popUpFiltros = document.getElementById("popUpFiltros");
    if(popUpFiltros.style.visibility == "visible"){
        cerrarFiltros();
    }
    var cajaMenu = document.getElementById("cajaMenu");
    cajaMenu.style.animation="slideCerrar";
    cajaMenu.style.animationDuration="0.5s";
    setTimeout(function(){cajaMenu.style.visibility="hidden"}, 500);
    var cajaCerrarMenu = document.getElementById("cajaCerrarMenu");
    cajaCerrarMenu.style.visibility= "hidden";
    var cajaCerrarMenu2 = document.getElementById("cajaCerrarMenu2");
    cajaCerrarMenu2.style.visibility= "hidden";
    var menuPrincipal = document.getElementById("menuPrincipal");
    menuPrincipal.style.visibility="visible";
}

function mostrarFiltros() {
    var filtro = document.getElementById("filtro");
    if(popUpFiltros.style.visibility == "visible"){
        cerrarFiltros();
    }
    else{
        popUpFiltros.style.visibility="visible";
    }
}

function cerrarFiltros() {
    var popUpFiltros = document.getElementById("popUpFiltros");
    popUpFiltros.style.visibility="hidden";
}

function ponerPopularidad(){
    var filtro = document.getElementById("filtro");
    filtro.innerHTML = "Popularidad";
    cerrarFiltros();
}
function ponerFecha(){
    var filtro = document.getElementById("filtro");
    filtro.innerHTML = "Antigüedad";
    cerrarFiltros();
}
function ponerAZ(){
    var filtro = document.getElementById("filtro");
    filtro.innerHTML = "A-Z";
    cerrarFiltros();
}

function mostrarNotificaciones() {
    var popUpFiltros = document.getElementById("popUpFiltros");
    if(popUpFiltros.style.visibility == "visible"){
        cerrarFiltros();
    }
    var popUpNotificaciones = document.getElementById("popUpNotificaciones");
    if(popUpNotificaciones.style.visibility == "visible"){
        popUpNotificaciones.style.visibility="hidden";
    }
    else{
        popUpNotificaciones.style.visibility="visible";
        imagen = document.getElementById("numeroNotificaciones");
        padre = imagen.parentNode;
        padre.removeChild(imagen);
    }
}
// Esto eh un comentario de Manuel-AA desde Pinto y para toda la mujere de Puelto Rico

function añadirActividad(columna) {
    var popUpFiltros = document.getElementById("popUpFiltros");
    if(popUpFiltros.style.visibility == "visible"){
        cerrarFiltros();
    }
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

function cerrarSesion(){
    var popUpFiltros = document.getElementById("popUpFiltros");
    if(popUpFiltros.style.visibility == "visible"){
        cerrarFiltros();
    }
    location.href ="PáginaInicio.html";
}

function abrirTablon(){
    var cajaIzquierda = document.getElementById("columnaPrincipalIzquierda");
    cajaIzquierda.style.visibility = "hidden";
    var cajaDerecha = document.getElementById("columnaPrincipalDerecha");
    cajaDerecha.style.visibility = "hidden";
    var menu = document.getElementById("cajaMenu");
    menu.style.visibility = "hidden";
    var cerrarmenu = document.getElementById("cajaCerrarMenu");
    cerrarmenu.style.visibility = "hidden";
    var cerrarmenu2 = document.getElementById("cajaCerrarMenu2");
    cerrarmenu2.style.visibility = "hidden";
    var tablon = document.getElementById("miTablon");
    tablon.style.visibility = "visible";

}

var variable;
var cajaExtra; /*Se usa para añadir cajas*/
function openpopup(a) {
    var i = 1;
    while(i<10){
        closepopup(i);
        i++;
    }
    variable = document.getElementById("popup"+a);
    variable.classList.add("show");
}
function closepopup(a){
    variable = document.getElementById("popup"+a);
    if(variable!=null){
        variable.classList.remove("show");
    }
}
function closebox(a){
    if (window.confirm("¿Seguro que quieres borrar la caja?")) {
        variable = document.getElementById("caja"+a);
        if(a==1){
            cajaExtra = variable.cloneNode(true);
        }
        variable.remove();
    } else {}
}