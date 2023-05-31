const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")
const b4 = document.getElementById("b4")
const b5 = document.getElementById("b5")
const b6 = document.getElementById("b6")
const b7 = document.getElementById("b7")
const b8 = document.getElementById("b8")
const b9 = document.getElementById("b9")
const b0 = document.getElementById("b0")
const bb = document.getElementById('bb')
const bc = document.getElementById('bc')
const bcon = document.getElementById('bcon')
var digitos = 0;
var buttonvalidate = 0;
var nselected = '';
var cselected = '';
var votosbrancos = 0;
var votosnulos = 0;
var governadores = ['55', 'Alexandre Kalil', 'PSD', 'André Quintão', 0, '30', 'Romeu Zema', 'Novo', 'Mateus Simões', 0]//número - nomeg - partido - nomevg  - votos
var presidentes = ['13', 'Lula', 'PT', 'Geraldo Alckmin', 0, '22', 'Bolsonaro', 'PL', 'Braga Netto', 0]//número - nomeg - partido - nomevg  - votos
var gs = document.querySelector(".governadorscreen");
var infobuttons = document.getElementById('infobuttons')
var vtype = 0;
var screens = 1;
var block1 = document.getElementById('block1')
var block2 = document.getElementById('block2')
var showresults = document.getElementById('showresults')
var voteagain = document.getElementById('voteagain')
showresults.style.display = ('none')
voteagain.style.display = ('none')
gs.style.display = "none"
infobuttons.style.display = "none"
b1.addEventListener('click', clicado);
b2.addEventListener('click', clicado);
b3.addEventListener('click', clicado);
b4.addEventListener('click', clicado);
b5.addEventListener('click', clicado);
b6.addEventListener('click', clicado);
b7.addEventListener('click', clicado);
b8.addEventListener('click', clicado);
b9.addEventListener('click', clicado);
b0.addEventListener('click', clicado);
bb.addEventListener('click', bbclicado);
bc.addEventListener('click', bcclicado);
bcon.addEventListener('click', bconclicado);

setTimeout(function time () {

    var a = document.querySelector(".starting");

    a.style = "display:none"
    gs.style = "display:"
    buttonvalidate++

}, 2000);


