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
    document.getElementById("principal").style.backgroundImage = "url(../img/Scenne2.png)";
    document.getElementById("puertaE1").style.display = "none";
    document.getElementById("puertaE9").style.display = "none";
    document.getElementById("puertaE2").style.display = "block";
}

function entrarE3() {
    document.getElementById("principal").style.backgroundImage = "url(../img/Scenne3.png)";
    document.getElementById("puertaE2").style.display = "none";
    document.getElementById("puertaE12").style.display = "none";
    document.getElementById("puertaE15").style.display = "none";
    document.getElementById("puertaizqE3").style.display = "block";
    document.getElementById("puertadchaE3").style.display = "block";
}

function entrarE4() {
    document.getElementById("principal").style.backgroundImage = "url(../img/Scenne4.png)";
    document.getElementById("puertaizqE3").style.display = "none";
    document.getElementById("puertadchaE3").style.display = "none";
    document.getElementById("puertaRoja").style.display = "block";
    document.getElementById("puertaAzul").style.display = "block";
}

function entrarE5() {
    document.getElementById("principal").style.backgroundImage = "url(../img/Scenne5.png)";
    document.getElementById("puertaRoja").style.display = "none";
    document.getElementById("puertaAzul").style.display = "none";
    document.getElementById("puertaE5").style.display = "block";
    if (key = false) {
        document.getElementById("llaveE5").style.display = "block";
    }
}

function entrarE8() {
    if (condition) {
        document.getElementById("principal").style.backgroundImage = "url(../img/Scenne8.png)";
        document.getElementById("puertaE5").style.display = "none";
        document.getElementById("puertaE8").style.display = "block";
    } else {
        document.getElementById("msg").style.display = "block";
        document.getElementById("msg").innerHTML = "Mmmmmm, necesito una llave para abrir la puerta";
    }
}

function entrarE9() {
    document.getElementById("principal").style.backgroundImage = "url(../img/Scenne9.png)";
    document.getElementById("puertaAzul").style.display = "none";
    document.getElementById("puertaE9").style.display = "block";
    if (linterna = false) {
        document.getElementById("linterna").style.display = "block";
    }
}

function entrarE11() {
    document.getElementById("principal").style.backgroundImage = "url(../img/Scenne11.png)";
    document.getElementById("puertaizqE3").style.display = "none";
    document.getElementById("puertadchaE3").style.display = "none";
    document.getElementById("puertaE11").style.display = "block"
}

function entrarE12() {
    document.getElementById("principal").style.backgroundImage = "url(../img/Scenne12.png)";

}