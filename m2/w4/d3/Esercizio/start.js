//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(redditoAnnuo, cod, tasseInps, tasseIrpef) {
        this.codredd = cod;
        this.redditoAnnuo = redditoAnnuo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        //reddito annuo lordo * codredd%
        var utileTasse = this.redditoAnnuo + ((this.redditoAnnuo * this.codredd) / 100);
        return utileTasse;
    };
    return Lavoratore;
}());
//
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Artigiano.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuo - this.getTasseIrpef();
    };
    Artigiano.prototype.getTasseInps = function () {
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseInps) / 100);
    };
    Artigiano.prototype.getTasseIrpef = function () {
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseIrpef) / 100);
    };
    return Artigiano;
}(Lavoratore));
var LiberoProfessionista = /** @class */ (function (_super) {
    __extends(LiberoProfessionista, _super);
    function LiberoProfessionista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LiberoProfessionista.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse());
    };
    LiberoProfessionista.prototype.getTasseInps = function () {
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseInps) / 100);
    };
    LiberoProfessionista.prototype.getTasseIrpef = function () {
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseIrpef) / 100);
    };
    return LiberoProfessionista;
}(Lavoratore));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Commerciante.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse());
    };
    Commerciante.prototype.getTasseInps = function () {
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseInps) / 100);
    };
    Commerciante.prototype.getTasseIrpef = function () {
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseIrpef) / 100);
    };
    return Commerciante;
}(Lavoratore));
var l1 = new Artigiano(10000, 5);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
var l2 = new LiberoProfessionista(20000, 8);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
var l3 = new Commerciante(25000, 7);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
