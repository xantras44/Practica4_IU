function abrirMenu() {
    var fondoBlanco = document.getElementById("fondoBlanco");
    fondoBlanco.style.visibility="visible";
    var cajaMenu = document.getElementById("cajaMenu");
    cajaMenu.style.visibility="visible";
    var cajaCerrarMenu = document.getElementById("cajaCerrarMenu");
    cajaCerrarMenu.style.visibility="visible";
}

function cerrarMenu() {
    var fondoBlanco = document.getElementById("fondoBlanco");
    fondoBlanco.style.visibility="hidden";
    var cajaMenu = document.getElementById("cajaMenu");
    cajaMenu.style.visibility="hidden";
    var cjajCerrarMenu = document.getElementById("cajaCerrarMenu");
    cajaCerrarMenu.style.visibility= "hidden";
}