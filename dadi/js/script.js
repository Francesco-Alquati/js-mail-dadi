const button = document.getElementById('play-game');

button.addEventListener('click', function (){

// CREO LA VARIABILE PER IL LANCIO DEL DADO DEL GIOCATORE
let player_dice = Math.floor((Math.random() * 6 + 1 ));
console.log('player: ' + player_dice);

// CREO LA VARIABILE PER IL LANCIO DEL DADO DEL COMPUTER
let pc_dice = Math.floor((Math.random() * 6 + 1 ));
console.log('pc: ' + pc_dice);

// CREO UN IF PER CONFRONTARE LE DUE VARIABILI 
if(player_dice > pc_dice) {
    console.log('Hai vinto');
    document.getElementById('result').innerHTML = `Hai vinto`;
}
else if(player_dice < pc_dice) {
    console.log('Hai perso');
    document.getElementById('result').innerHTML = `Hai perso`;
}
else {
    console.log('Pareggio');
    document.getElementById('result').innerHTML = `Pareggio`;
}

document.getElementById('player').innerHTML = `${player_dice}`;
document.getElementById('pc').innerHTML = `${pc_dice}`;
})

