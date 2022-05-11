//dichiarazione di classe
class Rectangle{
    constructor(h, w){
        this.height = h;
        this.width = w
    }
} //La classe va sempre definita prima di essere chiamata
let r = new Rectangle()

//espressione di classe senza nome
let Triangle = class {
    constructor(h, w){
        this.height = h;
        this.width = w
}
}

console.log(Triangle.name) //la proprietà name permette di accedere al nome della classe dall'esterno

//espressione di classe nominata
let square = class Square {
    constructor(l){
        this.l = l
    }
}

//il corpo di una classe è la parte di codice racchiusa tra parentesi graffe. Viene eseguito in modalità script, cioè il codice scritto è soggetto a una sintassi più rigorosa per aumentare le prestazioni

//constructor è un metodo che viene lanciato in fase di istanziamento. Il costruttore può essere omesso; non ce ne possono essere più di uno.

//La parola chiave static definisce un metodo statico o una proprietà per una classe. Un metodo o una proprietà statica viene lanciato senza istanziare una classe.
class SuperForm {
    static createHTMLinputElement(type, classes){
        let input = document.createElement('input')
        input.type = type
        if(classes){
        input.classList.add(classes)
        }
        return input
    }
}

SuperForm.createHTMLinputElement('text', 'form-control')

//il singleton restituisce un oggetto con delle funzioni che non sono state eseguite. E' una funzione che da sola non fa niente. Il console.log di un singleton restituisce un oggetto. Può essere usato come contenitore di funzioni. Non va istanziato. Il fatto che venga eseguita da sola all'inizio permette di eseguire solo una volta la lettura della variabile indicata così che poi le funzioni abbiano effetto.
let sigleton = (function(){
    let i = 0;
    return {
        incrementa: () => i++,
        decrementa: () => i--,
        reset: () => i = 0,
        log: () => console.log(i)
    }
})()

//funzione che si auto-esegue: sono anonime. viene eseguita alla lettura.
(function(){console.log('auto-eseguita')})()

//L'incapsulamento permette di costruire una classe all'interno di una variabile senza bisogno di specificare il return come nel singleton