function clicado() {
    if (buttonvalidate != 0) {
        if (digitos < 2) {
            var buttonid = (this.id)
            switch (buttonid) {
                case 'b1':
                    nselected = ('1')
                    cselected = (cselected + nselected)
                    if (digitos === 0) {
                        document.getElementById("block1").innerHTML = nselected;
                    }
                    else {
                        document.getElementById("block2").innerHTML = nselected;
                    }
                    break;
                case 'b2':
                    nselected = ('2')
                    cselected = (cselected + nselected)
                    if (digitos === 0) {
                        document.getElementById("block1").innerHTML = nselected;
                    }
                    else {
                        document.getElementById("block2").innerHTML = nselected;
                    }
                    break;
                case 'b3':
                    nselected = ('3')
                    cselected = (cselected + nselected)
                    if (digitos === 0) {
                        document.getElementById("block1").innerHTML = nselected;
                    }
                    else {
                        document.getElementById("block2").innerHTML = nselected;
                    }
                    break;
                case 'b4':
                    nselected = ('4')
                    cselected = (cselected + nselected)
                    if (digitos === 0) {
                        document.getElementById("block1").innerHTML = nselected;
                    }
                    else {
                        document.getElementById("block2").innerHTML = nselected;
                    }
                    break;
                case 'b5':
                    nselected = ('5')
                    cselected = (cselected + nselected)
                    if (digitos === 0) {
                        document.getElementById("block1").innerHTML = nselected;
                    }
                    else {
                        document.getElementById("block2").innerHTML = nselected;
                    }
                    break;
                case 'b6':
                    nselected = ('6')
                    cselected = (cselected + nselected)
                    if (digitos === 0) {
                        document.getElementById("block1").innerHTML = nselected;
                    }
                    else {
                        document.getElementById("block2").innerHTML = nselected;
                    }
                    break;
                case 'b7':
                    nselected = ('7')
                    cselected = (cselected + nselected)
                    if (digitos === 0) {
                        document.getElementById("block1").innerHTML = nselected;
                    }
                    else {
                        document.getElementById("block2").innerHTML = nselected;
                    }
                    break;
                case 'b8':
                    nselected = ('8')
                    cselected = (cselected + nselected)
                    if (digitos === 0) {
                        document.getElementById("block1").innerHTML = nselected;
                    }
                    else {
                        document.getElementById("block2").innerHTML = nselected;
                    }
                    break;
                case 'b9':
                    nselected = ('9')
                    cselected = (cselected + nselected)
                    if (digitos === 0) {
                        document.getElementById("block1").innerHTML = nselected;
                    }
                    else {
                        document.getElementById("block2").innerHTML = nselected;
                    }
                    break;
                case 'b0':
                    nselected = ('0')
                    cselected = (cselected + nselected)
                    if (digitos === 0) {
                        document.getElementById("block1").innerHTML = nselected;
                    }
                    else {
                        document.getElementById("block2").innerHTML = nselected;
                    }
                    break;
            }
            digitos++
        }
    }
    if (screens == 1) {//busca governadores
        if (digitos == 2) {
            infobuttons.style.display = '';
            var gposition = governadores.indexOf(cselected)
            if (gposition >= 0) {
                document.getElementById('data').innerHTML = ("Nome:" + governadores[gposition + 1] + "<br> Partido: " + governadores[gposition + 2] + " <br> Vice-Governador: " + governadores[gposition + 3])
                vtype = 0
                vtype = 3
            }
            else {
                document.getElementById('data').innerHTML = ("NÚMERO ERRADO <br> <div id=votonulo>VOTO NULO!</div>");
                vtype = 0;
                vtype = 2;
            }
        }
    }
    else if (screens == 2) {//busca presidentes
        if (digitos == 2) {
            infobuttons.style.display = '';
            gposition = presidentes.indexOf(cselected)
            if (gposition >= 0) {
                document.getElementById('data').innerHTML = ("Nome:" + presidentes[gposition + 1] + "<br> Partido: " + presidentes[gposition + 2] + " <br> Vice-Governador: " + presidentes[gposition + 3])
                vtype = 0
                vtype = 3
            }
            else {
                document.getElementById('data').innerHTML = ("NÚMERO ERRADO <br> <div id=votonulo>VOTO NULO!</div>");
                vtype = 0;
                vtype = 2;
            }
        }
    }
}

function bbclicado() {
    if (buttonvalidate != 0) {
        infobuttons.style.display = ''
        document.getElementById('data').innerHTML = ("<div id='vb'>VOTO EM BRANCO!</div>")
        vtype = 1;
        document.getElementById("block1").innerHTML = ('')
        document.getElementById("block2").innerHTML = ('')
        nselected = '';
        cselected = '';
    }

}

