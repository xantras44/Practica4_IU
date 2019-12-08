function abrirMenu() {
    if(localStorage.getItem("Usuario") != null){
        var nombreUsuario = localStorage.getItem("Usuario");
        document.getElementById("nombrePerfil").textContent = nombreUsuario;
    }
    else{
        document.getElementById("nombrePerfil").textContent = "Mi perfil";   
    }
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


function colorMiga(numero) {
    document.getElementById("miga" + numero).style.color = "rgb(100, 88, 214)";
}

function volverMiga(numero) {
    document.getElementById("miga" + numero).style.color = "white";
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
    var popUpNotificaciones = document.getElementById("popUpNotificaciones");
    if(popUpNotificaciones.style.visibility == "visible"){
        popUpNotificaciones.style.visibility="hidden";
        popUpNotificaciones.style.animation="slideCerrarInv";
        popUpNotificaciones.style.animationDuration="0.5s";
    }
    else{
        popUpNotificaciones.style.visibility="visible";
        popUpNotificaciones.style.animation="slideInv";
        popUpNotificaciones.style.animationDuration="0.5s";
        imagen = document.getElementById("numeroNotificaciones");
        padre = imagen.parentNode;
        padre.removeChild(imagen);
    }
    var popUpFiltros = document.getElementById("popUpFiltros");
    if(popUpFiltros.style.visibility == "visible"){
        cerrarFiltros();
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
    location.href ="paginaTablon.html";
}

function abrirNoticias(){
    var cajaNoticias = document.getElementById("cajaNoticias");
    if(cajaNoticias.style.visibility == "visible"){
        cerrarNoticias();
    }
    else{
    document.getElementById("colorNoticia").style.borderColor = "blue";
    document.getElementById("cajaNoticias").style.visibility = "visible";
    document.getElementById("cajaNoticias").style.zIndex = "2";
    }
}

function Esportmaniacos(){
    location.href = "https://www.esportmaniacos.com/";
}

function LVP(){
    location.href = "https://www.lvp.es/";
}

function ESL(){
    location.href = "https://play.eslgaming.com/spain";
}

function cerrarNoticias(){
    var cerrarNoticias = document.getElementById("cajaNoticias");
    document.getElementById("colorNoticia").style.borderColor = "";
    cerrarNoticias.style.visibility="hidden";
}

function verCampeonatos(){
    location.href = "https://esports.as.com/otros/Agenda-esports-torneos-competiciones-hoy_0_1102989697.html";
}

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

function cogerTexto(numero){
    var usuario = localStorage.getItem("Usuario");
    if (usuario != null){
    var a = usuario + ": " + (document.getElementById("barra" + numero).textContent);
    }
    else{
    var a = "Invitado: " + (document.getElementById("barra" + numero).textContent);    
    }
    var texto = document.createElement("div");
    texto.setAttribute("class", "textoChat");
    texto.textContent = a;
    document.getElementById("barra" + numero).style.marginTop = "2%";
    document.getElementById("enviar" + numero).style.marginTop = "2%";
    var contenedor = document.getElementById("chat" + numero);
    contenedor.insertBefore( texto, document.getElementById("barra" + numero));
  }

  function cambiarEstrella(numero, caja){
    if(document.getElementById("estrella" + numero + caja) != null){
        while (numero != 0){
        document.getElementById("estrella" + numero + caja).src="IMG/estrellaRellena.png";
        numero--;
        }
    }
}

function volverEstrella(numero, caja){
    if(document.getElementById("estrella" + numero + caja) != null){
        while(numero != 0){
        document.getElementById("estrella" + numero + caja).src="IMG/estrellaVacia.png";
        numero--;
        }
    }
}

function valorar(numero, caja){

    if (document.getElementById("estrellaAcabada" + numero + caja) != null){
        numero++;
        while(numero != 6){
            document.getElementById("estrellaAcabada" + numero + caja).src="IMG/estrellaVacia.png";
            document.getElementById("estrellaAcabada" + numero + caja).className="estrellas";
            document.getElementById("estrellaAcabada" + numero + caja).id="estrella" + numero + caja;
            numero++;
        }
    }

    if (document.getElementById("estrella" + numero + caja) != null){
        while(numero != 0){
        document.getElementById("estrella" + numero + caja).src="IMG/estrellaRellena.png";
        document.getElementById("estrella" + numero + caja).className="estrellas";
        document.getElementById("estrella" + numero + caja).id="estrellaAcabada" + numero + caja;
        numero--;
        }
    }
}

function añadirCategoria(){
    var categoria;
    categoria = prompt("Introduzca el nombre de la categoria", "Mis eventos")
    if (categoria == "") {
        alert("El nombre es obligatorio");
    }
    else{
        var cajaGrande = document.getElementById("miTablon");
        var nuevaCategoria = document.createElement("div");
        nuevaCategoria.setAttribute("class", "categoria");
        cajaGrande.appendChild(nuevaCategoria);
        var nombreCategoria = document.createElement("div");
        nuevaCategoria.appendChild(nombreCategoria);
        nombreCategoria.innerHTML = categoria;
        var opcion = document.createElement("img");
        opcion.setAttribute("class", "opcionesCaja");
        opcion.setAttribute("src", "IMG/3Puntos.png");
        nuevaCategoria.appendChild(opcion);
        window.alert("Se ha creado correctamente")
    }
}

function archivarCategoria(numCategoria) {
    var categoria = document.getElementById("categoria" + numCategoria);
    padre = categoria.parentNode;
    padre.removeChild(categoria);
}

