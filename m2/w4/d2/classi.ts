class Car {
    
    public Modello:string; //private public e protected è un indicatore di visibilità che va utilizzato per i metodi e per le proprietà. Indica da quale punto sono accessibili. Se non specificato è sempre public
    public Marca:string
    public Colore:string

    protected scontoRivenditore:number = 30//è una proprietà che non andrebbe mostrata o che ci serve solo internamente. Non sono accessibili dall'esterno: è necessario creare un metodo dentro la quale sono inserite per utilizzarle
    protected prezzo:number

    constructor(mod:string, mar:string, col:string, p:number){
        this.Modello = mod
        this.Marca = mar
        this.Colore = col
        this.prezzo = p
    }

    public dettagliAuto():string{
        return this.Modello +' '+ this.Marca + ' '+ this.Colore 
    }

    public get prezzoFinale():string{
        return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100 ) + '€'  
    }//get ha una funzione descrittiva: accede in lettura e non consente la modifica. E' un metodo che deve restituire un valore. Va chiamato come se fosse una proprietà

    public set cambiaScontoRivenditore(n:number){
        this.scontoRivenditore = n;
    }//set permette la modifica di proprietà protette all'interno di una classe. Non permette il return 

    public static nazione(){
        return 'Italia'
    }//i metodi statici sono metodi a cui si accede non dall'istanza della classe ma dalla classe stessa. Un metodo è statico perché riguarda tutte le istanze di una classe

}

let fiat = new Car('500', 'Fiat', 'grigio', 1000)

console.log(fiat.Modello)

//fiat.nazione() non si può fare