//le generics sono delle indicazioni che si possono utilizzare nelle situazioni dove un tipo di dato non è definito. Permettono di definire un nome per il tipo di dato momentaneamente non definito e definibile successivamente
function add<G>(a:G):G{
    return a
}//il valore inserito nel <> si sostituirà in tutti i punti dove compare il generic

let res = add<string>('ciao')
console.log(res);

class CustomArray<T>{
    private arr:T[] = []

    getItems():T[]{
        return this.arr
    }

    addItem(item:T):void{
        this.arr.push(item)
    }

    removeItem(item:T){
        let start = this.arr.indexOf(item)

        if(start != 1){
            this.arr.splice(start, 1)
        }
    }

    removeItem2(item:T):void{
        this.arr = this.arr.filter((i:T) => i !== item)
    }
}

let array = new CustomArray<string>();
array.addItem('ciao')
array.addItem('Hi')
array.addItem('Salut')

console.log(array.getItems());

//generics multipli

interface KeyValue<T,U>{
    key:T;
    value:U
}

let k:KeyValue<string, number> = {
    key:'id',
    value: 0
}

//una tupla è un array di dati che permette di definire un tipo di dato per ogni elemento nell'array.
let user:[number, string, any] = [1, 'Giovanna', {}]

let [id, nome, obj] = user

console.log(id)

let userArr:[number, string][] = [
    [1, 'mario'],
    [2, 'luigi'],
    [3, 'peach']

]