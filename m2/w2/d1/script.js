//Modi per creare oggetti
let obj1 = {
    nome: 'Mario'
};//oggetto già pronto all'utilizzo

function Obj2(){
    this.nome = 'Luigi'
} //"libretto delle istruzioni" per creare un oggetto. E' il metodo più vecchio
let obj2 = new Obj2();

class ClasseOggetto{
    constructor(){
        this.nome = 'Toad'//this si riferisce di volta in volta all'oggetto che si sta creando. Il this è disponibile solo all'interno del constructor. Può agganciarsi sia alla classe che ad un suo metodo quindi fare attenzione
    }
}//come il metodo sopra, questo metodo serve per creare oggetti identici. Qui viene creata una classe. Questo sistema in particolare risponde al concetto di ereditarietà. E' preferibile

let obj3 = new ClasseOggetto();

class Automobile{
    constructor(_marca, _colore){
        this.marca = _marca;
        this.colore = _colore;
    }//constructor è un metodo all'interno della classe che si invoca da solo al momento dell'istanziamento e serve per inizializzare le proprietà dell'oggetto. 
}

let mercedes = new Automobile('Mercedes', 'Bianca')
let fiat = new Automobile();
fiat.nome = 'Fiat'
fiat.colore = 'blu'

let pizza = {
    gusto : 'Margherita',
    0 : 'test'
}

pizza['gusto'] //sintassi possibile ma non corretta. Utile quando ci sono proprietà dal nome con numeri o con altri simboli. Il valore si assegna sempre alla stessa maniera. Senza virgolette converte il contenuto delle parentesi in una stringa. E' comunnque un metodo da evitare perché poco chiaro alla lettura

class Borsa{
    constructor(_marca, _colore){
        this.marca = _marca
        this.colore = _colore
        this.prezzo = 10000
    }

    sconto(percentuale){
        this.prezzo = (this.prezzo/100) * (100 - percentuale)
    }
}

let lv = new Borsa('LV', 'Bianca')
lv.sconto(40)
console.table(lv)

let carpisa = new Borsa('Carpisa', 'verde')

Borsa.prototype.brandProtetto = true //prototype aggiunge una nuova coppia chiave valore in una classe