"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//l'asserzione di tipo consente di impostare il tipo di un valore e di dire al compilatore di non inferirlo. Serve al programmatore per avere una maggior comprensione sul tipo di dato
let code = 123;
let employeeCode = code;
console.log(typeof employeeCode);
function combine(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = Number(input1) + Number(input2); //Number forza la conversione a numero
    }
    else {
        result = input1.toString() + String(input2);
    }
    return result;
}
let res = combine(1, 2);
console.log(res);
let resStr = combine('1', '2');
console.log(resStr);
const el = {
    name: 'Max',
    names: 12,
    privileges: ['create-server'],
    startDate: new Date()
};
//un decoratore è una funzione di solito collegato ad una classe o ad un metodo di una classe e serve ad arricchire la classe sottostante
function Logger(f) {
    console.log('...loading');
    console.log(f);
} //Un parametro di tipo function applicato ad un decoratore indica la classe oggetto del decoratore
let Person = class Person {
    constructor() {
        this.name = 'max';
        console.log('Creazione persona');
    }
};
Person = __decorate([
    Logger
], Person);
let pers = new Person();
console.log(pers);
function AddMethod(target) {
    console.log(target);
    target.prototype.saluta = function () {
        console.log('Ciao');
    };
}
let Test = class Test {
    saluta() {
    }
};
Test = __decorate([
    AddMethod
], Test);
let x = new Test();
console.log(x);
x.saluta();
let lista = [1, 2, 3, 4];
let [n1, , n4] = lista; //così è possibile selezionare degli elementi specifici dell'array
console.log(n1, n4);
//destrutturazione oggetti
let oggetto = {
    nome: 'Marco',
    nazione: "Italia"
};
let { nome, nazione } = oggetto; //estrae le due variabili dall'oggetto selezionato 
let bottone = document.querySelector('#myform button');
bottone === null || bottone === void 0 ? void 0 : bottone.addEventListener('click', function (e) {
    e.preventDefault();
    let fields = Array.from(document.querySelectorAll('#myform input'));
    let values = fields.map((f) => f.value);
});
function call() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://628f5a210e69410599dadd89.mockapi.io/api/v1/users';
        let response = yield fetch(url); //viene eseguita in maniera asincrona ma deve aspettare il fetch
        let json = yield response.json(); //anche il metodo json è asincrono
        let { avatar, name } = json[0];
        console.log(avatar, name);
    });
}
call();
let array = [1, 2, 3];
let array2 = [4, 5, 6];
let spread = [...array, ...array2]; //i tre punti significano 'vari parametri'
console.log(spread); //spread può essere usato come alternativa non proprio uguale di concat()
function somma(...numeri) {
    let totale = numeri.reduce((c, n) => c + n);
}
somma(2, 2); //spread restituisce i parametri di questa funzione come array
class Abito {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getacquistocapo() {
        return 'Il capo costa: ' + this.prezzoivainclusa + '€';
    }
    getsaldocapo() {
        let prezzoFinale = this.prezzoivainclusa - ((this.saldo / 100) * this.prezzoivainclusa);
        return 'Il capo costa: ' + prezzoFinale + '€';
    }
}
fetch('Abbigliamento.json')
    .then(res => res.json())
    .then((res) => {
    let vestiti = [];
    for (let v in res) {
        let props = [];
        for (let prop in v) {
            props.push(v[prop]);
        }
        let abb = new Abito(...props);
        vestiti.push(abb);
    }
    //cerca di non gestire i dati dentro il then
    for (let x of vestiti) {
        console.log(x.getacquistocapo);
        console.log(x.getsaldocapo);
    }
});
//# sourceMappingURL=all.js.map