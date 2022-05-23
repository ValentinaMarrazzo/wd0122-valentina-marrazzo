//Typescript è un linguaggio di programmazione open source sviluppato da microsoft. E' stato progettato per lo sviluppo di grandi applicazioni ed è destinato a essere compilato in Javascript per poter essere interpretato da qualunque web browser o app. Javascript è di tipizzazione debole, cioè è possibile inserire qualunque tipo di valore in una variabile e è il programma ad interpretare che tipo di dato sia; Typescript, invece, è di tipizzazione forte, cioè bisogna specificare di che tipo sia il contenuto di una variabile e non è possibile riassegnarla. Typescript permette di capire come verrà visualizzato il codice e se ci sono errori prima della compilazione. Javascript è un linguaggio interpretato, cioè interpreta il tipo di dato; typescript è un programma compilato, cioè va lanciato un comando che verrà controllato e ottimizzato in un codice definitivo.
var nome = 'Mario'; //se non si specifica il tipo di dato, ts assumerà automaticamente che il dato sarà di tipo any. Le variabili in any si possono riassegnare con altri tipi di dato, invece specificando il tipo di dato non si può riassegnare con altri tipi di dato. Non è consigliabile abusare di any.
//nome = 5; darà errore perché 5 non è un dato di tipo stringa
var ID = 125;
//tipi di dato:
var str = 'testo';
var num = 3;
var bool = true;
var obj = {};
var arr = [];
var strArr = ['mario', 'luigi', 'peach'];
var numArr = [0, 1, 2];
var objArr = [{}, {}, {}];
var anyArr = ['Rosalinda', 2, {}];
var unk = 12; //dato sconosciuto: a differenza di un dato any, non lascia leggere le proprietà in esso contenute (nel caso il tipo di dato fosse un oggetto).
var union = 'test'; //può contenere o una stringa o un oggetto. E' più preciso di any
//funzioni
function vuoto(testo) {
    console.log(testo);
} //una funzione vuota non è richiesto che restituisca qualcosa con return 
function ottieniSaluto(testo) {
    return testo;
} //Per com'è stata definita, questa funzione può restituire solo una stringa
function saluto(testo, tag) {
    var t = document.createElement(tag);
    t.innerHTML = testo;
    return t;
}
saluto('Hey', 'p');
//classi
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var user = new User(); /*oppure: {
    name: 'Mario',
    lastname: 'bros',
    age: 40
}*/
var users = [user];
