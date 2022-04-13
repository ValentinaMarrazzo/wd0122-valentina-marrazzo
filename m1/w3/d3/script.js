//Usare typeof permette di esplicitare il tipo di dato che si desidera esaminare.

let num = 5; 
let str = 'test';
let bool = true;
let arr = [];
let obj = {};

console.log(
    typeof num,
    typeof str,
    typeof bool,
    typeof arr,
    typeof obj
);

//in Javascript gli array sono considerati un'istanza di un oggetto: la differenza è principalmente formale, perché sono array come in tutti gli altri linguaggi.

/* In Js:
- = assegna un valore
- == è un'uguaglianza, cioè due valori comparati hanno lo stesso valore anche se non dello stesso tipo
- === è identità, cioè due valori hanno lo stesso valore e dello stesso tipo 
- != disuguaglianza, non uguale
- !== disuguaglianza, non identico*/ 

//La funzione è una porzione di codice strutturalmente delimitata che esegue le istruzioni definite al suo interno

/*function() {
    alert('alert invisibile');
}  <- funzione anonima: non si ha modo di chiamarla e non verrà eseguita da sola, ma può essere usata da altre funzioni. Darà errore perché non ha un nome.*/

function aFunction() {
    console.log('funzione invocata');
}

let bottone = document.getElementById('bottone');
bottone.onclick = aFunction;

//Lo hoisting indica la possibilità di Js di eseguire una funzione prima che sia dichiarata: è come se la definizione della funzione fosse portata in evidenza al programma corrente. 

function trasformaGrassetto(s) {
    return '<b>'+ s + '</b>' + '<br>'
}

let saluto = 'Hey';
document.write(trasformaGrassetto(saluto));

//Nelle funzioni parametriche si specifica un valore generale tra parentesi per manipolare dei valori all'interno delle istruzioni della funzione e utilizzare la funzione rispetto a valori specifici al momento del lancio. 

function somma(a,b) {
    return a + b;
}

let res1 = somma(3,6);

console.log(res1);

//se è previsto un parametro, va usato, altrimenti è meglio non metterlo. 

function facoltativo(a,b,c = 5) {
    return a * b * c
} //se non viene dato un valore a c, il suo valore preimpostato sarà 5. c è un parametro facoltativo. In alternativa si può creare una variabile let valoreFacoltativo = c || 5.

facoltativo(4,3)

//Le closure sono funzioni che contengono altre funzioni

//Le funzioni freccia eliminano gran parte della sintassi tipica della funzione per semplificarne la scrittura

let divisione = () => 20 / 2;
console.log(divisione());

let divisionePro = (a,b) => a / b;
console.log(divisionePro(4,2));