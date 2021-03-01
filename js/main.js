/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */


// Creo una funzione con 3 argomenti, due che definiscono gli estremi (inclusi) del range entro il quale generare i numeri e una terza che definisca il numero di numeri da generare
function genRandPerN (nuMin, nuMax, nuNum) {
// Creo un array vuoto in cui andrò ad inserire i numeri generati
    var nuList = [];
// Definisco una variabile in cui andrà inserito il singolo numero generato
    var geNum;
// Creo un ciclo for che girerà tante volte quanti saranno i numeri da generare
    for (var a = 0; a < nuNum; a++) {
// Farò generare un numero incluso nel range, finché risulterà incluso nell'array
      do {
        geNum = Math.floor(Math.random()*nuMax+nuMin);
      } while (nuList.includes(geNum));
// a quel punto lo inserirò nella posizione "a" dell'array
      nuList[a] = geNum;
    }
// Restituisco il risultato della funzione...
    return nuList;
}

// ...che andrò a inserire in un array con scope globale, definito dagli argomenti richiesti in traccia
var listaNumeri = genRandPerN(1, 100, 16);
// ordino il nuovo array
listaNumeri.sort(function(a, b){return a-b});
// e lo stampo per controllare che tutto funzioni
console.log(listaNumeri);

// Creo un array per contenere i numeri inseriti dall'utente
var userList = [];
var i = 0;
var userNum;
// Ciclo con un While per il numero di volte richiesto in traccia
do {
// Chiedo nuovamente l'inserimento se il numero è fuori range o è già stato inserito
    do {
        userNum = parseInt(prompt("Inserisci un numero tra 1 e 100 e che non sia già stato inserito"));
        console.log(userNum);
    } while ((userList.includes(userNum)) || (userNum < 1) || (userNum > 100));
// Se il numero è incluso tra l'array di mine il gioco termina e mostro il punteggio (i)
    if (listaNumeri.includes(userNum)) {
        console.log("Hai fatto scoppiare la mina!. Il tuo punteggio è "+i);
        alert("Hai fatto scoppiare la mina!. Il tuo punteggio è "+i);
// altrimenti inserisco il numero in posizione "i" dell'array che contiene i numeri scelti dall'utente
    } else {
        userList[i] = userNum;
        console.log(userList);
// incremento l'indice
        i++;
    }
// il gioco termina quando l'utente inserisce tutti i numeri "liberi" (vittoria) o in cui pesca una mina (sconfitta)
} while ((i <= (100 - 16)) && (listaNumeri.includes(userNum) == false));

// in caso di vittoria viene stampato un messaggio
if (i > (100 - 16)) {
    console.log("Complimenti, sei riuscito ad attraversare tutto il campo minato!");
    alert("Complimenti, sei riuscito ad attraversare tutto il campo minato!");
}