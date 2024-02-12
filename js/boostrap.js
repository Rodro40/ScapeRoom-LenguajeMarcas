var key = false;
var linterna = false;
var candadoE9 = true;
var candadoE10 = true;

function getLlave() {
    key = true;
    document.getElementById("llaveE5").style.display = "none";
    document.getElementById("msg").style.display = "none"
}

function getLinterna() {
    linterna = true;
    document.getElementById("linternaE7").style.display = "none";
}

function verPapelE9() {
    if (linterna == true) {
        document.getElementById("papelE9").classList.remove("papelE9");
        document.getElementById("papelE9").classList.add("papelE9BigBL");
        document.getElementById("manoLinternaE9").style.display = "block";
        document.getElementById("candadoE9").style.display = "none";
    } else {
        document.getElementById("papelE9").classList.remove("papelE9");
        document.getElementById("papelE9").classList.add("papelE9Big");
        document.getElementById("candadoE9").style.display = "none";
    }
    document.getElementById("back").style.display = "block";
    document.getElementById("msg").style.display = "none";
}

function goBack() {
    if (linterna == true) {
        document.getElementById("papelE9").classList.remove("papelE9BigBL");
        document.getElementById("papelE9").classList.add("papelE9");
    } else {
        document.getElementById("papelE9").classList.remove("papelE9Big");
        document.getElementById("papelE9").classList.add("papelE9");
    }
    
    if (candadoE9 == false) {
        document.getElementById("candadoE9").style.display = "none";
    } else {
        document.getElementById("candadoE9").style.display = "block";

    }
    document.getElementById("papelE9").innerHTML = "";
    document.getElementById("back").style.display = "none";
    document.getElementById("manoLinternaE9").style.display = "none";
    document.getElementById("candadoE9").style.display = "block";
}

function abrirCandadoE9() {
    document.getElementById("msg").style.display = "none";
    document.getElementById("candadoE9").classList.remove("candadoE9");
    document.getElementById("candadoE9").classList.add("candadoE9Big");
    document.getElementById("back2").style.display = "block";
    document.getElementById("dig1E9").style.display = "block";
    document.getElementById("dig2E9").style.display = "block";
    document.getElementById("dig3E9").style.display = "block";
    document.getElementById("enterE9").style.display = "block";
}

function introCodeE9() {
    if (parseInt(document.getElementById("dig1E9").value) == 3 && parseInt(document.getElementById("dig2E9").value) == 8 && parseInt(document.getElementById("dig3E9").value) == 9) {
        candadoE9 = false;
        document.getElementById("candadoE9").style.display = "none";
        document.getElementById("back2").style.display = "none";
        document.getElementById("dig1E9").style.display = "none";
        document.getElementById("dig2E9").style.display = "none";
        document.getElementById("dig3E9").style.display = "none";
        document.getElementById("enterE9").style.display = "none";
        document.getElementById("msg").style.display = "none";
    } else {
        document.getElementById("msg").style.display = "block";
        document.getElementById("msg").innerHTML = "Hmmmm... Parece que así no es... Colores, algo con colores";
    }
}

function goBack2() {
    document.getElementById("candadoE9").classList.remove("candadoE9Big");
    document.getElementById("candadoE9").classList.add("candadoE9");
    document.getElementById("back2").style.display = "none";
    document.getElementById("dig1E9").style.display = "none";
    document.getElementById("dig2E9").style.display = "none";
    document.getElementById("dig3E9").style.display = "none";
    document.getElementById("enterE9").style.display = "none";
    document.getElementById("msg").style.display = "none";
}

function abrirCandadoE10() {
    document.getElementById("msg").style.display = "none";
    document.getElementById("candadoE10").classList.remove("candadoE10");
    document.getElementById("candadoE10").classList.add("candadoE10Big");
    document.getElementById("back3").style.display = "block";
    document.getElementById("dig1E10").style.display = "block";
    document.getElementById("dig2E10").style.display = "block";
    document.getElementById("dig3E10").style.display = "block";
    document.getElementById("dig4E10").style.display = "block";
    document.getElementById("dig5E10").style.display = "block";
    document.getElementById("enterE10").style.display = "block";
}

function introCodeE10() {
    if (parseInt(document.getElementById("dig1E10").value) == 3 && parseInt(document.getElementById("dig2E10").value) == 6 && parseInt(document.getElementById("dig3E10").value) == 5 && parseInt(document.getElementById("dig4E10").value) == 5 && parseInt(document.getElementById("dig5E10").value) == 4) {
        candadoE10 = false;
        document.getElementById("candadoE10").style.display = "none";
        document.getElementById("back3").style.display = "none";
        document.getElementById("dig1E10").style.display = "none";
        document.getElementById("dig2E10").style.display = "none";
        document.getElementById("dig3E10").style.display = "none";
        document.getElementById("dig4E10").style.display = "none";
        document.getElementById("dig5E10").style.display = "none";
        document.getElementById("enterE10").style.display = "none";
        document.getElementById("msg").style.display = "none";
    } else {
        document.getElementById("msg").style.display = "block";
        document.getElementById("msg").innerHTML = "Esa combinación es erronea, debería buscar mas pistas que me digan cual es la combinación correcta";
    }
}

