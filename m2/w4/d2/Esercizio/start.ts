class SonAccount{
    public account:number 

    constructor(actual:number){
        this.account = actual
    }

    public deposit(dep:number):number{
        this.account = this.account + dep
        return dep
    }

    public oneWithdraw(w1:number):string{
        if(this.account > w1){
            this.account = this.account - w1
            return w1 + '€'
        } else{
            return 'Insufficient funds'
        }
    }

    public twoWithdraw(w2:number):string{
        if(this.account > w2){
            this.account = this.account - w2
            return w2 + '€'
        } else{
            return 'Insufficient funds'
        }
    }

    public totalBalance():number{
        return this.account
    }
}
console.log('-----------son account--------------' + '\n');
// set della proprietà al costruttore
let son = new SonAccount(0)
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.deposit(1000));
console.log('withdraw:-' + son.oneWithdraw(500));
console.log('withdraw:-' + son.twoWithdraw(400));
console.log('totalBalance:' + son.totalBalance());

class MotherAccount {
    public account:number 

    constructor(actual:number){
        this.account = actual
    }

    public deposit(dep:number):number{
        this.account = (this.account + dep) * 1.01 
        return dep
    }

    public oneWithdraw(w1:number):string{
        if(this.account > w1){
            (this.account = this.account - w1) * 1.01
            return w1 + '€'
        } else{
            return 'Insufficient funds'
        }
    }

    public twoWithdraw(w2:number):string{
        if(this.account > w2){
            (this.account = this.account - w2) * 1.01
            return w2 + '€'
        } else{
            return 'Insufficient funds'
        }
    }

    public totalBalance():number{
        return this.account
    }
}
let mother = new MotherAccount(0)
console.log( ' ----------mother account---------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.deposit(1000));
console.log('withdraw:-' + mother.oneWithdraw(500));
console.log('withdraw:-' + mother.twoWithdraw(400));
console.log('totalBalance:' + mother.totalBalance());

