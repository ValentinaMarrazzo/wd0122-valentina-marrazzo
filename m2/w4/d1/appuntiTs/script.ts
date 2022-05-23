//Typescript è un linguaggio di programmazione open source sviluppato da microsoft. E' stato progettato per lo sviluppo di grandi applicazioni ed è destinato a essere compilato in Javascript per poter essere interpretato da qualunque web browser o app. Javascript è di tipizzazione debole, cioè è possibile inserire qualunque tipo di valore in una variabile e è il programma ad interpretare che tipo di dato sia; Typescript, invece, è di tipizzazione forte, cioè bisogna specificare di che tipo sia il contenuto di una variabile e non è possibile riassegnarla. Typescript permette di capire come verrà visualizzato il codice e se ci sono errori prima della compilazione. Javascript è un linguaggio interpretato, cioè interpreta il tipo di dato; typescript è un programma compilato, cioè va lanciato un comando che verrà controllato e ottimizzato in un codice definitivo.

let nome:string = 'Mario'; //se non si specifica il tipo di dato, ts assumerà automaticamente che il dato sarà di tipo any. Le variabili in any si possono riassegnare con altri tipi di dato, invece specificando il tipo di dato non si può riassegnare con altri tipi di dato. Non è consigliabile abusare di any.

//nome = 5; darà errore perché 5 non è un dato di tipo stringa

const ID:number = 125

//tipi di dato:

let str:string = 'testo'
let num:number = 3
let bool:boolean = true
let obj:object = {}
let arr:[] = []
let strArr:string[] = ['mario', 'luigi', 'peach']
let numArr:number[] = [0, 1, 2]
let objArr:object[] = [{}, {}, {}]
let anyArr:any[] = ['Rosalinda', 2, {}]
let unk:unknown = 12; //dato sconosciuto: a differenza di un dato any, non lascia leggere le proprietà in esso contenute (nel caso il tipo di dato fosse un oggetto).
let union:(string|object) = 'test' //può contenere o una stringa o un oggetto. E' più preciso di any

//funzioni

function vuoto(testo:string):void{
    console.log(testo);
    
}//una funzione vuota non è richiesto che restituisca qualcosa con return 

function ottieniSaluto(testo:string):string{
    return testo 
} //Per com'è stata definita, questa funzione può restituire solo una stringa

function saluto(testo:string, tag:string):HTMLElement{
    let t:HTMLElement = document.createElement(tag)
    t.innerHTML = testo
    return t 
}

saluto('Hey', 'p')

//classi
class User {
    name!: string;
    lastname!: string;
    age!: number
}

let user:User = new User(); /*oppure: {
    name: 'Mario',
    lastname: 'bros',
    age: 40
}*/

let users:User[] = [user]
