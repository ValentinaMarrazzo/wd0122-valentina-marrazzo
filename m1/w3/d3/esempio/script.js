function aggiungiNumero(bottone) {
    let numero = bottone.innerHTML; //è una stringa
    
    let display = document.querySelector('#display');
    
    display.value += numero;
}

function risultato() {
    let display = document.querySelector('#display');
    let totale = eval(display.value)
    display.value = totale;
}