//Switch consente di creare una struttura di controllo delle condizioni che segue la logica del costrutto if implementando diverse opzioni che al verificarsi eseguono le istruzioni prescritte. Possono essere inseriti un numero indefinito di casi. E' adatto a situazioni dove ci si trova a lavorare con casi ben definiti (cioè uguaglianze)

let frutta = 'Banana'
switch(frutta) {
    case 'Banana':
        console.log('Le banane costano 0.92 euro al kg');
    break; // il break termina il ciclo. Senza, il ciclo continuerebbe anche se il caso successivo non è vero.
    case 'Mele':
        console.log('Le mele costano 0.64 euro al kg');
    break;
    case 'Mango':
    case 'Papaya': //questa dicitura è uguale a ||
        console.log('Manghi e papaye costano 1.79 al kg')
    break;
    default://messaggio di default nel caso tutti i casi precedenti siano falsi
        console.log('Siamo spiacenti, non disponiamo di ' + frutta)
}

//Un ciclo esegue un set di istruzioni n volte finché la condizione specificata è vera. while() è un tipo di ciclo molto compatto, ma è molto facile creare loop infiniti con esso.  

let x = 0;
while(x < 10){
    console.log('test n°' + x)
    x++
}

//do{} while() è una variante del ciclo while(). In questo caso il blocco di istruzioni viene eseguito una volta prima del controllo della condizione, indipendentemente da che sia falsa o vera. 

let frutti = ['Mele', 'Pere', 'Banane', 'Ciliegie']
let y = 0;

do{
    console.log(frutti[y], y)
    y++
} while(y <= frutti.length - 1)

//for() richiede tre argomenti per le istruzioni separati da punto e virgola. 

for(let i = 0; i < 10; i++) { //le condizioni: 1)stabilire una variabile; 2) stabilire la condizione; 3) stabilire come modificare la condizione
console.log(i);
}

//La struttura for in è un ulteriore modo per ciclare gli oggetti. Il for of determina una scomposizione di una serie di elementi iterabili, cioè soggetti singolarmente a ciclo.
let user = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 30
}
for(let chiave in user){
    console.log(chiave, user[chiave]);
}//chiave è la proprietà, user[] è il valore associato alla proprietà


let nome = 'Valentina';
let testo = ' ';
for(let carattere of nome) {
  console.log(testo += carattere += ' ')
}

//forEach() è un metodo che richiama una funzione per ogni elemento dell'array. forOf() è considerato più efficiente e innovativo. Non dà la possibilità di creare loop infiniti. Non restituisce un array.

let pizze = ['Margherita', 'Diavola', 'Marinara']

pizze.forEach(function(el) {
    console.log(el)
}) //si ha la possibilità di definire un argomento all'interno del quale il forEach inserirà un valore dell'array che si sta immettendo nel ciclo. In questo modo si può non esplicitare fin quando svolgere il ciclo.

//map resituisce un array contenente il risultato delle istruzioni date. Va sempre usato il return

num = [1, 2, 3, 4, 5, 6, 7, 8]
let numeriMoltiplicati = num.map(function(el){
    return el * 2
})
console.log(numeriMoltiplicati)

//filter() è un metodo che restituisce un array contenenti i valori che rispettano la condizione data
let filtro = num.filter(el => el > 4)
console.log(filtro)

//reduce() ritorna un unico valore applicando una funzione a tutti gli elementi di un array, la cui direzione di default è da sinistra a destra.
let sum = num.reduce((a,b) => {
    console.log(a, b)
    return a + b
}) //in questo caso a è il numero preso in considerazione e b è il numero che risulta dalla somma tra il primo e il secondo valore. L'operazione va avanti così. Con reduceRight() la direzione dell'operazione è da destra a sinistra

//every() determina se un array risponde ad un certo requisito in tutti i suoi elementi. some(funzione) fa lo stesso, ma solo con alcuni. Entrambi restituiscono un valore true o false

//find() determina il primo elemento di un array che risponde ad un requisito impostato da una funzione. findIndex() determina la posizione dell'elemento all'interno dell'array.