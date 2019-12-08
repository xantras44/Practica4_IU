/*Función para hacer que el menú aparézca desde el margen izquierdo con una animación además de ocultar la lista de filtros si está visible*/
function abrirMenu() {
    var popUpFiltros = document.getElementById("popUpFiltros");
    if(localStorage.getItem("Usuario") != null){
        var nombreUsuario = localStorage.getItem("Usuario");
        document.getElementById("nombrePerfil").textContent = nombreUsuario;
    }
    else{
        document.getElementById("nombrePerfil").textContent = "Mi perfil";   
    }
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

/*Función para hacer que el menú se esconda por el margen izquierdo con la animación inversa a la de salida además de ocultar la lista de filtros si está visible*/
function cerrarMenu() {
    var popUpFiltros = document.getElementById("popUpFiltros");
    if(popUpFiltros.style.visibility == "visible"){
        cerrarFiltros();
    }
    var cajaNoticias = document.getElementById("cajaNoticias")
    if(cajaNoticias.style.visibility == "visible"){
        cerrarNoticias();
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

/*Función utilizada para mostrar la lista de posibles filtros además de ocultar la lista de filtros si está visible*/
function mostrarFiltros() {
    var filtro = document.getElementById("popUpFiltros");
    if(filtro.style.visibility == "visible"){
        cerrarFiltros();
    }
    else{
        filtro.style.visibility="visible";
    }
}

/*Función utilizada para ocultar la lista de filtros*/
function cerrarFiltros() {
    var popUpFiltros = document.getElementById("popUpFiltros");
    popUpFiltros.style.visibility="hidden";
}

/*Función utilizada para cambiar la palabra "Filtro por "Popularidad" para indicar que el filtro activo es el de Popularidad además de ocultar la lista de filtros si está visible*/
function ponerPopularidad(){
    var filtro = document.getElementById("filtro");
    filtro.innerHTML = "Popularidad";
    cerrarFiltros();
}

/*Función utilizada para cambiar la palabra "Filtro por "Antiguedad" para indicar que el filtro activo es el de Antiguedad además de ocultar la lista de filtros si está visible*/
function ponerFecha(){
    var filtro = document.getElementById("filtro");
    filtro.innerHTML = "Antigüedad";
    cerrarFiltros();
}

/*Función utilizada para cambiar la palabra "Filtro por "A-Z" para indicar que el filtro activo es el de Órden alfabético además de ocultar la lista de filtros si está visible*/
function ponerAZ(){
    var filtro = document.getElementById("filtro");
    filtro.innerHTML = "A-Z";
    cerrarFiltros();
}

/*Función para cambiar la visibilidad de las notificaciones del usuario (mostarlas y acultarlas) además de ocultar la lista de filtros si está visible*/
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

/*Función que cambia el color del link de la miga de pan por el que se pase el ratón por encima*/
function colorMiga(numero) {
    document.getElementById("miga" + numero).style.color = "rgb(100, 88, 214)";
}
/*Función para que el link de la miga de pan que se le ha pasado el ratón por encima recupere su color original cuando el ratón se quite de encima suya*/
function volverMiga(numero) {
    document.getElementById("miga" + numero).style.color = "white";
}

/*Redirige a la página de inicio de sesión además de ocultar la lista de filtros si está visible*/
function cerrarSesion(){
    var popUpFiltros = document.getElementById("popUpFiltros");
    if(popUpFiltros.style.visibility == "visible"){
        cerrarFiltros();
    }
    location.href ="PáginaInicio.html";
}

/*Función utilizada para abrir la página de las políticas*/
function abrirPoliticas(){
    document.getElementById("cajaPoliticas").style.visibility = "visible";
    cerrarMenu();
    document.getElementById("cajaPoliticas").style.zIndex = "3";
}

/*Funcion utilizada para cerrar la pagina de las politicas */
function cerrarPoliticas(){
    document.getElementById("cajaPoliticas").style.zIndex = "1";
    document.getElementById("cajaPoliticas").style.visibility = "hidden";
}

/*Funcion utilizada para abrir el perfil del usuario*/
function abrirPerfil(){
    var cajaNoticias = document.getElementById("cajaNoticias");
    if(cajaNoticias.style.visibility == "visible"){
        cerrarNoticias();
    }
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
    document.getElementById("cajaPerfil").style.visibility = "visible";
    if(localStorage.getItem("Usuario") != null){
        var nombreUsuario = localStorage.getItem("Usuario");
        document.getElementById("textoPerfil").textContent = nombreUsuario;
        }
    else{
        document.getElementById("textoPerfil").textContent = "Mi usuario";   
        }
    if(localStorage.getItem("email") != null){
            var email = localStorage.getItem("email");
            document.getElementById("textoPerfilEmail").textContent = "email: " + email;
        }
    else{
            document.getElementById("textoPerfilEmail").textContent = "email: " + "Mi email";
        }
    document.getElementById("textoPerfil").style.visibility = "visible";
    document.getElementById("editar").style.visibility = "visible";
}

/*Funcion utilizada para cerrar el perfil del usuario*/
function cerrarPerfil(){
    if(document.getElementById("editar").style.visibility == "visible"){
        document.getElementById("editar").style.visibility = "hidden";
    }
    if(document.getElementById("tickVerde").style.visibility == "visible"){
        document.getElementById("tickVerde").style.visibility = "hidden";
    }
    if(document.getElementById("tickRojo").style.visibility == "visible"){
        document.getElementById("tickRojo").style.visibility = "hidden";
    }
    if(document.getElementById("textoPerfil").style.visibility == "visible"){
        document.getElementById("textoPerfil").style.visibility = "hidden";
    }
    if(document.getElementById("textoCambiado").style.visibility == "visible"){
        document.getElementById("textoCambiado").style.visibility = "hidden";
    }
    document.getElementById("cajaPerfil").style.visibility = "hidden";
}

/*Funcion utilizada para abrir el popup con las opciones para cambiar la foto de perfil*/
function abrirOpcionesFoto(){
    cerrarPerfil();
    document.getElementById("cambioFoto").style.visibility = "visible";
}

/*Funcion utilizada para cambiar la foto de perfil*/
function cambiarFoto(numero){
    document.getElementById("fotoPerfil").src = "IMG/opcionFoto" + numero + ".jpg";
    document.getElementById("fotoPerfil").style.height = "40%";   
    document.getElementById("cambioFoto").style.visibility = "hidden";
    document.getElementById("fotoMenu").src = "IMG/opcionFoto" + numero + ".jpg";
    document.getElementById("fotoMenu").style.width = "12%";
    abrirPerfil();
}

/*Funcion utilizada para poder cerrar el popup de cambio de foto de perfil si no se quiere cambiar*/
function cerrarOpciones(){
    document.getElementById("editar").style.visibility = "visible";
    document.getElementById("tickVerde").style.visibility = "hidden";
    document.getElementById("tickRojo").style.visibility = "hidden";
    document.getElementById("textoPerfil").style.visibility = "visible";
    document.getElementById("textoCambiado").style.visibility = "hidden";
    document.getElementById("cajaPerfil").style.visibility = "visible";
    document.getElementById("cambioFoto").style.visibility = "hidden";
}

/*Funcion utilizada para poder cambiar el nombre de usuario*/
function editarNombre(){
    document.getElementById("editar").style.visibility = "hidden";
    document.getElementById("tickVerde").style.visibility = "visible";
    document.getElementById("tickRojo").style.visibility = "visible";
    var aux = document.getElementById("textoPerfil").textContent;
    document.getElementById("textoCambiado").textContent = aux;
    document.getElementById("textoCambiado").style.color = "blue";
    document.getElementById("textoPerfil").style.visibility = "hidden";
    document.getElementById("textoCambiado").style.visibility = "visible";
}

/*Funcion utilizada para aceptar el cambio a la hora de cambiar el nombre de usuario*/
function aceptarNombre(){
    var aux = document.getElementById("textoCambiado").textContent;
    document.getElementById("textoPerfil").textContent = aux;
    document.getElementById("textoPerfil").style.visibility = "visible";
    document.getElementById("textoCambiado").style.visibility = "hidden";
    document.getElementById("editar").style.visibility = "visible";
    document.getElementById("tickVerde").style.visibility = "hidden";
    document.getElementById("tickRojo").style.visibility = "hidden";
    localStorage.setItem("Usuario", aux);
}

/*Funcion utilizada para rechazar el cambio a la hora de cambiar el nombre de usuario*/
function rechazarNombre(){
    document.getElementById("textoPerfil").style.visibility = "visible";
    document.getElementById("textoCambiado").style.visibility = "hidden";
    document.getElementById("editar").style.visibility = "visible";
    document.getElementById("tickVerde").style.visibility = "hidden";
    document.getElementById("tickRojo").style.visibility = "hidden";
}

/*Redirige a la pagina del tablon en la seccion "Mi tablon de eventos" del menu desplegable*/
function abrirTablon(){
    location.href ="paginaTablon.html";
}

/*Funcion utilizada para que aparezcan las secciones de noticias*/
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

/*Redirige a otra pagina en la seccion de noticias del menu desplegable*/
function Esportmaniacos(){
    location.href = "https://www.esportmaniacos.com/";
}

/*Redirige a otra pagina en la seccion de noticias del menu desplegable*/
function LVP(){
    location.href = "https://www.lvp.es/";
}

/*Redirige a otra pagina en la seccion de noticias del menu desplegable*/
function ESL(){
    location.href = "https://play.eslgaming.com/spain";
}

/*Funcion utilizada para que desaparezcan las secciones de noticias*/
function cerrarNoticias(){
    var cerrarNoticias = document.getElementById("cajaNoticias");
    document.getElementById("colorNoticia").style.borderColor = "";
    cerrarNoticias.style.visibility="hidden";
}

/*Redirige a otra pagina en la seccion "Campeonatos" del menu desplegable*/
function verCampeonatos(){
    location.href = "https://esports.as.com/otros/Agenda-esports-torneos-competiciones-hoy_0_1102989697.html";
}

/*Funcion utilizada para abrir el popup de una actividad*/
var variable;
function openpopup(a) {
    var i = 1;
    while(i<10){
        closepopup(i);
        i++;
    }
    variable = document.getElementById("popup"+a);
    variable.classList.add("show");
}

/*Funcion utilizada para cerrar el popup de una actividad*/
function closepopup(a){
    variable = document.getElementById("popup"+a);
    if(variable!=null){
        variable.classList.remove("show");
    }
}

/*Funcion utilizada para eliminar una actividad*/
function closebox(a){
    if (window.confirm("¿Seguro que quieres borrar la caja?")) {
        variable = document.getElementById("caja"+a);
        if(a==1){
            cajaExtra = variable.cloneNode(true);
        }
        variable.remove();
    } else {}
}

/*Funcion utilizada para que al pulsar enviar coja al usuario y coloque el mensaje en el chat enviado por ese usuario*/
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
  /*Funcion utilizada para que al pasar el raton por encima de una estrella no marcada se rellene junto con las anteriores*/
  function cambiarEstrella(numero, caja){
    if(document.getElementById("estrella" + numero + caja) != null){
        while (numero != 0){
        document.getElementById("estrella" + numero + caja).src="IMG/estrellaRellena.png";
        numero--;
        }
    }
}

/*Funcion utilizada para que al quitar el raton de una estrella no marcada se vacie tanto ella como las anteriores no marcadas*/
function volverEstrella(numero, caja){
    if(document.getElementById("estrella" + numero + caja) != null){
        while(numero != 0){
        document.getElementById("estrella" + numero + caja).src="IMG/estrellaVacia.png";
        numero--;
        }
    }
}

/*Funcion utilizada para que al pulsar sobre una estrella se marquen tanto ella como las anteriores*/
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