function bcclicado() {
    if (buttonvalidate != 0) {
        infobuttons.style.display = 'none'
        document.getElementById("block1").innerHTML = ('')
        document.getElementById("block2").innerHTML = ('')
        nselected = '';
        cselected = '';
        digitos = 0;
        vtype = 0;
        document.getElementById('data').innerHTML = ("");
    }

}
function bconclicado() {
    if (buttonvalidate != 0) {
        if (vtype == 1) { //voto branco
            if (screens == 1) {
                votosbrancos++
                screens++
                document.getElementById('title').innerHTML = ('<h1>Presidente</h1>')
                infobuttons.style.display = 'none'
                document.getElementById("block1").innerHTML = ('')
                document.getElementById("block2").innerHTML = ('')
                nselected = '';
                cselected = '';
                digitos = 0;
                vtype = 0;
                document.getElementById('data').innerHTML = ("");
            }
            else if (screens == 2) {//tela presidente

                votosbrancos++
                infobuttons.style.display = 'none'
                document.getElementById('title').innerHTML = ('<h1 id="fim">Fim</h1>')
                document.getElementById('data').innerHTML = ("");
                document.getElementById("block1").innerHTML = ('')
                document.getElementById("block2").innerHTML = ('')
                block1.style.border = '0px'
                block2.style.border = '0px'

                var a = document.querySelector(".starting");

                a.style = "display:"
                gs.style = "display:"
                document.getElementById('s1').innerHTML = ("")
                document.getElementById('s2').innerHTML = ("")
                document.getElementById('s3').innerHTML = ("")
                buttonvalidate = 0
                digitos = 2
            }

        }
        else if (vtype == 2) {//voto nulo
            if (screens == 1) {
                votosnulos++
                screens++
                document.getElementById('title').innerHTML = ('<h1>Presidente</h1>')
                infobuttons.style.display = 'none'
                document.getElementById("block1").innerHTML = ('')
                document.getElementById("block2").innerHTML = ('')
                nselected = '';
                cselected = '';
                digitos = 0;
                vtype = 0;
                document.getElementById('data').innerHTML = ("");
            }
            else if (screens == 2) {//tela presidente
                votosnulos++
                infobuttons.style.display = 'none'
                document.getElementById('title').innerHTML = ('<h1 id="fim">Fim</h1>')
                document.getElementById('data').innerHTML = ("");
                document.getElementById("block1").innerHTML = ('')
                document.getElementById("block2").innerHTML = ('')
                block1.style.border = '0px'
                block2.style.border = '0px'

                var a = document.querySelector(".starting");

                a.style = "display:"
                gs.style = "display:"
                document.getElementById('s1').innerHTML = ("")
                document.getElementById('s2').innerHTML = ("")
                document.getElementById('s3').innerHTML = ("")
                buttonvalidate = 0
                digitos = 2

            }
        }
        else {//voto certo
            if (screens == 1) { //tela governadores
                gposition = governadores.indexOf(cselected)
                gposition = (gposition + 4)
                governadores[gposition] = (governadores[gposition] + 1)
                screens++

                document.getElementById('title').innerHTML = ('<h1>Presidente</h1>')
                infobuttons.style.display = 'none'
                document.getElementById("block1").innerHTML = ('')
                document.getElementById("block2").innerHTML = ('')
                nselected = '';
                cselected = '';
                digitos = 0;
                vtype = 0;
                document.getElementById('data').innerHTML = ("");
            }
            else if (screens == 2) { //tela presidentes
                gposition = presidentes.indexOf(cselected)
                gposition = (gposition + 4)
                presidentes[gposition] = (presidentes[gposition] + 1)

                infobuttons.style.display = 'none'
                document.getElementById('title').innerHTML = ('<h1 id="fim">Fim</h1>')
                document.getElementById('data').innerHTML = ("");
                document.getElementById("block1").innerHTML = ('')
                document.getElementById("block2").innerHTML = ('')
                block1.style.border = '0px'
                block2.style.border = '0px'

                var a = document.querySelector(".starting");

                a.style = "display:"
                gs.style = "display:"
                document.getElementById('s1').innerHTML = ("")
                document.getElementById('s2').innerHTML = ("")
                document.getElementById('s3').innerHTML = ("")
                buttonvalidate = 0
                digitos = 2
                showresults.style.display=('')
                voteagain.style.display=('')
                voteagain.addEventListener('click')
            }

        }
    }

}
////////////////////////////////////////////////////////
//O código a seguir não é de autoria minha;
const zeroFill = n => {
    return ('0' + n).slice(-2);
}
// Cria intervalo
const interval = setInterval(() => {
    // Pega o horário atual
    const now = new Date();

    // Formata a data conforme dd/mm/aaaa hh:ii:ss
    const dataHora = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

    // Exibe na tela usando a div#data-hora
    document.getElementById('data-hora').innerHTML = dataHora;
}, 1000);
////////////////////////////////////////////////////////