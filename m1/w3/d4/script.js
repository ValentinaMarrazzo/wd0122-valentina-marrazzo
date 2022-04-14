/*In Js, un array è una lista di elementi con una lunghezza non definita. I valori sono numerati direttamente dal programma; sono da considerarsi come oggetti. 
Per legibilità e per praticità gli array vanno inseriti in delle variabili. */

pizze = [
    'margherita',
    'diavola',
    '4 stagioni'
]

let [pizza1, pizza2, pizza3] = pizze;   //Assegnamento in destrutturazione. Ridistribuisce il contenuti di un array in n variabili separate. E' usata in sostituzione di una sintassi ormai superata, come: let pizza1 = pizze[0]; let pizza2 = pizze[1] eccetera

let nomi = [
    'Mario',
    'Zaira',
    'Luca',
    'Massimo',
    'Adriana'
]

nomi.sort() //sort() organizza gli elementi in un array come stringhe in ordine alfabetico o in ordine ascendente

console.log(nomi);

let frase = 'Sto studiando Javascript';
indice = frase.indexOf('s');//è una funzione di ricerca che trova l'elemento indicato . In caso non trovi nulla, restituisce un -1. Accetta un secondo parametro che indica a partire da quale posizione iniziare a cercare
console.log(indice);

//search() procede a fare una ricerca all'interno dell'array e restituisce il numero della posizione dell'elemento cercato. Non accetta un secondo parametro ma espressioni regolari, quindi la ricerca è più dettagliata

nomi.push('Ivona') //Per aggiungere elementi dagli array come ultimo elemento. Per aggiungerne uno in prima posizione si usa unshift()
console.log(nomi)

nomi.pop() //Per rimuovere l'ultimo elemento
console.log(nomi)
let nomeEliminato = nomi.pop()//è possibile assegnare ad una variabile il risultato di pop(). Così si può ottenere una copia dell'elemento eliminato
console.log('hai eliminato ' + nomeEliminato)

//per eliminare il primo elemento di un array si usa shift(). Usandolo si riorganizzano gli elementi

//delete() si usa per cancellare un elemento nell'array, ma non va utilizzato perché crea un vuoto al posto dell'elemento eliminato, dal momento che non lo elimina ma ne annulla il valore (quindi conserva l'ordine dell'array). Può eliminare anche le variabili. L'alternativa più versatile è splice().

nomi.splice(2, 1) //il primo argomento è il punto da cui iniziare a cancellare; con il secondo se ne specifica la quantità di elementi considerati

nomi.splice(2, 1, 'Ledio') //il terzo parametro sostituisce il valore selezionato con quello indicato all'interno del metodo

let nomi2 = ['Francesco', 'Simone', 'Pasquale'];
let nomi3 = ['Ivona', 'Leopoldo', 'Chiara'];
let tutto = nomi.concat(nomi2,nomi3); 
console.log(tutto);//Il metodo concat() concatena i contenuti di più array separati.

//Per estrarre parte della stringa si usa slice(): il primo parametro indica la posizione di partenza del "taglio", mentre il secondo la posizione di arrivo. Usare i numeri negativi fa partire dalla fine della stringa. Per lo stesso scopo si può usare substring().

//il metodo replace() cerca una stringa e la sostituisce con un'altra.

arrFrase = frase.split(' ') //split ricerca all'interno della stringa indicata il carattere specificato nel parametro. Spezza la stringa in corrispondenza del carattere indicato nel parametro e genera un array i cui elementi sono i segmenti generati dalla divisione. L'operazione contraria si fa con join() su di un array per convertirlo in un'unica stringa

let x = 1;
console.log(x++); //incremento di 1
console.log(x--); //decremento di 1

console.log(Math.random()); //metodo di math per ottenere un numero randomico

// ----------  ESERCIZIO --------


let target = document.querySelector('#grazie');
let ringraziamenti = ['Grazie', 'Grazie mille', 'Tante grazie'];
let punteggiatura = [' ', '!', '!!'];
let smile = [' ', ':)', ':D'];

let rand = Math.floor(Math.random() * 3); //Math.floor arrotonda per difetto 


fraseGrazie = ringraziamenti[rand] +  punteggiatura[rand] + ' ' + smile[rand]
//oppure

function generaRandom(arr){
    return Math.floor(Math.random() * arr.length);
}

let fraseGrazie2 = generaRandom(ringraziamenti) 
let fraseGrazie3 = generaRandom(punteggiatura)
let fraseGrazie4 = generaRandom(smile)

//in questo modo posso aggiungere dati senza modificare il codice

let completo = fraseGrazie2 + fraseGrazie3 + fraseGrazie4

console.log(completo)