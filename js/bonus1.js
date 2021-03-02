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

// stabilisco il livello di difficoltà e la dimensione del campo
var mine = 6;
var spazi = 16;
var campo = mineFieldGen(mine, spazi);
console.log(campo);


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
    } else {
// altrimenti la bandierina sarà piazzata sul campo e inizierà un nuovo ciclo
        campo[flagPosition] = "🚩";
        console.log(campo);
        f++;
    }

} while (f < (spazi - mine) && (campo[flagPosition] != "💥"));

// se il numero di bandierine piazzate sarà pari al numero di spazi liberi da mine, l'utente ovviamente avrà vinto
if (f == spazi-mine) {
    console.log("HAI VINTO! Sei riuscito a piazzare tutte le bandierine senza far esplodere il campo");
}