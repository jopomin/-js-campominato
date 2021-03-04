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
        document.getElementById("lista_utente").className = ("piccolo");
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
        document.getElementById("lista_utente").className = ("medio");
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
        document.getElementById("lista_utente").className = ("grande");
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

/* for (var x = 0; x < campo.length; x++) {
    if (campo[x] == "🟩") {
        document.getElementById("lista_utente").innerHTML += "<li id=\"casella_"+x+"\" class=\"prato cover\">🟩</li>";
    } else {
        document.getElementById("lista_utente").innerHTML += "<li id=\"casella_"+x+"\" class=\"mina cover\">💣</li>";
    }
} */

for (var x = 0; x < campo.length; x++) {
    document.getElementById("lista_utente").innerHTML += "<li id=\"casella_"+x+"\" class=\"cover\">"+x+"</li>";
}



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

/* // definisco una variabile che andrà a contenere la posizione della bandierina desiderata dall'utente
var flagPosition;
var f = 0;
var flagClass;

// creo un ciclo che terminerà solo con la vittoria (tutte bandierine piazzate) o sconfitta dell'utente (mina esplosa)
do {
// chiedo all'utente di piazzare una bandierina in una posizione che può andare da 0 al numero di spazi previsti dal campo. Se sceglie uno spazio già occupato, chiedo di sceglierne un altro, finché non ne trova uno libero da altre bandierine
    do {
        flagPosition = parseInt(prompt("In che spazio del campo vuoi piazzare la bandierina? Scegli un numero da 0 a "+(spazi - 1)));
    } while (campo[flagPosition] == "🚩" || flagPosition < 0 || flagPosition >= spazi);
// se l'utente piazza una bandierina in uno spazio occupato da una mina, questa ovviamente esploderà e il gioco termina.
    if (campo[flagPosition] == "💣") {
        document.getElementById("casella_"+flagPosition).className = "boom";
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


$("#casella_0").click(
    function() {
        switch (campo[0]) {
            case "🟩":
            $("#casella_0").toggleClass("cover flag");
            $("#casella_0").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_0").toggleClass("cover boom");
            $("#casella_0").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_1").click(
    function() {
        switch (campo[1]) {
            case "🟩":
            $("#casella_1").toggleClass("cover flag");
            $("#casella_1").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_1").toggleClass("cover boom");
            $("#casella_1").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_2").click(
    function() {
        switch (campo[2]) {
            case "🟩":
            $("#casella_2").toggleClass("cover flag");
            $("#casella_2").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_2").toggleClass("cover boom");
            $("#casella_2").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_3").click(
    function() {
        switch (campo[3]) {
            case "🟩":
            $("#casella_3").toggleClass("cover flag");
            $("#casella_3").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_3").toggleClass("cover boom");
            $("#casella_3").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_4").click(
    function() {
        switch (campo[4]) {
            case "🟩":
            $("#casella_4").toggleClass("cover flag");
            $("#casella_4").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_4").toggleClass("cover boom");
            $("#casella_4").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_5").click(
    function() {
        switch (campo[5]) {
            case "🟩":
            $("#casella_5").toggleClass("cover flag");
            $("#casella_5").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_5").toggleClass("cover boom");
            $("#casella_5").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_6").click(
    function() {
        switch (campo[6]) {
            case "🟩":
            $("#casella_6").toggleClass("cover flag");
            $("#casella_6").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_6").toggleClass("cover boom");
            $("#casella_6").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_7").click(
    function() {
        switch (campo[7]) {
            case "🟩":
            $("#casella_7").toggleClass("cover flag");
            $("#casella_7").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_7").toggleClass("cover boom");
            $("#casella_7").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_8").click(
    function() {
        switch (campo[8]) {
            case "🟩":
            $("#casella_8").toggleClass("cover flag");
            $("#casella_8").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_8").toggleClass("cover boom");
            $("#casella_8").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_9").click(
    function() {
        switch (campo[9]) {
            case "🟩":
            $("#casella_9").toggleClass("cover flag");
            $("#casella_9").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_9").toggleClass("cover boom");
            $("#casella_9").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_10").click(
    function() {
        switch (campo[10]) {
            case "🟩":
            $("#casella_10").toggleClass("cover flag");
            $("#casella_10").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_10").toggleClass("cover boom");
            $("#casella_10").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_11").click(
    function() {
        switch (campo[11]) {
            case "🟩":
            $("#casella_11").toggleClass("cover flag");
            $("#casella_11").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_11").toggleClass("cover boom");
            $("#casella_11").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_12").click(
    function() {
        switch (campo[12]) {
            case "🟩":
            $("#casella_12").toggleClass("cover flag");
            $("#casella_12").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_12").toggleClass("cover boom");
            $("#casella_12").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_13").click(
    function() {
        switch (campo[13]) {
            case "🟩":
            $("#casella_13").toggleClass("cover flag");
            $("#casella_13").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_13").toggleClass("cover boom");
            $("#casella_13").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_14").click(
    function() {
        switch (campo[14]) {
            case "🟩":
            $("#casella_14").toggleClass("cover flag");
            $("#casella_14").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_14").toggleClass("cover boom");
            $("#casella_14").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_15").click(
    function() {
        switch (campo[15]) {
            case "🟩":
            $("#casella_15").toggleClass("cover flag");
            $("#casella_15").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_15").toggleClass("cover boom");
            $("#casella_15").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_16").click(
    function() {
        switch (campo[16]) {
            case "🟩":
            $("#casella_16").toggleClass("cover flag");
            $("#casella_16").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_16").toggleClass("cover boom");
            $("#casella_16").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_17").click(
    function() {
        switch (campo[17]) {
            case "🟩":
            $("#casella_17").toggleClass("cover flag");
            $("#casella_17").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_17").toggleClass("cover boom");
            $("#casella_17").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_18").click(
    function() {
        switch (campo[18]) {
            case "🟩":
            $("#casella_18").toggleClass("cover flag");
            $("#casella_18").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_18").toggleClass("cover boom");
            $("#casella_18").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_19").click(
    function() {
        switch (campo[19]) {
            case "🟩":
            $("#casella_19").toggleClass("cover flag");
            $("#casella_19").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_19").toggleClass("cover boom");
            $("#casella_19").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_20").click(
    function() {
        switch (campo[20]) {
            case "🟩":
            $("#casella_20").toggleClass("cover flag");
            $("#casella_20").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_20").toggleClass("cover boom");
            $("#casella_20").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_21").click(
    function() {
        switch (campo[21]) {
            case "🟩":
            $("#casella_21").toggleClass("cover flag");
            $("#casella_21").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_21").toggleClass("cover boom");
            $("#casella_21").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_22").click(
    function() {
        switch (campo[22]) {
            case "🟩":
            $("#casella_22").toggleClass("cover flag");
            $("#casella_22").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_22").toggleClass("cover boom");
            $("#casella_22").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_23").click(
    function() {
        switch (campo[23]) {
            case "🟩":
            $("#casella_23").toggleClass("cover flag");
            $("#casella_23").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_23").toggleClass("cover boom");
            $("#casella_23").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_24").click(
    function() {
        switch (campo[24]) {
            case "🟩":
            $("#casella_24").toggleClass("cover flag");
            $("#casella_24").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_24").toggleClass("cover boom");
            $("#casella_24").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_25").click(
    function() {
        switch (campo[25]) {
            case "🟩":
            $("#casella_25").toggleClass("cover flag");
            $("#casella_25").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_25").toggleClass("cover boom");
            $("#casella_25").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_26").click(
    function() {
        switch (campo[26]) {
            case "🟩":
            $("#casella_26").toggleClass("cover flag");
            $("#casella_26").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_26").toggleClass("cover boom");
            $("#casella_26").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_27").click(
    function() {
        switch (campo[27]) {
            case "🟩":
            $("#casella_27").toggleClass("cover flag");
            $("#casella_27").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_27").toggleClass("cover boom");
            $("#casella_27").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_28").click(
    function() {
        switch (campo[28]) {
            case "🟩":
            $("#casella_28").toggleClass("cover flag");
            $("#casella_28").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_28").toggleClass("cover boom");
            $("#casella_28").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_29").click(
    function() {
        switch (campo[29]) {
            case "🟩":
            $("#casella_29").toggleClass("cover flag");
            $("#casella_29").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_29").toggleClass("cover boom");
            $("#casella_29").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_30").click(
    function() {
        switch (campo[30]) {
            case "🟩":
            $("#casella_30").toggleClass("cover flag");
            $("#casella_30").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_30").toggleClass("cover boom");
            $("#casella_30").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_31").click(
    function() {
        switch (campo[31]) {
            case "🟩":
            $("#casella_31").toggleClass("cover flag");
            $("#casella_31").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_31").toggleClass("cover boom");
            $("#casella_31").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_32").click(
    function() {
        switch (campo[32]) {
            case "🟩":
            $("#casella_32").toggleClass("cover flag");
            $("#casella_32").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_32").toggleClass("cover boom");
            $("#casella_32").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_33").click(
    function() {
        switch (campo[33]) {
            case "🟩":
            $("#casella_33").toggleClass("cover flag");
            $("#casella_33").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_33").toggleClass("cover boom");
            $("#casella_33").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_34").click(
    function() {
        switch (campo[34]) {
            case "🟩":
            $("#casella_34").toggleClass("cover flag");
            $("#casella_34").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_34").toggleClass("cover boom");
            $("#casella_34").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_35").click(
    function() {
        switch (campo[35]) {
            case "🟩":
            $("#casella_35").toggleClass("cover flag");
            $("#casella_35").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_35").toggleClass("cover boom");
            $("#casella_35").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_36").click(
    function() {
        switch (campo[36]) {
            case "🟩":
            $("#casella_36").toggleClass("cover flag");
            $("#casella_36").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_36").toggleClass("cover boom");
            $("#casella_36").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_37").click(
    function() {
        switch (campo[37]) {
            case "🟩":
            $("#casella_37").toggleClass("cover flag");
            $("#casella_37").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_37").toggleClass("cover boom");
            $("#casella_37").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_38").click(
    function() {
        switch (campo[38]) {
            case "🟩":
            $("#casella_38").toggleClass("cover flag");
            $("#casella_38").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_38").toggleClass("cover boom");
            $("#casella_38").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_39").click(
    function() {
        switch (campo[39]) {
            case "🟩":
            $("#casella_39").toggleClass("cover flag");
            $("#casella_39").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_39").toggleClass("cover boom");
            $("#casella_39").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_40").click(
    function() {
        switch (campo[40]) {
            case "🟩":
            $("#casella_40").toggleClass("cover flag");
            $("#casella_40").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_40").toggleClass("cover boom");
            $("#casella_40").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_41").click(
    function() {
        switch (campo[41]) {
            case "🟩":
            $("#casella_41").toggleClass("cover flag");
            $("#casella_41").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_41").toggleClass("cover boom");
            $("#casella_41").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_42").click(
    function() {
        switch (campo[42]) {
            case "🟩":
            $("#casella_42").toggleClass("cover flag");
            $("#casella_42").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_42").toggleClass("cover boom");
            $("#casella_42").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_43").click(
    function() {
        switch (campo[43]) {
            case "🟩":
            $("#casella_43").toggleClass("cover flag");
            $("#casella_43").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_43").toggleClass("cover boom");
            $("#casella_43").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_44").click(
    function() {
        switch (campo[44]) {
            case "🟩":
            $("#casella_44").toggleClass("cover flag");
            $("#casella_44").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_44").toggleClass("cover boom");
            $("#casella_44").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_45").click(
    function() {
        switch (campo[45]) {
            case "🟩":
            $("#casella_45").toggleClass("cover flag");
            $("#casella_45").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_45").toggleClass("cover boom");
            $("#casella_45").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_46").click(
    function() {
        switch (campo[46]) {
            case "🟩":
            $("#casella_46").toggleClass("cover flag");
            $("#casella_46").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_46").toggleClass("cover boom");
            $("#casella_46").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_47").click(
    function() {
        switch (campo[47]) {
            case "🟩":
            $("#casella_47").toggleClass("cover flag");
            $("#casella_47").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_47").toggleClass("cover boom");
            $("#casella_47").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_48").click(
    function() {
        switch (campo[48]) {
            case "🟩":
            $("#casella_48").toggleClass("cover flag");
            $("#casella_48").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_48").toggleClass("cover boom");
            $("#casella_48").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)

$("#casella_49").click(
    function() {
        switch (campo[49]) {
            case "🟩":
            $("#casella_49").toggleClass("cover flag");
            $("#casella_49").html("🚩");
            break;
            case "🚩":
            alert("Hai già scelto questa casella");
            break;
            case "💣":
            $("#casella_49").toggleClass("cover boom");
            $("#casella_49").html("💥");
            break;
            default:
            alert("Fai qualcosa");
        }
    }
)