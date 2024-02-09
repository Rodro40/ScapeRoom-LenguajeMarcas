var key = false;
var linterna = false;

function getLlave() {
    key = true;
    document.getElementById("llaveE5").style.display = "none";
    document.getElementById("msg").style.display = "none"
}

function getLinterna() {
    linterna = true;
    document.getElementById("linterna").style.display = "none";
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
    document.getElementById("puertaE10").style.display = "none";
    document.getElementById("puertaizqE3").style.display = "block";
    document.getElementById("puertadchaE3").style.display = "block";
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
    document.getElementById("candadoE9").style.display = "block";
}