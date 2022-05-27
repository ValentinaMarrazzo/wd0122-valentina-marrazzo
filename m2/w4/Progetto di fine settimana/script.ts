interface ISmartphone {
    carica:number
    numeroChiamate:number 

    ricarica(unaRicarica:number):void 
    chiamata(minutiDurata:number):void
    numero404():number 
    getNumeroChiamate():number
    azzeraChiamate():void 
}

class FirstUser implements ISmartphone{
    public carica:number
    public numeroChiamate:number 

    constructor(carica:number, numeroChiamate:number){
        this.carica = carica
        this.numeroChiamate = numeroChiamate
    }

    ricarica(unaRicarica: number): void {
        this.carica = this.carica + unaRicarica
    }

    chiamata(minutiDurata: number): void {
        this.numeroChiamate++
        
        let tariffa = minutiDurata * 0.20
            
        if((this.carica - tariffa) >= 0){
            this.carica = this.carica - tariffa
        } else {
            console.log('Credito insufficiente')
        }
    }

    numero404(): number {
        console.log('Il credito è di: ' + this.carica + '€')
        return this.carica 
    }

    getNumeroChiamate(): number {
        console.log('Sono state effettuate ' + this.numeroChiamate + ' chiamate')
        return this.numeroChiamate
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
}


class SecondUser implements ISmartphone{
    public carica:number
    public numeroChiamate:number 

    constructor(carica:number, numeroChiamate:number){
        this.carica = carica
        this.numeroChiamate = numeroChiamate
    }

    ricarica(unaRicarica: number): void {
        this.carica = this.carica + unaRicarica
    }

    chiamata(minutiDurata: number): void {
        this.numeroChiamate++
        
        let tariffa = minutiDurata * 0.20
            
        if((this.carica - tariffa) >= 0){
            this.carica = this.carica - tariffa
        } else {
            console.log('Credito insufficiente')
        }
    }

    numero404(): number {
        console.log('Il credito è di: ' + this.carica + '€')
        return this.carica 
    }

    getNumeroChiamate(): number {
        console.log('Sono state effettuate ' + this.numeroChiamate + ' chiamate')
        return this.numeroChiamate
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
}


class ThirdUser implements ISmartphone{
    public carica:number
    public numeroChiamate:number 

    constructor(carica:number, numeroChiamate:number){
        this.carica = carica
        this.numeroChiamate = numeroChiamate
    }

    ricarica(unaRicarica: number): void {
        this.carica = this.carica + unaRicarica
    }

    chiamata(minutiDurata: number): void {
        this.numeroChiamate++
        
        let tariffa = minutiDurata * 0.20
            
        if((this.carica - tariffa) >= 0){
            this.carica = this.carica - tariffa
        } else {
            console.log('Credito insufficiente')
        }
    }

    numero404(): number {
        console.log('Il credito è di: ' + this.carica + '€')
        return this.carica 
    }

    getNumeroChiamate(): number {
        console.log('Sono state effettuate ' + this.numeroChiamate + ' chiamate')
        return this.numeroChiamate
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
}

console.log('-------------OPERAZIONI PRIMO UTENTE-------------')
let first = new FirstUser(12, 0)
first.chiamata(15)
first.chiamata(5)
first.chiamata(10)
first.getNumeroChiamate()
first.numero404()

console.log('-------------OPERAZIONI SECONDO UTENTE-------------')
let second = new SecondUser(5, 0)
second.chiamata(20)
second.chiamata(5)
second.getNumeroChiamate()
second.numero404()


console.log('-------------OPERAZIONI TERZO UTENTE-------------')
let third = new ThirdUser(20, 0)
third.chiamata(30)
third.chiamata(5)
third.chiamata(10)
third.chiamata(3)
third.getNumeroChiamate()
third.numero404()
