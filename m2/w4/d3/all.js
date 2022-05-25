"use strict";
//Una classe astratta è una classe che non può essere istanziata. La si usa per far estendere altre classi. Può contenere metodi normali e metodi astratti
class Veicoli {
    constructor(ruote, modello, marca, prezzo, tipo) {
        this.ruote = ruote;
        this.modello = modello;
        this.marca = marca;
        this.prezzo = prezzo;
        this.tipo = tipo;
    }
    dettagliVeicolo() {
        return `Modello: ${this.modello}, Marca: ${this.marca}, Ruote: ${this.ruote}`;
    }
}
class Automobili extends Veicoli {
    constructor() {
        super(...arguments);
        this.velocità = 0;
    }
    aumentaVelocità(vel) {
        if (!vel) {
            this.velocità++;
        }
        else {
            this.velocità += vel;
        }
    }
    riduciVelocità(vel) {
        if (vel == undefined) {
            this.velocità--;
        }
        else {
            this.velocità -= vel;
        }
    }
}
let veicolo = new Automobili(3, '', 'Piaggio', 1500, 'apecar');
console.log(veicolo);
console.log(veicolo.aumentaVelocità());
//le generics sono delle indicazioni che si possono utilizzare nelle situazioni dove un tipo di dato non è definito. Permettono di definire un nome per il tipo di dato momentaneamente non definito e definibile successivamente
function add(a) {
    return a;
} //il valore inserito nel <> si sostituirà in tutti i punti dove compare il generic
let res = add('ciao');
console.log(res);
class CustomArray {
    constructor() {
        this.arr = [];
    }
    getItems() {
        return this.arr;
    }
    addItem(item) {
        this.arr.push(item);
    }
    removeItem(item) {
        let start = this.arr.indexOf(item);
        if (start != 1) {
            this.arr.splice(start, 1);
        }
    }
    removeItem2(item) {
        this.arr = this.arr.filter((i) => i !== item);
    }
}
let array = new CustomArray();
array.addItem('ciao');
array.addItem('Hi');
array.addItem('Salut');
console.log(array.getItems());
let k = {
    key: 'id',
    value: 0
};
//una tupla è un array di dati che permette di definire un tipo di dato per ogni elemento nell'array.
let user = [1, 'Giovanna', {}];
let [id, nome, obj] = user;
console.log(id);
let userArr = [
    [1, 'mario'],
    [2, 'luigi'],
    [3, 'peach']
];
class Auomobili {
    constructor(ruote, modello, marca, prezzo, tipo, velocità) {
        this.ruote = ruote;
        this.modello = modello;
        this.marca = marca;
        this.prezzo = prezzo;
        this.tipo = tipo;
        this.velocità = velocità;
    }
    accelera(vel) {
        if (!vel) {
            this.velocità++;
        }
        else {
            this.velocità += vel;
        }
    }
}
let auto = new Automobili(4, 'mini', ' cooper', 5000, 'automobile');
//La parola chiave readonly definisce una proprietà per la sola lettura: estrae il dato senza modificarlo ma non lascia che venga utilizzato in scrittura. 
class Test {
    constructor(name, id, email) {
        this.id = id;
        this.name = name;
        this.id = id;
        this.email = email;
    } //scrivendo readonly la proprietà si dichiarerà da sola all'interno degli argomenti del costruttore. O va indicata come readonly all'interno del costruttore o fuori; fare entrambe le cose risulta in un errore
    checkEmail(email) {
        if (this.email == email) {
            throw new Error('Email già esistente');
        }
        this.email = email;
    }
}
let x = new Test('Giovanna', 1, '');
console.log(x.id, x.name);
//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE
class Lavoratore {
    constructor(redditoAnnuo, cod) {
        this.codredd = cod;
        this.redditoAnnuo = redditoAnnuo;
    }
    getUtileTasse() {
        //reddito annuo lordo * codredd%
        let utileTasse = this.redditoAnnuo + ((this.redditoAnnuo * this.codredd) / 100);
        return utileTasse;
    }
}
class Artigiano extends Lavoratore {
    constructor(ra, cr) {
        super(ra, cr);
        this.tasseInps = 10;
        this.tasseIrpef = 5;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuo - this.getTasseIrpef();
    }
    getTasseInps() {
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseInps) / 100);
    }
    getTasseIrpef() {
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseIrpef) / 100);
    }
}
class LiberoProfessionista extends Lavoratore {
    constructor(ra, cr) {
        super(ra, cr);
        this.tasseInps = 10;
        this.tasseIrpef = 5;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse());
    }
    getTasseInps() {
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseInps) / 100);
    }
    getTasseIrpef() {
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseIrpef) / 100);
    }
}
class Commerciante extends Lavoratore {
    constructor(ra, cr) {
        super(ra, cr);
        this.tasseInps = 10;
        this.tasseIrpef = 5;
    }
    getRedditoAnnuoNetto() {
        return this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse());
    }
    getTasseInps() {
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseInps) / 100);
    }
    getTasseIrpef() {
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseIrpef) / 100);
    }
}
let l1 = new Artigiano(10000, 5);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l2 = new LiberoProfessionista(20000, 8);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l3 = new Commerciante(25000, 7);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
//# sourceMappingURL=all.js.map