var numRandom;
var numRandomAnterior = null;

function getNumeroRandom(limite) {
    var num;

    do{
        num = Math.floor(Math.random() * (limite));
    }while(num == numRandomAnterior);

    numRandomAnterior = num;
    return num;
}

function generar() {
    var num = document.getElementById("alumnos").value;
    var contenido = document.getElementById("contenido");

    contenido.innerHTML = "";

    numRandom = Math.floor(Math.random() * (num));

    for (var i = 0; i < num; i++) {
        contenido.innerHTML += "<div id='op" + i + "' class='cuadrado'><input type='text' id='nom" + i + "' class='nombres'></div>";
    }
}

function verificar() {
    var cantidad_alumnos = document.getElementById("alumnos").value;
    var vueltas = document.getElementById("vueltas").value;
    var contVueltas = document.getElementById("contVueltas");

    var i = 1;
    var fun = setInterval(function () {
        if (i != 0) {
            document.getElementById("op" + numRandom).style.backgroundColor = "blue";
        }

        numRandom = getNumeroRandom(cantidad_alumnos);
        document.getElementById("op" + numRandom).style.backgroundColor = "red";

        contVueltas.value = i;

        if (i == vueltas) {
            clearInterval(fun);
        }

        i++;
    }, 100);
}

