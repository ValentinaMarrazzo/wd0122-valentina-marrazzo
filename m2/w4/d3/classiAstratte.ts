//Una classe astratta è una classe che non può essere istanziata. La si usa per far estendere altre classi. Può contenere metodi normali e metodi astratti
abstract class Veicoli {
    public ruote:number
    public modello:string
    public marca:string
    public tipo:string
    public abstract velocità:number //questo metodo non verrà ereditato ma richiederà che venga ricreato nella classe figlia

    protected prezzo:number

    constructor(ruote:number, modello:string, marca:string, prezzo:number, tipo:string){
        this.ruote = ruote
        this.modello = modello
        this.marca = marca
        this.prezzo = prezzo
        this.tipo = tipo 
    }
    
    dettagliVeicolo():string{
        return `Modello: ${this.modello}, Marca: ${this.marca}, Ruote: ${this.ruote}`
    }
    public abstract aumentaVelocità(vel?:number):void //i metodi astratti non possono contenere istruzioni
    public abstract riduciVelocità(vel?:number):void
}

class Automobili extends Veicoli{

    public velocità:number = 0
    public aumentaVelocità(vel?:number):void{
        if(!vel){
            this.velocità++
        }else {
            this.velocità += vel
        }
    }
    public riduciVelocità(vel?:number){
        if(vel == undefined){
            this.velocità--
        }else{
            this.velocità -= vel
        }
    }

}

let veicolo = new Automobili(3, '', 'Piaggio', 1500, 'apecar')

console.log(veicolo);
console.log(veicolo.aumentaVelocità())