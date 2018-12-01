var numRandom;
var numRandomAnterior = null;

function getNumeroRandom(limite) {
    var num;

    do
        num = Math.floor(Math.random() * (limite));
    while(num == numRandomAnterior);

    numRandomAnterior = num;
    return num;
}

function generarCuadrosAlumnos() {
    var num         = $("alumnos").value;
    var contenido   = $("contenido");

    contenido.innerHTML = "";

    numRandom = Math.floor(Math.random() * (num));

    for (var i = 0; i < num; i++) {
        contenido.innerHTML += "<div id='op" + i + "' class='cuadrado'><input type='text' id='nom" + i + "' class='nombres'></div>";
    }
}

function escogerAlumnoRandom() {
    var cantidad_alumnos    = $("alumnos").value;
    var vueltas             = $("vueltas").value;
    var contVueltas         = $("contVueltas");

    var i = 1;
    var fun = setInterval(function () {
        /*
        Este if es para que cambie de color rojo a verde
        después de la primera vuelta
        */
        if (i != 0) 
            //$("op" + numRandom).style.backgroundColor = "blue";
            $("op" + numRandom).className = "cuadrado azul";

        numRandom = getNumeroRandom(cantidad_alumnos);
        //$("op" + numRandom).style.backgroundColor = "red";
        $("op" + numRandom).className = "cuadrado rojo";

        contVueltas.value = i+" ("+$("nom" + numRandom).value+")";

        if (i == vueltas) {
            clearInterval(fun);
        }

        i++;
    }, 100);
}

function $(id){
    return document.getElementById(id);
}