type Combinable = number | string 
type ConversionDescriptor = boolean | string //type consente di specificare più tipi di dato primitivi contemporaneamnete per poter essere usata come blueprint per altri dati

function combine(input1:Combinable, input2:Combinable):Combinable{
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = Number(input1) + Number(input2)//Number forza la conversione a numero
    }else {
        result = input1.toString() + String(input2)
    }
    return result
}

let res = combine(1,2)
console.log(res)
let resStr = combine('1', '2')
console.log(resStr);

//tipi di intersezione, cioè altri modi di creare i combinabili

type Admin = {
    name:string, 
    privileges:string[]

}

type Employee = {
    names:number,
    startDate:Date
}

type ElevatedEmployee = Admin & Employee//è possibile intersecare i combinabili

const el:ElevatedEmployee = {
    name:'Max',
    names: 12,
    privileges: ['create-server'],
    startDate: new Date()
}