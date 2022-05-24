"use strict";
class Car {
    constructor(mod, mar, col, p) {
        this.scontoRivenditore = 30; //è una proprietà che non andrebbe mostrata o che ci serve solo internamente. Non sono accessibili dall'esterno: è necessario creare un metodo dentro la quale sono inserite per utilizzarle
        this.Modello = mod;
        this.Marca = mar;
        this.Colore = col;
        this.prezzo = p;
    }
    dettagliAuto() {
        return this.Modello + ' ' + this.Marca + ' ' + this.Colore;
    }
    get prezzoFinale() {
        return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '€';
    } //get ha una funzione descrittiva: accede in lettura e non consente la modifica. E' un metodo che deve restituire un valore. Va chiamato come se fosse una proprietà
    set cambiaScontoRivenditore(n) {
        this.scontoRivenditore = n;
    } //set permette la modifica di proprietà protette all'interno di una classe. Non permette il return 
    static nazione() {
        return 'Italia';
    } //i metodi statici sono metodi a cui si accede non dall'istanza della classe ma dalla classe stessa. Un metodo è statico perché riguarda tutte le istanze di una classe
}
let fiat = new Car('500', 'Fiat', 'grigio', 1000);
console.log(fiat.Modello);
//fiat.nazione() non si può fare
//ENUM
//L'uso delle enumerazioni può semplificare la documentazione: consentono di definire un insieme di costanti denominate.
var Mesi;
(function (Mesi) {
    Mesi[Mesi["Gennaio"] = 1] = "Gennaio";
    Mesi[Mesi["Febbraio"] = 2] = "Febbraio";
    Mesi[Mesi["Marzo"] = 3] = "Marzo";
    Mesi[Mesi["Aprile"] = 4] = "Aprile";
})(Mesi || (Mesi = {})); //è come se Mesi fosse un oggetto con due serie di coppie chiave valore: l'indice dei mesi e i mesi, i mesi e il loro valore assegnato. 
//enum permette di dare un nome ad un insieme di proprietà
var Color;
(function (Color) {
    Color["Bianco"] = "#fff";
    Color["Nero"] = "#000";
})(Color || (Color = {}));
let colore = Color.Bianco;
//FUNZIONI E OGGETTI
const states = {
    italy: 'rome',
    england: 'london',
    id: function () {
        return this.italy + ' ' + this.england;
    }
};
function somma(a, b, c) {
    return a + b;
} //Il punto interrogativo indica che quella proprietà non è obbligatoria
class Veicoli {
    constructor(ruote, marca, modello, prezzo) {
        this.ruote = 4;
        this.ruote = ruote,
            this.marca = marca,
            this.modello = modello,
            this.prezzo = prezzo;
    }
    dettagliVeicolo() {
        return `Modello: ${this.modello}, Marca:  ${this.marca}, Ruote: ${this.ruote}`;
    }
}
let apecar = new Veicoli(3, 'Piaggio', '', 1500);
class Cars extends Veicoli {
    constructor(ruote, marca, modello, prezzo) {
        super(4, marca, modello, prezzo);
        this.costoPieno = 75; //come protected non rende la proprietà accessibile dall'esterno della classe. A differenza di protected, private non è accessibile neanche dalle classi che estendono la classe di partenza
    }
}
let auto = new Cars(3, 'Piaggio', '', 1500);
class SonAccount {
}
console.log('------------son account----------------- ' + '\n');
// set della proprietà al costruttore
let son = new SonAccount(0);
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.deposit(1000));
console.log('withdraw:-' + son.oneWithdraw(500));
console.log('withdraw:-' + son.twoWithdraw(400));
console.log('totalBalance:' + son.totalBalance());
class MotherAccount {
}
let mother = new MotherAccount(0);
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.deposit(1000));
console.log('withdraw:-' + mother.oneWithdraw(500));
console.log('withdraw:-' + mother.twoWithdraw(400));
console.log('totalBalance:' + mother.totalBalance());
//# sourceMappingURL=app.js.map