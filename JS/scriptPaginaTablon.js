/*Función para hacer que el menú aparézca desde el margen izquierdo con una animación además de ocultar la lista de filtros si está visible*/
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
    document.getElementById("cajaMenu").style.zIndex = "3";
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

/*Función que cambia el color del link de la miga de pan por el que se pase el ratón por encima*/
function colorMiga(numero) {
    document.getElementById("miga" + numero).style.color = "rgb(100, 88, 214)";
}

/*Función para que el link de la miga de pan que se le ha pasado el ratón por encima recupere su color original cuando el ratón se quite de encima suya*/
function volverMiga(numero) {
    document.getElementById("miga" + numero).style.color = "white";
}

/*Función utilizada para mostrar la lista de posibles filtros además de ocultar la lista de filtros si está visible*/
function mostrarFiltros() {
    var filtro = document.getElementById("filtro");
    if(popUpFiltros.style.visibility == "visible"){
        cerrarFiltros();
    }
    else{
        popUpFiltros.style.visibility="visible";
    }
}

/*Función utilizada para ocultar la lista de filtros*/
function cerrarFiltros() {
    var popUpFiltros = document.getElementById("popUpFiltros");
    popUpFiltros.style.visibility="hidden";
}

/*Función utilizada para cambiar la palabra "Filtro por "Popularidad" para indicar que el filtro activo es el de Popularidad*/
function ponerPopularidad(){
    var filtro = document.getElementById("filtro");
    filtro.innerHTML = "Popularidad";
    cerrarFiltros();
}

/*Función utilizada para cambiar la palabra "Filtro por "Antiguedad" para indicar que el filtro activo es el de Antiguedad*/
function ponerFecha(){
    var filtro = document.getElementById("filtro");
    filtro.innerHTML = "Antigüedad";
    cerrarFiltros();
}

/*Función utilizada para cambiar la palabra "Filtro por "A-Z" para indicar que el filtro activo es el de Órden alfabético*/
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

