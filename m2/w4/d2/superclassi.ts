class Veicoli{

    public ruote:number = 4;
    public marca:string;
    public modello:string;
    protected prezzo:number

    constructor(ruote:number, marca:string, modello:string, prezzo:number){
        this.ruote = ruote,
        this.marca = marca,
        this.modello = modello,
        this.prezzo = prezzo
    }

    dettagliVeicolo(){
        return `Modello: ${this.modello}, Marca:  ${this.marca}, Ruote: ${this.ruote}`
    }

}

let apecar = new Veicoli(3, 'Piaggio', '', 1500)

class Cars extends Veicoli{

    private costoPieno:number = 75//come protected non rende la proprietà accessibile dall'esterno della classe. A differenza di protected, private non è accessibile neanche dalle classi che estendono la classe di partenza

    constructor(ruote:number, marca:string, modello:string, prezzo:number){
        super(4, marca, modello, prezzo)
    }
}

let auto = new Cars(3, 'Piaggio', '', 1500)