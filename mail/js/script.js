// CREO IL MIO ARRAY DI EMAIL
const saved_email = ["francesco.alquati@tiscali.it", "alquati.francesco@tiscali.it", "francesco.alquati@gmail.com", "alquati.francesco@gmail.com", "pippo@tiscali.it", "pluto@tiscali.it", "pape.rino@tiscali.it", "mario@gmail.com", "maria@gmail.com", "luca@gmail.com",];

// RECUPERO IL PULSANTE DAL DOM
const button = document.getElementById('search');

button.addEventListener('click', function (){

    // RECUPERO IL VALORE INSERITO NEL CAMPO INPUT
    let email = document.getElementById('user-email').value;

    // CREO LA VARIABILE DI CONTROLLO
    let found_email = false

    // CICLO L'ARRAY E LO CONFRONTO CON L'ELEMENTO CHE STO CICLANDO CON LA PAROLA INSERITA DALLA FORM
    for (i = 0; i < saved_email.length; i++){
        if(saved_email[i].toLowerCase() === email.toLowerCase()){
            // IMPOSTO LA VARIABILE DI CONTROLLO A TRUE
            found_email = true;
        }
    }

    // MOSTRO IL MESSAGGIO CORRISPONDENTE A SECONDA DEL VALORE DELLA VARIABILE DI CONTROLLO
    if(found_email === true){
        console.log("login consentito");
        document.getElementById('login').innerHTML = `login consentito`;
    }
    else {
        console.log("login non consentito");
        document.getElementById('login').innerHTML = `login non consentito`;
    }

})