/*Función utilizada para ocultar la lista de filtros*/
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
    document.getElementById("cajaPerfil").style.zIndex = "2";
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
    document.getElementById("cajaNoticias").style.zIndex = "3";
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
/*Funcion utilizada para crear categorias en el tablon*/
function añadirCategoria(){
    var categoria;
    if(categoria = prompt("Introduzca el nombre de la categoria", "Mis eventos")){
        if (categoria == "") {
            alert("El nombre es obligatorio");
        }
        else{
            var numCategoria = 1
            while(document.getElementById("categoria" + numCategoria) != null){
                numCategoria = numCategoria + 1;
            }
            var cajaGrande = document.getElementById("miTablon");
            var nuevaCategoria = document.createElement("div");
            nuevaCategoria.setAttribute("class", "categoria");
            nuevaCategoria.setAttribute("id", "categoria" + numCategoria);
            cajaGrande.appendChild(nuevaCategoria);
            var nombreCategoria = document.createElement("div");
            nombreCategoria.innerHTML = categoria;
            nuevaCategoria.appendChild(nombreCategoria);
            var opcion = document.createElement("img");
            opcion.setAttribute("class", "opcionesCaja");
            opcion.setAttribute("src", "IMG/3Puntos.png");
            opcion.setAttribute("onclick", "mostrarOpcionesCategoria('" + numCategoria + "')")
            nuevaCategoria.appendChild(opcion);
            var popUpOpcionesCategoria = document.createElement("div");
            popUpOpcionesCategoria.setAttribute("id", "popUpOpcionesCategoria" + numCategoria);
            popUpOpcionesCategoria.setAttribute("class", "popUpOpcionesCategoria");
            popUpOpcionesCategoria.setAttribute("onclick", "mostrarOpcionesCategoria('" + numCategoria + "')")
            nuevaCategoria.appendChild(popUpOpcionesCategoria);
            var opcionCategoria1 = document.createElement("div");
            opcionCategoria1.setAttribute("class", "opcionCategoria");
            opcionCategoria1.setAttribute("onclick", "archivarCategoria('" + numCategoria + "')")
            opcionCategoria1.innerHTML = "Archivar";
            popUpOpcionesCategoria.appendChild(opcionCategoria1);
            var opcionCategoria2 = document.createElement("div");
            opcionCategoria2.setAttribute("class", "opcionCategoria");
            opcionCategoria2.setAttribute("onclick", "añadirActividad('" + numCategoria + "')")
            opcionCategoria2.innerHTML = "Añadir actividad";
            popUpOpcionesCategoria.appendChild(opcionCategoria2);
            var clear = document.createElement("div");
            clear.setAttribute("class", "clear");
            popUpOpcionesCategoria.appendChild(clear);
            window.alert("Se ha creado correctamente la categoria" + numCategoria)
        }
    }
}
/*Funcion utilizada para abrir desplegable de las categorias*/
function mostrarOpcionesCategoria(numCategoria) {
    var popUpOpcionesCategoria = document.getElementById("popUpOpcionesCategoria" + numCategoria);
    if(popUpOpcionesCategoria.style.visibility == "visible"){
        popUpOpcionesCategoria.style.visibility = "hidden";
    }
    else {
        popUpOpcionesCategoria.style.visibility = "visible";
    }
}
/*Funcion utilizada para archivar una categoria*/
function archivarCategoria(numCategoria) {
    if(confirm("¿Estás seguro?")) {
        alert("Has archivado la categoria")
        var categoria = document.getElementById("categoria" + numCategoria);
        padre = categoria.parentNode;
        padre.removeChild(categoria);
    }
}
/*Funcion utilizada para añadir actividad a una categoria*/
function añadirActividad(numCategoria) {
    var titulo = prompt("Introduzca el título de la actividad", "Multijugador GTA V");
    var foto = prompt("Introduzca la foto", "https://s1.gaming-cdn.com/images/products/186/271x377/grand-theft-auto-v-cover.jpg");
    var plazasLibres = prompt("Introduzca las plazas disponibles para actividad", "22");
    var premio = prompt("Introduzca el premio para el ganador", "200€");
    var icono = prompt("Introduzca el icono del juego", "IMG/gtaLogo.png");
    var hastag1 = prompt("Introduzca un hastag", "#GTA V");
    var hastag2 = prompt("Introduzca otro hastag", "#GTA Online");
    var juego = prompt("Introduzca el juego de la nueva actividad", "GTA V");
    if (titulo == "" || titulo == null || plazasLibres == "" || plazasLibres == null) {
        alert("El titulo y las plazas libres es obligatorio");
    }
    else {
        var cajaGrande = document.getElementById("categoria" + numCategoria);
        var numActividad = 1
        while(document.getElementById("categoria" + numActividad) != null){
            numActividad = numActividad + 1;
        }
        var caja = document.createElement("div");
        caja.setAttribute("id", "caja" + numActividad);
        caja.setAttribute("class", "actividad");
        cajaGrande.appendChild(caja);
        
        var imgCaja = document.createElement("img");
        imgCaja.setAttribute("class", "imgcaja");
        imgCaja.setAttribute("src", foto);
        caja.appendChild(imgCaja);
        
        var textCaja = document.createElement("div");
        textCaja.setAttribute("class", "textCaja");
        caja.appendChild(textCaja);
        
        var parrafoTitulo = document.createElement("p");
        parrafoTitulo.setAttribute("class", "titulo");
        parrafoTitulo.innerText = titulo;
        parrafoTitulo.setAttribute("onclick", "openpopup('" + 1 + "')");
        textCaja.appendChild(parrafoTitulo);
        
        var parafoPlazasLibres = document.createElement("p");
        parafoPlazasLibres.innerText = "Plazas libres: " + plazasLibres;
        textCaja.appendChild(parafoPlazasLibres);
        
        var parafoPremio = document.createElement("p");
        parafoPremio.innerText = "Premio: " + premio;
        textCaja.appendChild(parafoPremio);
        
        var imgCierre = document.createElement("img");
        imgCierre.setAttribute("class", "cierre");
        imgCierre.setAttribute("src", "IMG/cerrarcajainterna.png");
        imgCierre.setAttribute("onclick", "closebox('" + numActividad + "')")
        caja.appendChild(imgCierre);
        
        var parafoPieActividad1 = document.createElement("p");
        parafoPieActividad1.setAttribute("class", "pieActividad");
        var date = new Date();
        parafoPieActividad1.innerHTML = date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
        caja.appendChild(parafoPieActividad1);
        
        var parafoPieActividad2 = document.createElement("p");
        parafoPieActividad2.setAttribute("class", "pieActividad");
        parafoPieActividad2.innerText = hastag1;
        caja.appendChild(parafoPieActividad2);
        
        var parafoPieActividad3 = document.createElement("p");
        parafoPieActividad3.setAttribute("class", "pieActividad");
        parafoPieActividad3.innerText = hastag2;
        caja.appendChild(parafoPieActividad3);
        
        var cajaIcono = document.createElement("div");
        cajaIcono.setAttribute("class", "icono");
        caja.appendChild(cajaIcono);
        
        var codLogo = document.createElement("img");
        codLogo.setAttribute("src", icono);
        cajaIcono.appendChild(codLogo);
        
        var tooltiptext = document.createElement("span");
        tooltiptext.setAttribute("class", "tooltiptext");
        tooltiptext.innerText = juego;
        cajaIcono.appendChild(tooltiptext);

        mostrarOpcionesCategoria(numCategoria);
    }
}