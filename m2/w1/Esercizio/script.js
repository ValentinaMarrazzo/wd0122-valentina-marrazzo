let today = new Date();
document.querySelector('#data').innerHTML = today.toLocaleDateString();

day = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
document.querySelector("#giorno").innerHTML = day[today.getDay()]  + ' ' + today.getDate();

month = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
document.querySelector("#mese").innerHTML = month[today.getMonth()];
document.querySelector("#anno").innerHTML = today.getFullYear();

