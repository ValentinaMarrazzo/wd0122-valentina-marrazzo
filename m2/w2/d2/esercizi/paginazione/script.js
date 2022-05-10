class Person{
    constructor(n) {
        this.name = n
        this.cellI = document.querySelectorAll('.id')
        this.cellN = document.querySelectorAll('.name')
        this.cellS = document.querySelectorAll('.sur')
        this.displayNames()
        this.next()
        this.prev()
        this.start()
        this.end()

    }

    displayNames() {
        for(let i=0; i<=this.cellI.length; i++){
            this.cellI[i].innerHTML += this.name[i].id
            this.cellN[i].innerHTML += this.name[i].firstname;
            this.cellS[i].innerHTML += this.name[i].surname
            
        }
    }

    next(){
        for(let i=0; i<=this.cellI.length; i++){
            this.cellI[i].innerHTML += this.name[i + 2].id
            this.cellN[i].innerHTML += this.name[i + 2].firstname;
            this.cellS[i].innerHTML += this.name[i + 2].surname
            
        }
    }

    prev(){
        if(i>1){
        for(let i=0; i<=this.cellI.length; i++){
            this.cellI[i].innerHTML += this.name[i-2].id
            this.cellN[i].innerHTML += this.name[i-2].firstname;
            this.cellS[i].innerHTML += this.name[i-2].surname
        }
        }
    }

    start() {
        this.displayNames()
    }

    end() {
        for(let i=0; i<=this.cellI.length; i++){
            this.cellI[i].innerHTML += this.name[this.name.lentgh - 1].id
            this.cellN[i].innerHTML += this.name[this.name.lentgh - 1].firstname;
            this.cellS[i].innerHTML += this.name[this.name.lentgh - 1].surname
            
        }
    }

}

let users = [
    {id: 1, firstname: "Nana", surname: "Komatsu"},
    {id: 2, firstname: "Nana", surname: "Osaki"},
    {id: 3, firstname: "Shinichi", surname: "Okazaki"},
    {id: 4, firstname: "Takumi", surname: "Ichinose"},
    {id: 5, firstname: "Ren", surname: "Honjo"},
    {id: 6, firstname: "Nobuo", surname: "Terashima"},
    {id: 7, firstname: "Layla", surname: "Serizawa"},
    {id: 8, firstname: "Yasushi", surname: "Takagi"}
]

let start = document.querySelector('#start')
let prev = document.querySelector('#pre')
let suc = document.querySelector('#suc')
let end = document.querySelector('#end')

let people = new Person(users)

start.addEventListener('click', function(){
    people.start()
})
prev.addEventListener('click', function(){
    people.prev()
})
suc.addEventListener('click', function(){
    people.next()
})
end.addEventListener('click', function(){
    people.end()
})
