function sfondoRosso(e) {
    let blocchi = document.getElementsByClassName('blocco');
    blocchi[e].style.backgroundColor = 'red';
}

//nelle parentesi tonde va inserito un parametro che equivale a qualsiasi valore scritto nelle parentesi della funzione quando viene richiamata nell'html. Non va inserito un valore vuoto se la funzione è parametrica.

function sfondoBlu(u) {

    u.style.backgroundColor = 'blue'; 
} //il this seleziona tutto l'elemento e funge da parametro

