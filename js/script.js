// Chiedere al cliente quanti chilometri vuole percorrere e quanti anni ha.
alert('ATTENZIONE! \nQuesto è il sito ufficiale di Travel Whit Boolean. Qui potrai prenotare il tuo biglietto del treno. Buon Viaggio :)');

// Chiedere al cliente quanti chilometri vuole percorrere trasformando la risposta in un numero.
const kilometres = parseInt (prompt ("Benvenuto in Travel With Boolean, quanti chilometri vuoi percorrere?"));

// Chiedere al cliente quanti anni ha trasformando la risposta in un numero
const clientAge = parseInt (prompt ("In base alla tua età potrai avere uno sconto sul prezzo del biglietto. Quanti anni hai?"));
console.log(kilometres, clientAge);

// Calcolare il prezzo del biglietto in base ai chilometri inseriti
const price = kilometres * 0.21;
console.log(price);

// Applichiamo un controllo
 if (isNaN(kilometres) || isNaN(clientAge)) {
    document.getElementById("text").innerHTML = "ERRORE!<br>Si prega di utilizzare solo numeri!";
    console.log('ERRORE TIPOLOGIA DATI');
} else {
// Calcoliamo lo sconto del biglietto
    const priceUnder = (0.8);
    const priceOver = (0.6);

    let finalPrice = '';

    if (clientAge <= 18) {
        finalPrice = (price * priceUnder).toFixed(2);
        console.log(finalPrice);
    } else if (clientAge >= 65) {
        finalPrice = (price * priceOver).toFixed(2);
        console.log(finalPrice);
    } else {
        finalPrice = price;
        console.log(finalPrice);
    }

// Stampiamo il prezzo scontato
    document.getElementById("text").innerHTML = `Il prezzo del tuo biglietto è: € ${finalPrice}`;
}