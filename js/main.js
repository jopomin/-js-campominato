/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati

// Creo una funzione con 3 argomenti, due che definiscono gli estremi (inclusi) del range entro il quale generare i numeri e una terza che definisca il numero di numeri da generare
function genRandPerN (nuMin, nuMax, nuNum) {
// Creo un array vuoto in cui andrò ad inserire i numeri generati
    var nuList = [];
// Definisco una variabile in cui andrà inserito il singolo numero generato
    var geNum;
// Creo un ciclo for che girerà tante volte quanti saranno i numeri da generare
    for (var a = 0; a < nuNum; a++) {
        geNum = Math.floor(Math.random()*nuMax+nuMin);
// Includo un secondo ciclo for per confrontare il numero generato con quelli già presenti nell'array
        for (var b = 0; b < nuList.length; b++) {
// Verrà generato un nuovo numerò finché non sarà diverso da quelli già presenti
            do {
                geNum = Math.floor(Math.random()*nuMax+nuMin);
            } while (geNum == nuList[b])
        }
// Inserisco in posizione "a" il numero univoco ottenuto
        nuList[a] = geNum;
    }
// Restituisco il risultato ordinato della funzione...
    return nuList;
}

// che andrò a inserire in un array con scope globale
var listaNumeri = genRandPerN(1, 100, 16);
// Stampo l'array per controllare che tutto funzioni
console.log(listaNumeri);