var SonAccount = /** @class */ (function () {
    function SonAccount(actual) {
        this.account = actual;
    }
    SonAccount.prototype.deposit = function (dep) {
        this.account = this.account + dep;
        return dep;
    };
    SonAccount.prototype.oneWithdraw = function (w1) {
        if (this.account > w1) {
            this.account = this.account - w1;
            return w1 + '€';
        }
        else {
            return 'Insufficient funds';
        }
    };
    SonAccount.prototype.twoWithdraw = function (w2) {
        if (this.account > w2) {
            this.account = this.account - w2;
            return w2 + '€';
        }
        else {
            return 'Insufficient funds';
        }
    };
    SonAccount.prototype.totalBalance = function () {
        return this.account;
    };
    return SonAccount;
}());
console.log('-----------son account--------------' + '\n');
// set della proprietà al costruttore
var son = new SonAccount(0);
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.deposit(1000));
console.log('withdraw:-' + son.oneWithdraw(500));
console.log('withdraw:-' + son.twoWithdraw(400));
console.log('totalBalance:' + son.totalBalance());
var MotherAccount = /** @class */ (function () {
    function MotherAccount(actual) {
        this.account = actual;
    }
    MotherAccount.prototype.deposit = function (dep) {
        this.account = (this.account + dep) * 1.01;
        return dep;
    };
    MotherAccount.prototype.oneWithdraw = function (w1) {
        if (this.account > w1) {
            (this.account = this.account - w1) * 1.01;
            return w1 + '€';
        }
        else {
            return 'Insufficient funds';
        }
    };
    MotherAccount.prototype.twoWithdraw = function (w2) {
        if (this.account > w2) {
            (this.account = this.account - w2) * 1.01;
            return w2 + '€';
        }
        else {
            return 'Insufficient funds';
        }
    };
    MotherAccount.prototype.totalBalance = function () {
        return this.account;
    };
    return MotherAccount;
}());
var mother = new MotherAccount(0);
console.log(' ----------mother account---------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.deposit(1000));
console.log('withdraw:-' + mother.oneWithdraw(500));
console.log('withdraw:-' + mother.twoWithdraw(400));
console.log('totalBalance:' + mother.totalBalance());
