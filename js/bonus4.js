var spazi;
var mine;

do {
    var dimCampo = prompt("Scegli la dimensione del campo di gioco (PICCOLO / MEDIO / GRANDE)").toUpperCase();
} while ((dimCampo != "PICCOLO") && (dimCampo != "MEDIO") && (dimCampo != "GRANDE"));

do {
    var livello = prompt("Scegli il livello di difficoltà (FACILE / INTERMEDIO / DIFFICILE)").toUpperCase();
} while ((livello != "FACILE") && (livello != "INTERMEDIO") && (livello != "DIFFICILE"));

switch (dimCampo) {
    case "PICCOLO":
        spazi = 16;
        document.getElementById("field").className = ("piccolo");
        switch (livello) {
            case "FACILE":
            mine = 3;
            break;
            case "INTERMEDIO":
            mine = 6;
            break;
            case "DIFFICILE":
            mine = 9;
            break;
            default:
            alert("Non hai selezionato correttamente il livello di difficoltà");
        }
        break;
    case "MEDIO":
        spazi = 64;
        document.getElementById("field").className = ("medio");
        switch (livello) {
            case "FACILE":
            mine = 12;
            break;
            case "INTERMEDIO":
            mine = 25;
            break;
            case "DIFFICILE":
            mine = 38;
            break;
            default:
            alert("Non hai selezionato correttamente il livello di difficoltà");
        }       
        break;
    case "GRANDE":
        spazi = 100;
        document.getElementById("field").className = ("grande");
        switch (livello) {
            case "FACILE":
            mine = 20;
            break;
            case "INTERMEDIO":
            mine = 40;
            break;
            case "DIFFICILE":
            mine = 60;
            break;
            default:
            alert("Non hai selezionato correttamente il livello di difficoltà");
        }        
        break;
    default: 
        alert("Non hai selezionato correttamente la dimensione del campo di gioco");
}

console.log("Dimensione campo di gioco: "+dimCampo+" - Livello: "+livello);

// stabilisco il livello di difficoltà e la dimensione del campo
var campo = mineFieldGen(mine, spazi);
console.log(campo);


for (var x = 0; x < campo.length; x++) {
    if (campo[x] == "🟩") {
        document.getElementById("field").innerHTML += "<li id=\"casella_"+x+"\" class=\"prato cover\">"+x+"</li>";
    } else {
        document.getElementById("field").innerHTML += "<li id=\"casella_"+x+"\" class=\"mina cover\">"+x+"</li>";
    }
}

/* for (var x = 0; x < campo.length; x++) {
    document.getElementById("field").innerHTML += "<li id=\"casella_"+i+"\" class=\"cover\">"+i+"</li>";
} */



/* var clickCasella = document.getElementsByClassName("casella");
clickCasella.addEventListener('click',
    function() {
        
    }
    
    
    
    ) */
// definisco un generatore di campi minati che varieranno per livello di difficoltà e dimensione
function mineFieldGen(level, size) {
// creo il campo della dimensione richiesta, riempiendo d'erba ogni casella 
    var field = [];
    for (var i = 0; i < size; i++) {
        field[i] = "🟩";
/*         document.getElementById("field").innerHTML += "<li id=\"casella_"+i+"\" class=\"cover\">"+i+"</li>"; */
    }
// genero il numero di mine in base al livello di difficoltà e le dispongo in una posizione random che può andare da 0 alla dimensione massima del campo
    for (var a = 0; a < level; a++) {
        do {
            var minePosition = Math.floor(Math.random()*(size - 1));
        } while (field[minePosition] == "💣");
        field[minePosition] = "💣";
    }
// restituisco il campo minato generato
    return field;
}

var flagsNumber = 0;
var esploso = false;
console.log($('#field'));

    $("#field li[id^=\"casella_\"]").click(
        function() {
            if ($(this).hasClass('prato')) {
                $(this).removeClass("cover prato");
                $(this).addClass("flag");
                $(this).html("🚩");
                flagsNumber++;
                if (flagsNumber == (spazi-mine)) {
                    $("#field li[id^=\"casella_\"].flag").toggleClass("flag win").html("😎");
                    $("#field li[id^=\"casella_\"].mina").removeClass("cover mina").addClass("saved").html("💣");
                    alert("HAI VINTO! 😎 Sei riuscito a piazzare tutte le bandierine senza far esplodere il campo");
                }
            }
            else if ($(this).hasClass('flag')) {
                alert("Hai già messo al sicuro questa zona");
            }
            else if ($(this).hasClass('mina')) {
                $(this).removeClass("cover mina prato");
                $(this).addClass("boom");
                $("#field li[id^=\"casella_\"]").removeClass("cover");
                $("#field li[id^=\"casella_\"].mina").toggleClass("mina boom");
                $("#field li[id^=\"casella_\"].boom").html("💥");
                $("#field li[id^=\"casella_\"].prato").toggleClass("prato terreno");
                $("#field li[id^=\"casella_\"].terreno").html("🟫");
                alert("💥 GAME OVER! Sei finito su una mina e hai fatto saltare il campo!");
                esploso = true;
            }
            else if ($(this).hasClass('boom')) {
                alert("Hai già fatto esplodere tutto, che altro vuoi combinare?");
            }
            else if ($(this).hasClass('terreno')) {
                alert("Era qui che dovevi piazzare la bandierina...🤦‍♂️");
            }
            else if ($(this).hasClass('saved')) {
                alert("Hai vinto, la mina non può più scoppiare");
            }
            else if ($(this).hasClass('win')) {
                alert("Hai vinto, goditi questo momento");
            }
        }
        )
        




/* // definisco una variabile che andrà a contenere la posizione della bandierina desiderata dall'utente
var flagPosition;
var f = 0;
// creo un ciclo che terminerà solo con la vittoria (tutte bandierine piazzate) o sconfitta dell'utente (mina esplosa)
do {
// se l'utente piazza una bandierina in uno spazio occupato da una mina, questa ovviamente esploderà e il gioco termina.
    if (campo[flagPosition] == "💣") {
        console.log(campo[flagPosition] = "💥");
        document.getElementById("casella_"+flagPosition).innerHTML = "💥";
        console.log("GAME OVER! Hai fatto esplodere una mina!");
        alert("💥 GAME OVER! Hai fatto esplodere una mina!");
    } else {
// altrimenti la bandierina sarà piazzata sul campo e inizierà un nuovo ciclo
        campo[flagPosition] = "🚩";
        document.getElementById("casella_"+flagPosition).className = "flag";
        document.getElementById("casella_"+flagPosition).innerHTML = "🚩";
        console.log(campo);
        f++;
    }

} while (f < (spazi - mine) && (campo[flagPosition] != "💥"));

// se il numero di bandierine piazzate sarà pari al numero di spazi liberi da mine, l'utente ovviamente avrà vinto
if (f == spazi-mine) {
    for (var z = 0; z < campo.length; z++) {
        if (campo[z] == "🚩") {
            document.getElementById("casella_"+z).className = "win";
            document.getElementById("casella_"+z).innerHTML = "😎";
        }
    }
    console.log("HAI VINTO! 😎 Sei riuscito a piazzare tutte le bandierine senza far esplodere il campo");
    alert("HAI VINTO! 😎 Sei riuscito a piazzare tutte le bandierine senza far esplodere il campo");
} */