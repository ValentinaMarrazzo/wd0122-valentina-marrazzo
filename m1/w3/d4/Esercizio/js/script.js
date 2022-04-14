let updown = document.querySelector('#updown');
textUp = 'il metodo touppercase trasforma i caratteri di una stringa da minuscolo a maiuscolo '
textDown = 'il metodo tolowercase trasforma i caratteri di una stringa da maiuscolo a minuscolo'
updown.innerHTML = textUp.toUpperCase() + '<br>' + textDown.toLowerCase();

let array = document.querySelector('#array');
let people = ['Paolo', 'Maria', 'Anna', 'Giuseppe', 'Luca'];

people.push('Anastasia');
people.unshift('Lorenzo');
people.sort()

arrayText = people.toString()
array.innerHTML = 'Questo è un array convertito in stringa: ' + arrayText + '<br> E questo è il suo terzo elemento: '+ people[2] + '<br>L\'array ha ' + people.length + ' elementi';


function calcArr() {
    let arrayNum = [16, 25, 86];
    arrayNum.pop()
    arrayNum.push('77')
    return arrayNum[0] += arrayNum[2] / arrayNum.length;   
}

let fun = document.querySelector('#funzione')
fun.innerHTML = 'Di seguito: il risultato di un\'operazione fatta con array <br>' + calcArr()