/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */


// Creo una funzione con 3 argomenti, due che definiscono gli estremi (inclusi) del range entro il quale generare il valore delle mine e una terza che definisca il numero di mine da generare
function mineField (nuMin, nuMax, nuMines) {
    // Creo un array vuoto in cui andrò ad inserire le mine
        var cpuMines = [];
    // Definisco una variabile in cui andrà inserito il singolo numero generato
        var mine;
    // Creo un ciclo for che girerà tante volte quanti saranno le mine da generare
        for (var c = 0; c < nuMines; c++) {
    // Farò generare una mina incluso nel range, finché risulterà incluso nell'array
          do {
            mine = Math.floor(Math.random()*nuMax+nuMin);
          } while (cpuMines.includes(mine));
    // a quel punto la inserirò nella posizione "c" dell'array
          cpuMines[c] = mine;
        }
    
        console.log(cpuMines);
        cpuMines.sort(function(a, b){return a-b});
    // Creo un array per contenere i numeri (bandierine) inseriti dall'utente
        var userFlags = [];
        var i = 0;
        var flag;
        // Ciclo con un do-while finchè non si verificano le condizioni di vittoria/sconfitta
        do {
        // Chiedo nuovamente l'inserimento se il numero è fuori range o è già stato inserito
            do {
                flag = parseInt(prompt("Inserisci un numero tra 1 e 100 e che non sia già stato inserito"));
            } while ((userFlags.includes(flag)) || (flag < 1) || (flag > 100));
            console.log(flag);
        // Se il numero è incluso tra l'array di mine il gioco termina e mostro il punteggio (i)
            if (cpuMines.includes(flag)) {
                return "Hai fatto scoppiare una mina! Il tuo punteggio è "+i;
        // altrimenti inserisco il numero in posizione "i" dell'array che contiene i numeri scelti dall'utente
            } else {
                userFlags[i] = flag;
        // incremento l'indice
                i++;
            }
        // il gioco termina quando l'utente inserisce tutti i numeri "liberi" (vittoria) o in cui pesca una mina (sconfitta)
        } while ((i <= (nuMax - nuMines)) && (cpuMines.includes(flag) == false));
    
        // in caso di vittoria viene stampato un messaggio
        if (i > (nuMax - nuMines)) {
            return "Complimenti, hai attraversato tutto il campo minato!"
        }
    
    }
    
    var result = mineField(1, 100, 16);
    console.log(result);