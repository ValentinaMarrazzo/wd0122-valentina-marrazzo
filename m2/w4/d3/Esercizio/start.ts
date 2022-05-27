//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE

abstract class Lavoratore {
    codredd:number
    redditoAnnuo:number
    constructor(redditoAnnuo:number, cod:number){
        this.codredd = cod
        this.redditoAnnuo= redditoAnnuo
       
    }
    getUtileTasse():number{
        //reddito annuo lordo * codredd%
        let utileTasse = this.redditoAnnuo + ((this.redditoAnnuo * this.codredd)/100) 
        return utileTasse
    }

    abstract getRedditoAnnuoNetto():number

    abstract getTasseInps():number
    abstract getTasseIrpef():number
}

//

interface tasse {
    tasseInps:number
    tasseIrpef:number
}

class Artigiano extends Lavoratore implements tasse {

    tasseInps:number
    tasseIrpef:number
    constructor(ra:number, cr:number){
        super(ra, cr)
        this.tasseInps = 10
        this.tasseIrpef = 5
        }

    getRedditoAnnuoNetto():number {
        return this.redditoAnnuo - this.getTasseIrpef() 
        
    }

    getTasseInps(){
        return this.redditoAnnuo  * (this.tasseInps/100) 
    
    }

    getTasseIrpef(){
        return this.redditoAnnuo * (this.tasseIrpef/100) 
    
    }
}
class LiberoProfessionista extends Lavoratore implements tasse{

    tasseInps:number
    tasseIrpef:number
    constructor(ra:number, cr:number){
        super(ra, cr)
        this.tasseInps = 10
        this.tasseIrpef = 5
        }

    getRedditoAnnuoNetto():number {
        return this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse())
        
    }

    getTasseInps(){
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseInps)/100) 
    
    }

    getTasseIrpef(){
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseIrpef)/100) 
    
    }
}
class Commerciante extends Lavoratore implements tasse {
    tasseInps:number
    tasseIrpef:number
    constructor(ra:number, cr:number){
        super(ra, cr)
        this.tasseInps = 10
        this.tasseIrpef = 5
        }

    getRedditoAnnuoNetto():number {
        return this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse())
        
    }

    getTasseInps(){
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseInps)/100) 
    
    }

    getTasseIrpef(){
        return this.redditoAnnuo + ((this.redditoAnnuo * this.tasseIrpef)/100) 
    
    }
}

let l1 = new Artigiano(10000, 5);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l2 = new LiberoProfessionista(20000, 8);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l3 = new Commerciante(25000, 7);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');