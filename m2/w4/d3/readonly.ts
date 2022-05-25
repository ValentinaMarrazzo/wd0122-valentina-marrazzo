//La parola chiave readonly definisce una proprietà per la sola lettura: estrae il dato senza modificarlo ma non lascia che venga utilizzato in scrittura. 
class Test{
    public name:string
   //public readonly id:number
   public email:string

    constructor(name:string, readonly id:number, email:string){
        this.name = name
        this.id = id
        this.email = email
    }//scrivendo readonly la proprietà si dichiarerà da sola all'interno degli argomenti del costruttore. O va indicata come readonly all'interno del costruttore o fuori; fare entrambe le cose risulta in un errore

    public checkEmail(email:string):void{
        if(this.email == email){
            throw new Error('Email già esistente')
        }

        this.email = email
    }
}

let x = new Test('Giovanna', 1, '')

console.log(x.id, x.name);
