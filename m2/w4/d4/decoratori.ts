//un decoratore è una funzione di solito collegato ad una classe o ad un metodo di una classe e serve ad arricchire la classe sottostante
function Logger(f:Function){
    console.log('...loading')
    console.log(f);
    
}//Un parametro di tipo function applicato ad un decoratore indica la classe oggetto del decoratore

@Logger
class Person {
    name:string = 'max'
    
    constructor(){
        console.log('Creazione persona');
        
    }
}

let pers = new Person()

console.log(pers);

function AddMethod(target:Function){
    console.log(target);

    target.prototype.saluta = function(){
        console.log('Ciao');
        
    }
    
}

@AddMethod
class Test{
    saluta(){

    }
}

let x = new Test()
console.log(x);

x.saluta()
