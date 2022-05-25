//L'interfaccia è un modello così come una classe ma con specifiche più restrittive assomigliando ad una classe astratta
interface IVeicoli {
    velocità:number//a differenza della classe astratta non si può usare nessun modificatore di visibilità
    accelera(vel:number):void//non si possono implementare le istruzioni ai metodi
}

interface IDettagli{
    ruote:number
    modello:string
    marca:string
    tipo:string
    prezzo:number
}

class Auomobili implements IVeicoli, IDettagli{
    public ruote:number
    public modello:string
    public marca:string
    public tipo:string
    public prezzo:number
    public velocità:number

    constructor(ruote:number, modello:string, marca:string, prezzo:number, tipo:string, velocità:number){
        this.ruote = ruote
        this.modello = modello
        this.marca = marca
        this.prezzo = prezzo
        this.tipo = tipo 
        this.velocità = velocità
    }

    accelera(vel: number): void {
        if(!vel){
            this.velocità++
        }else {
            this.velocità += vel
        }
    }
}

let auto:Automobili = new Automobili(4, 'mini', ' cooper', 5000, 'automobile')