
class Abito {
    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number
    quantita:number 
    colore:string 
    prezzoivaesclusa:number 
    prezzoivainclusa:number
    disponibile:string 
    saldo:number 
    
    constructor(
        id:number,
    codprod:number,
    collezione:string,
    capo:string,
    modello:number,
    quantita:number, 
    colore:string, 
    prezzoivaesclusa:number,
    prezzoivainclusa:number,
    disponibile:string,
    saldo:number
    ){
            this.id = id
            this.codprod = codprod
            this.collezione = collezione
            this.capo = capo 
            this.modello = modello
            this.quantita =  quantita
            this.colore = colore 
            this.prezzoivaesclusa =  prezzoivaesclusa
            this.prezzoivainclusa = prezzoivainclusa 
            this.disponibile = disponibile 
            this.saldo =  saldo
        }
        
        getacquistocapo():string{
            return 'Il capo costa: ' + this.prezzoivainclusa + '€'
        }
        
        getsaldocapo():string{
            let prezzoFinale = this.prezzoivainclusa - ((this.saldo/100) * this.prezzoivainclusa)
            return 'Il capo costa: ' + prezzoFinale + '€'
            
        }
        
    }


    fetch('Abbigliamento.json')
    .then(res => res.json())
    .then((res) => {
        let vestiti:Abito[] = []
        for(let v in res){
            let props:any[] = []
            for(let prop in v){
                props.push(v[prop])
            }
            let abb = new Abito(...props)
                vestiti.push(abb)
        }
        //cerca di non gestire i dati dentro il then

        for(let x of vestiti){
            console.log(x.getacquistocapo)
            console.log(x.getsaldocapo)
        }
    })