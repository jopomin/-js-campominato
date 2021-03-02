var spazi;
var mine;

do {
    var dimCampo = prompt("Scegli la dimensione del campo di gioco (PICCOLO / MEDIO / GRANDE").toUpperCase();
} while ((dimCampo != "PICCOLO") && (dimCampo != "MEDIO") && (dimCampo != "GRANDE"));

do {
    var livello = prompt("Scegli il livello di difficoltà (FACILE / INTERMEDIO / DIFFICILE").toUpperCase();
} while ((livello != "FACILE") && (livello != "INTERMEDIO") && (livello != "DIFFICILE"));

switch (dimCampo) {
    case "PICCOLO":
        spazi = 16;
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

// definisco una variabile che andrà a contenere la posizione della bandierina desiderata dall'utente
var flagPosition;
var f = 0;

// creo un ciclo che terminerà solo con la vittoria (tutte bandierine piazzate) o sconfitta dell'utente (mina esplosa)
do {
// chiedo all'utente di piazzare una bandierina in una posizione che può andare da 0 al numero di spazi previsti dal campo. Se sceglie uno spazio già occupato, chiedo di sceglierne un altro, finché non ne trova uno libero da altre bandierine
    do {
        flagPosition = parseInt(prompt("In che spazio del campo vuoi piazzare la bandierina? Scegli un numero da 0 a "+(spazi - 1)));
    } while (campo[flagPosition] == "🚩" || flagPosition < 0 || flagPosition >= spazi);
// se l'utente piazza una bandierina in uno spazio occupato da una mina, questa ovviamente esploderà e il gioco termina.
    if (campo[flagPosition] == "💣") {
        console.log(campo[flagPosition] = "💥");
        console.log("GAME OVER! Hai fatto esplodere una mina!");
        console.log(campo);
        alert("💥 GAME OVER! Hai fatto esplodere una mina! "+campo)
    } else {
// altrimenti la bandierina sarà piazzata sul campo e inizierà un nuovo ciclo
        campo[flagPosition] = "🚩";
        console.log(campo);
        f++;
    }

} while (f < (spazi - mine) && (campo[flagPosition] != "💥"));

// se il numero di bandierine piazzate sarà pari al numero di spazi liberi da mine, l'utente ovviamente avrà vinto
if (f == spazi-mine) {
    console.log("HAI VINTO! 😎 Sei riuscito a piazzare tutte le bandierine senza far esplodere il campo");
    alert("HAI VINTO! 😎 Sei riuscito a piazzare tutte le bandierine senza far esplodere il campo");
}