Ciao ragazzi,
Esercizio di oggi:
nome repo: js-mail-dadi
Mail
Chiedi all’utente la sua email (tramite prompt o input, a voi la scelta),
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Vietato utilizzare la funzione includes
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:


Suddivido il problema in sottoproblemi

Esercizio Mail

1 - Creo un input type email nel file html
2 - Creo un button per la ricerca
3 - In js creo un array con la lista dell'email che possono accedere
4 - In js recupero il button per la ricerca e gli applico una funcion al click
5 - Nella function recupero il valore inserito nel campo input dall'utente
6 - Nella function creo una variabile di controllo 
7 - Nella function Ciclo l'array e confronto l'elemento che sto ciclando con la parola inserita nella form
8 - Se l'email è presente nell'array stampo "login consentito"
8.1 - Se l'email non è presente nell'array stampo "login non consentito"


Esercizio Gioco dei dadi

1 - Creo una variabile per il lancio del dado del giocatore
1.1 - Tramite il metodo random() della libreria Math faccio generare un valore casuale tra 0 e 1 (non compreso) per la variabile a cui lo applico
1.2 - Moltiplico il numero generato per 6 e addizziono 1 cosi da ricevere un valore randomico compreso tra 6 e 1
1.3 - Applico il metodo floor() della libreria Math per arrotondare per difetto al numero intero più piccolo
2 - Creo una variabile per il lancio del dado del computer
2.1 - Tramite il metodo random() della libreria Math faccio generare un valore casuale tra 0 e 1 (non compreso) per la variabile a cui lo applico
2.2 - Moltiplico il numero generato per 6 e addizziono 1 cosi da ricevere un valore randomico compreso tra 6 e 1
2.3 - Applico il metodo floor() della libreria Math per arrotondare per difetto al numero intero più piccolo
3 - Creo una condizione if nel quale confronto i risultati del lancio del dado del giocatore e del computer
3.1 - Se il valore della varibile del giocatore è maggiore del valore della variabile del computer allora vince il giocatore
3.2 - Se il valore della varibile del giocatore è minore del valore della variabile del computer allora vince il computer
3.3 - Se i valori delle due variabili sono uguali allora pareggiano 
