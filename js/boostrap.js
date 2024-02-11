var key = false;
var linterna = false;
var candadoE9 = true;
var candadoE10 = true;

//Para el candado de colores
function introCode() {

    if(document.getElementById("dig1") == 3 && document.getElementById("dig2") == 6 && document.getElementById("dig3") == 10 && document.getElementById("dig4") == 5 &&document.getElementById("dig5") == 4 ){
    console.log("Código correcto");
    document.getElementById("dig1").style.display = "none ";
    document.getElementById("dig2").style.display = "none";
    document.getElementById("dig3").style.display = "none";
    document.getElementById("dig4").style.display = "none";
    document.getElementById("dig5").style.display = "none";
    document.getElementById("boton").style.display = "none";

    document.getElementById("principal").style.backgroundImage = "url(./img/Scene1.png)";
    document.getElementById("puertaE10").style.display = "none";
    document.getElementById("parrafo1").innerHTML = "Uffff...";
    document.getElementById("parrafo2").innerHTML = "Menos mal, ya estoy fuera";
    document.getElementById("parrafo3").innerHTML = "Que raro ha sido todo eso...";
    
    } else {
    
    console.log("Código incorrecto");
    document.getElementById("parrafol").innerHTML = "No parece ser esta, ¿me habre dejado algo?";
    document.getElementById("parrafo2").innerHTML = "Hay colores, ¿deberan de coincidir con algo?";
    document.getElementById("parrafo3").innerHTML = "";
    }
}

function getLlave() {
    key = true;
    document.getElementById("llaveE5").style.display = "none";
    document.getElementById("msg").style.display = "none"
}

function getLinterna() {
    linterna = true;
    document.getElementById("linternaE7").style.display = "none";
}

function verPapelE9(){
    if (linterna == true) {
        document.getElementById("papelE9").classList.remove("papelE9");
        document.getElementById("papelE9").classList.add("papelE9BigBL");
        document.getElementById("papelE9").innerHTML = "3895";
    } else {
        document.getElementById("papelE9").classList.remove("papelE9");
        document.getElementById("papelE9").classList.add("papelE9Big");
    }
    document.getElementById("back").style.display = "block";
}

function goBack(){
    if (linterna == true) {
        document.getElementById("papelE9").classList.remove("papelE9BigBL");
        document.getElementById("papelE9").classList.add("papelE9");
    } else {
        document.getElementById("papelE9").classList.remove("papelE9Big");
        document.getElementById("papelE9").classList.add("papelE9");
    }
    document.getElementById("papelE9").innerHTML = "";
    document.getElementById("back").style.display = "none";
}

function abrirCandadoE9(){
    document.getElementById("candadoE9").classList.remove("candadoE9");
    document.getElementById("candadoE9").classList.add("candadoE9Big");
    document.getElementById("back2").style.display = "block";
    if (condition) {
        
    } else {
        
    }
}

function goBack2(){
    document.getElementById("candadoE9").classList.remove("candadoE9Big");
    document.getElementById("candadoE9").classList.add("candadoE9");
    document.getElementById("back2").style.display = "none";
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
    if (candadoE9 == true) {
        document.getElementById("candadoE9").style.display = "block";
    }else {
        document.getElementById("candadoE9").style.display = "none";
    }
    
}
