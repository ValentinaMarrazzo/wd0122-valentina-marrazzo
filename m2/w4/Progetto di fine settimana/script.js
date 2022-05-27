var FirstUser = /** @class */ (function () {
    function FirstUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica = this.carica + unaRicarica;
    };
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate++;
        var tariffa = minutiDurata * 0.20;
        if ((this.carica - tariffa) >= 0) {
            this.carica = this.carica - tariffa;
        }
        else {
            console.log('Credito insufficiente');
        }
    };
    FirstUser.prototype.numero404 = function () {
        console.log('Il credito è di: ' + this.carica + '€');
        return this.carica;
    };
    FirstUser.prototype.getNumeroChiamate = function () {
        console.log('Sono state effettuate ' + this.numeroChiamate + ' chiamate');
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
var SecondUser = /** @class */ (function () {
    function SecondUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.carica = this.carica + unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate++;
        var tariffa = minutiDurata * 0.20;
        if ((this.carica - tariffa) >= 0) {
            this.carica = this.carica - tariffa;
        }
        else {
            console.log('Credito insufficiente');
        }
    };
    SecondUser.prototype.numero404 = function () {
        console.log('Il credito è di: ' + this.carica + '€');
        return this.carica;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        console.log('Sono state effettuate ' + this.numeroChiamate + ' chiamate');
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondUser;
}());
var ThirdUser = /** @class */ (function () {
    function ThirdUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica = this.carica + unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.numeroChiamate++;
        var tariffa = minutiDurata * 0.20;
        if ((this.carica - tariffa) >= 0) {
            this.carica = this.carica - tariffa;
        }
        else {
            console.log('Credito insufficiente');
        }
    };
    ThirdUser.prototype.numero404 = function () {
        console.log('Il credito è di: ' + this.carica + '€');
        return this.carica;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        console.log('Sono state effettuate ' + this.numeroChiamate + ' chiamate');
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
console.log('-------------OPERAZIONI PRIMO UTENTE-------------');
var first = new FirstUser(12, 0);
first.chiamata(15);
first.chiamata(5);
first.chiamata(10);
first.getNumeroChiamate();
first.numero404();
console.log('-------------OPERAZIONI SECONDO UTENTE-------------');
var second = new SecondUser(5, 0);
second.chiamata(20);
second.chiamata(5);
second.getNumeroChiamate();
second.numero404();
console.log('-------------OPERAZIONI TERZO UTENTE-------------');
var third = new ThirdUser(20, 0);
third.chiamata(30);
third.chiamata(5);
third.chiamata(10);
third.chiamata(3);
third.getNumeroChiamate();
third.numero404();
