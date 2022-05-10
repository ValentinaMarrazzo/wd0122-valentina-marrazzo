let p = document.querySelector('p')
class Person{
    constructor(n, e, b){
        this.nome = n;
        this.anni = e
        this.maggiore(b)
    }
    maggiore(b){
        this.anni > b.anni ? p.innerHTML = this.nome + " è più vecchio di " + b.nome : p.innerHTML = b.nome + " è  più vecchio di " + this.nome
    }
}

let p1 = new Person('Mario', 40, '')
let p2 = new Person('Luigi', 39, '')
let p3 = new Person('Peach', 36, '')

p1.maggiore(p3)