function goBack3() {
    document.getElementById("msg").style.display = "none";
    document.getElementById("candadoE10").classList.remove("candadoE10Big");
    document.getElementById("candadoE10").classList.add("candadoE10");
    document.getElementById("back3").style.display = "none";
    document.getElementById("dig1E10").style.display = "none";
    document.getElementById("dig2E10").style.display = "none";
    document.getElementById("dig3E10").style.display = "none";
    document.getElementById("dig4E10").style.display = "none";
    document.getElementById("dig5E10").style.display = "none";
    document.getElementById("enterE10").style.display = "none";
}

function entrarE2() {
    document.getElementById("principal").style.backgroundImage = "url(./img/Scene2.png)";
    document.getElementById("puertaE1").style.display = "none";
    document.getElementById("puertaE9").style.display = "none";
    document.getElementById("puertaE7").style.display = "none";
    document.getElementById("linternaE7").style.display = "none";
    document.getElementById("puertaE2").style.display = "block";
}

function entrarE3() {
    document.getElementById("principal").style.backgroundImage = "url(./img/Scene3.png)";
    document.getElementById("puertaE2").style.display = "none";
    document.getElementById("puertaE9").style.display = "none";
    document.getElementById("papelE9").style.display = "none";
    document.getElementById("candadoE9").style.display = "none";
    document.getElementById("puertaAtrasE9").style.display = "none";
    document.getElementById("msg").style.display = "none";
    document.getElementById("puertaE10").style.display = "none";
    document.getElementById("puertaAtrasE10").style.display = "none";
    document.getElementById("puertaizqE3").style.display = "block";
    document.getElementById("puertadchaE3").style.display = "block";
    document.getElementById("candadoE10").style.display = "none";
}

function entrarE4() {
    document.getElementById("principal").style.backgroundImage = "url(./img/Scene4.jpeg)";
    document.getElementById("puertaizqE3").style.display = "none";
    document.getElementById("puertadchaE3").style.display = "none";
    document.getElementById("puertaRoja").style.display = "block";
    document.getElementById("puertaAzul").style.display = "block";
}

function entrarE5() {
    document.getElementById("principal").style.backgroundImage = "url(./img/Scene5.jpeg)";
    document.getElementById("puertaRoja").style.display = "none";
    document.getElementById("puertaAzul").style.display = "none";
    document.getElementById("puertaE5").style.display = "block";
    if (key == false) {
        document.getElementById("llaveE5").style.display = "block";
    }
}

function entrarE6() {
    if (key == true) {
        document.getElementById("principal").style.backgroundImage = "url(./img/Scene6.jpeg)";
        document.getElementById("puertaE5").style.display = "none";
        document.getElementById("puertaE6").style.display = "block";
    } else {
        document.getElementById("msg").style.display = "block";
        document.getElementById("msg").innerHTML = "Mmmmmm, necesito una llave para abrir la puerta";
    }
}

function entrarE7() {
    document.getElementById("principal").style.backgroundImage = "url(./img/Scene7.jpeg)";
    document.getElementById("puertaAzul").style.display = "none";
    document.getElementById("puertaRoja").style.display = "none";
    document.getElementById("puertaE7").style.display = "block";
    if (linterna == false) {
        document.getElementById("linternaE7").style.display = "block";
    }
}

function entrarE8() {
    document.getElementById("principal").style.backgroundImage = "url(./img/Scene8.jpeg)";
    document.getElementById("puertaizqE3").style.display = "none";
    document.getElementById("puertadchaE3").style.display = "none";
    document.getElementById("puertaE6").style.display = "none";
    document.getElementById("puertaE8").style.display = "block"
}

function entrarE9() {
    document.getElementById("principal").style.backgroundImage = "url(./img/Scene9.jpeg)";
    document.getElementById("puertaE8").style.display = "none";
    document.getElementById("puertaE9").style.display = "block"
    document.getElementById("puertaAtrasE9").style.display = "block"
    document.getElementById("papelE9").style.display = "block"
    if (candadoE9 == true) {
        document.getElementById("candadoE9").style.display = "block";
    } else {
        document.getElementById("candadoE9").style.display = "none";
    }
}

function entrarE10() {
    if (candadoE9 == false) {
        document.getElementById("puertaE9").style.display = "none";
        document.getElementById("papelE9").style.display = "none";
        document.getElementById("puertaAtrasE9").style.display = "none";
        document.getElementById("principal").style.backgroundImage = "url(./img/Scene10.jpeg)";
        document.getElementById("puertaE10").style.display = "block";
        document.getElementById("puertaAtrasE10").style.display = "block";
        if (candadoE10 == true) {
            document.getElementById("candadoE10").style.display = "block";
        } else {
            document.getElementById("candadoE10").style.display = "none";
        }
    } else {
        document.getElementById("msg").style.display = "block";
        document.getElementById("msg").innerHTML = "Necesito quitar primero ese candado";
    }
}

function FIN(){
    if (candadoE10 == true) {
        document.getElementById("msg").style.display = "block";
        document.getElementById("msg").innerHTML = "Necesito quitar primero ese candado";
    } else {
        document.getElementById("principal").style.backgroundImage = "url(./img/Scene11.jpeg)";
        document.getElementById("principal").style.backgroundColor = "black";
        document.getElementById("puertaE10").style.display = "none";
        document.getElementById("puertaAtrasE10").style.display = "none";
        document.getElementById("msgFin").style.display = "block";
    }
}

