//In Javascript un oggetto può contenere ogni tipo di dato. In esso, i dati sono organizzati in coppie chiave-valore. Le funzioni all'interno di un oggetto prendono il nome di metodi.

let smartphone = {
    marca: 'samsung',
    modello: 'galaxy s7 edge',
    prezzo: 150,
    accendi: function(){
        //istruzioni
    }
}

let j = {}//oggetto vuoto

let pizze = {
    gusto: 'Margherita',
    tipo: 'Napoletana',
    prezzo: 5,
    dettagli: function(){
        console.log('La pizza Margherita costa 5 euro');
    }
}

console.log(pizze.gusto);
pizze.gusto = 'Diavola' //si possono riassegnare i valori alle chiavi dell'oggetto
console.log(pizze);

function Pizza(g, t, p){
    this.gusto = g,
    this.tipo = t,
    this.prezzo = p,
    this.dettagli = function(){
        console.log('La pizza Margherita costa 5 euro');
    }
}//cosruttore dell'oggetto. Ogni volta che si invocherà questa funzione si costruirà un oggetto con queste proprietà

let margherita = new Pizza('margherita', 'napoletana', 5)

console.log(margherita)

//La keyword prototype consente di aggiungere delle proprietà o metodi al costruttore dell'oggetto e agli oggetti che già esistono

Pizza.prototype.disponibilita = true;

//La programmazione orientata ad oggetti è un paradigma di programmazione alternativa introdotto con lo standard ECMA 2015. Si basa sulla creazione di modelli generici, cioè le classi, dalle quali è possibile istanziare degli oggetti che sono espressione concreta della classe.

class PizzaClasse {
    constructor(g, t = 'Napoletana', p = 5) {
        //all'interno del constructor inizializzo le proprietà ma posso anche lanciare funzioni/avviare processi
        this.gusto = g,
    this.tipo = t,
    this.prezzo = p,
    this.dettagli()
    }

    dettagli() {
        console.log('La pizza ' + this.gusto + ' di tipo ' +this.tipo + ' costa ' +this.prezzo)
    }
}

let capricciosa = new PizzaClasse('Capricciosa')

class MetodoNuovo{
    constructor(obj) {
        this.gusto = obj.gusto || '4 formaggi'
        this.tipo = obj.tipo || 'Napoletana'
        this.prezzo = obj.prezzo || 6
    }
}

let info = {
   /* gusto: 'Diavola',
    tipo: 'Napoletana',*/
    prezzo: 6
}

let metodonuovo = new MetodoNuovo(info)

console.log(metodonuovo);

//Le classi possono essere ereditate con extends

class Persona{
    constructor(n, c, a){
        this.nome = n
        this.cognome = c
        this.eta = a

    }
    presentazione() {
        return `Ciao, mi chiamo ${this.nome} ${this.cognome} e ho ${this.eta} anni`;
    }
}

let persona = new Persona('Mario', 'Rossi', 30)

console.log(persona.presentazione());

class Studente extends Persona{
    constructor(n, c, a, m){
        super(n, c, a) //richiama i metodi e le proprietà del costruttore del genitore
        this.materie = m//si possono aggiungere altri metodi scrivendo all'interno o lanciando prototype
    }

    presentazione() {
       return super.presentazione() + `. Sto studiando le seguenti materie: ${this.materie}`
    }

    static mostraData() {
        console.log(new Date())
    }//Un metodo si definisce statico quando è definito all'interno della classe e si può lanciare anche senza aver istanziato l'oggetto. Non si può richiamare dall'istanza, ma dalla classe
}

let studente = new Studente('Valentina', 'Marrazzo', 22, ['HTML', 'CSS', 'JS'])
console.log(studente.presentazione())

Studente.mostraData()

//Nella programmazione sincrona qualunque riga di codice viene eseguita l'una dopo l'altra: se una riga non è terminata o si blocca, si blocca anche tutto il resto. Nella programmazione asincrona si mira a costruire righe che non blocchino tutto il resto.

function scrivi(testo, callback){
    let testoDefinitivo = callback(testo)
    document.write(testoDefinitivo)
}

function grassetto(testo) {
        return '<b>' + testo + '</b>'
    
}

scrivi('ciao', grassetto)

//Le promises sono costrutti di js che permettono di gestire un dato non disponibile al momento ma che arriverà in seguito. Tra le sue funzioni permette anche di concatenare callback.

let promise = new Promise(function(resolve, reject) {
    let password = 'password'
    if(password == 'password'){
        resolve('accesso consentito')
    } else {
        reject('accesso NON consentito')
    }

})//promise è una classe. Le promises possono gestire un successo e un insuccesso. L'insuccesso non è per forza necessario

promise.then(function(s){
    console.log(s)
}, function(e){
    console.log(e)
}) //then è un metodo delle promises che serve a gestirle. Le funzioni richiamano le logiche di resolve e reject perché sono al loro posto come parametri in then.

let timer = new Promise(function(resolve){
    setTimeout(function(){
        resolve('ok')
    }, 5000)
})

timer.then(function(data){
    console.log(data)
})

//le funzioni async non fanno attendere il resto del codice

function prom(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('ok')
        }, 5000)
    })
}

async function scriviQui(){
    let res = await prom().then(resolve => resolve) //await dice alla funzione principale di attendere il completamento della funzione indicata
}

scriviQui()

//In js si può fare un controllo della correttezza dell'esecuzione di istruzione e degli eventuali errori con try(){}catch(){}

