/* 
In javascript si lavora con 5 tipi di dato:
- numero (es: 5)
- stringa (es: '5')
- booleano (es: true/false)
- oggetto (liste di dati e funzioni separate per nome. Coppia nome-valore)
- array (lista di valori identificati per numero).

I dati sono assegnati a delle partizioni di memoria (dei contenitori), cioè le variabili (var = dato;).
Ad una variabile può essere assegnato il valore di un'altra variabile 

*/

var num = 5;
var string = 'sequenza caratteri';
var boolean = true;
var obj = {
    nome: 'Nome',
    cognome: 'Cognome',
    eta: 22
};
var array = [
    1,
    2,
    3,
    'stella'
];

/* Per mostrare le variabili e gli oggetti all'interno del documento può essere usato document.write(variabile/oggetto). Tuttavia è un sistema antiquato che non andrebbe usato, perché ad un nuovo caricamento cancella quello che è presente nella pagina per mostrare ciò che deve mostrare. */

document.write(obj.nome);

/*operatori e funzioni */

function somma() {
    document.write(2 + 6);
}

function ottieniSomma() {
    return 2 + 6;
}

/*La differenza tra funzioni con return e senza è: le funzioni con return non hanno un dato, ma se lo devono ricavare al momento del lancio della funzione. Si può richiamare una funzione per eseguirla assegnandola ad una variabile e richiamando poi la variabile. */

/*è possibile richiamare una funzione prima che venga caricata tramite il meccanismo di hoisting. */

/*lavorare con gli oggetti del DOM */

var div1 = document.getElementById('elem');
div1.innerHTML = 'Così cambio il valore all interno dell elemento'; //non fa il parse dell'html
//div1.style.backgroundColor = 'red';

div1.classList.add('') //aggiunge una classe ad un elemento ma solo se ce ne sono già delle altre

var blocchi = document.getElementsByClassName('blocco');//getElementsByClassName è un array di oggetti

blocchi[0].style.backgroundColor = 'red'; //è obbligatorio specificare quale elemento all'interno dell'array si richiama