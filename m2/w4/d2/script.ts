//ENUM
//L'uso delle enumerazioni può semplificare la documentazione: consentono di definire un insieme di costanti denominate.
enum Mesi {
    Gennaio = 1,
    Febbraio,
    Marzo,
    Aprile
} //è come se Mesi fosse un oggetto con due serie di coppie chiave valore: l'indice dei mesi e i mesi, i mesi e il loro valore assegnato. 

//enum permette di dare un nome ad un insieme di proprietà

enum Color {
    Bianco = '#fff',
    Nero = '#000'
}

let colore:Color = Color.Bianco 

//FUNZIONI E OGGETTI
const states:{italy:string, england:string,id:any} = {
    italy: 'rome',
    england: 'london',
    id:function(){
        return this.italy + ' ' + this.england;
    }
}

function somma(a:number, b:number, c?:number):number{
    return a + b
}//Il punto interrogativo indica che quella proprietà non è obbligatoria