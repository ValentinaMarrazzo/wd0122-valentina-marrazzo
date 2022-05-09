class Form{
    constructor(el){
        this.parent = document.querySelector(el);
        this.name = ''
        this.surname = ''
        this.age = ''
        this.button = ''
        this.createForm()
        this.button.addEventListener('click',() =>{ this.writeDown()})
    }

    createForm(){
        let labName = document.createElement('label')
        labName.for = 'name'
        labName.innerHTML = 'Nome'
        let inputName = document.createElement('input')
        inputName.type = 'text'
        inputName.setAttribute('id', 'name')
        this.name = inputName

        let labSur = document.createElement('label')
        labSur.for = 'sur'
        labSur.innerHTML = 'Cognome'
        let inputSur = document.createElement('input')
        inputSur.type = 'text'
        inputSur.setAttribute('id', 'sur')
        this.surname = inputSur

        let labBirth = document.createElement('label')
        labBirth.for = 'birth'
        labBirth.innerHTML = 'Data di nascita'
        let birth = document.createElement('input')
        birth.type = 'date'
        birth.setAttribute('id', 'birth')
        this.age = birth

        let btn = document.createElement('button')
        btn.innerHTML = 'Trascrivi'
        this.button = btn

        this.parent.append(labName, inputName, labSur, inputSur, labBirth, birth, btn)
    }

    writeDown() {
        let result = document.querySelector('#result')

        let dataName = document.createElement('p')
        dataName.innerHTML = 'Nome:'
        let spanName = document.createElement('span')
        spanName.innerHTML = this.name.value + ' ' + this.surname.value

        let dataAge = document.createElement('p')
        dataAge.innerHTML = 'Anni:'
        let spanAge = document.createElement('span')
        let date = this.age.value
        let y = new Date(date)
        let bY = y.getFullYear()
        let today = new Date()
        let tY = today.getFullYear()
        bY > tY ? spanAge.innerHTML = 'Data non valida' : spanAge.innerHTML = tY - bY
        //spanAge.innerHTML = tY - bY

        result.append(dataName, spanName, dataAge, spanAge)

        this.name.value = ''
        this.surname.value = ''

    }
}

let form = new Form('#form')