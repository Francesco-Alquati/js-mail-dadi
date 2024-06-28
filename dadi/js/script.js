// CREO LA VARIABILE PER IL LANCIO DEL DADO DEL GIOCATORE
let player_dice = Math.floor((Math.random() * 6 + 1 ));
console.log('player: ' + player_dice);

// CREO LA VARIABILE PER IL LANCIO DEL DADO DEL COMPUTER
let pc_dice = Math.floor((Math.random() * 6 + 1 ));
console.log('pc: ' + pc_dice);

// CREO UN IF PER CONFRONTARE LE DUE VARIABILI 
if(player_dice > pc_dice) {
    console.log('Hai vinto');
}
else if(player_dice < pc_dice) {
    console.log('Hai perso');
}
else {
    console.log('Pareggio');
}