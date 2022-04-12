/* In una variabile è possibile scrivere del codice html valido, ma bisogna ricordarsi di fare l'escape per le virgolette qualora ci fosse bisogno di usarle.*/

/*Ad una variabile si può assegnare il contenuto di un'altra variabile. All'interno di una stringa inizializzata con il backtick la sintassi è leggermente diversa */

var name = 'Vale';
var hi = 'Hello' + name;
var hey = `Hello ${name}`;

console.log(hi.length);
console.log(hi[0]);
console.log(hi.length-1)

/*personalizzare il log */
console.log('%c log colorato', 'color:red')

/*La lunghezza di una stringa vuota è 0 */
console.log(' ' .length);

/*let è un modo alternativo per creare delle variabili; const è utilizzato per creare costanti. */

const PASSWORD = 'SONO UNA COSTANTE' //per convenzione le costanti hanno il nome in maiuscolo. Il valore di una costante non può essere riassegnato, a meno che non contenga un oggetto: si può, infatti, ridefinire il valore di una proprietà.

/*var è una variabile globale, cioè non è contenuta in un blocco (scope globale). ECMAscript definisce un blocco una porzione di codice tra parentesi graffe. Però, una var definita all'interno di una funzione, non può essere richiamata al di fuori di essa. Si può utilizzare return all'interno della funzione per estrarre il valore della var e lanciarlo quando si richiama la funzione.*/

{
    let x = 2;
    console.log(x);
} //let è utile quando si vuole assegnare ad una variabile uno scopo (scope), cioè appartiene ad un blocco e non può riassegnare un valore ad una variabile globale né ad una costante (quindi non devono avere lo stesso nome). Se si crea una let all'interno di un blocco, essa non può esistere al di fuori.  

let x2 = 3;
 {
     console.log(x2);
 } //let può essere usata come variabile globale quando scritta al di fuori di un blocco. La stessa cosa non è possibile con var

/*Quando si cerca di fare un'operazione matematica tra due variabili con contenuto di tipo diverso, il + è solo concatenazione, quindi converte entrambi i contenuti in stringa; il * converte entrambi i valori in numeri e li moltiplica come tali, almeno finché entrambi i valori sono solo numerici. */
var num = 4;
var testo = '4';
var prezzo = '4€';

console.log(num+testo);
console.log(num*testo);
console.log(num*prezzo);

//fare la stessa cosa con una variabile contenente un booleano risulta nella conversione di quest'ultimo in una stringa o in un numero (true=1; false=0)

var bool = false;
var valore = 'il valore della variabile booleana è ' + bool + '<br>';
document.write(valore);

var bool = Number(true); //la funzione Number() trasforma il valore booleano in un numero

var stringa = String(5); //String() trasforma un valore in stringa

/*Fare il document.write di un array vuol dire tradurre il contenuto dell'array in stringa i cui singoli valori sono separati da virgola */

/*If è una struttura di controllo. In base ad una determinata condizione, viene eseguito un certo set di istruzioni. */

let eta = prompt('Quanti hanni hai?'); //prompt: funzione antiquata

if(eta >= 18 && eta <= 120) {
    document.write('sei maggiorenne');
} else if(eta > 120) {
    document.write('sei antico')
} else
{
    document.write('sei minorenne');
}

