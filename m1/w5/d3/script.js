let div = document.createElement('div'); //createElement crea il tag richiesto, ma si trova sempre solo in memoria nella variabile assegnata e non nel documento. 
div.innerHTML = 'test';
div.classList.add('classeProva');

document.querySelector('body').appendChild(div)//con appendChild() si può inserire l'elemento creato in memoria all'interno dell'elemento target, ma in fondo alla pagina (sempre però all'interno dell'elemento indicato come genitore). Con append si inserisce alla fine, con prepend all'inizio. 

/**
 * to do list
 */

let bottone = document.querySelector('#inserisci')
let todoArea = document.querySelector('#to-do')

bottone.addEventListener('click', function(){
    
    let todowrap = document.createElement('div')
    todowrap.classList.add('todo')
    
    let testo = document.querySelector('#testo')//spostare la variabile su cui si agisce al click all'interno della funzione per farla leggere ogni volta
    todowrap.innerText = testo.value;
    
    let close = document.createElement('button');
    close.classList.add('closeButton');
    close.innerText = 'X';
    close.addEventListener('click', function(){
        todowrap.remove()
    })
    todowrap.append(close)
    
    
    todoArea.append(todowrap);
    testo.value = ' '
})

//createTextNode è un oggetto di tipo testo che va inserito in un elemento.

//Ajax è una tecnologia asincrona sviluppata in ambito js ma adottabile con altri linguaggi di programmazione. Grazie ad essa è possibile manipolare risorse senza reload della pagina. In pratica si può scrivere del codice per visitare un'altra pagina, prelevare tutto il contenuto e restituirlo. L'utilizzo principale avviene sui file json.

let richiesta = new XMLHttpRequest(); //oggetto inizializzato con chiamata ajax
richiesta.open('GET', 'https://sofin.wp-admin.it/public/api/v1/user');//necessario per avviare la chiamata
richiesta.onload = function() {
    console.log(richiesta.response); //restituisce il contenuto della pagina chiamata dalla richiesta 
}
richiesta.send(); //per inviare la richiesta

fetch('https://jsonplaceholder.typicode.com/users')//metodo più veloce per fare una richiesta ajax
.then(data => data.json()) //data.json è una promise
.then(data => 
    {
        for(let user of data){
            let div = document.createElement('div')
            div.innerHTML = user.name
            document.querySelector('#target').append(div)
        }//inserisce gli oggetti di data nella variabile user
    })

//json è un metodo molto diffuso per la formattazione dei dati che devono essere ricevuti o inviati. E' un array di dati le cui proprietà sono racchiuse tra virgolette. 

let j = '{"name":"mario", "eta":"30"}'

console.log(JSON.parse(j).name)

//per convertire un oggetto in stringa: JSON.stringify(oggetto)

/**
 * validazione di form
 */

let btn = document.querySelector('#myForm button')
btn.addEventListener('click', function(event){
    event.preventDefault(); //al click, i form ricaricano la pagina perché per loro natura rimandano a un'altra pagina. Perciò, se si vuole scatenare un evento, va cambiato il comportamento di default del form
    let name = document.querySelector('#nome')
    let password = document.querySelector('#password')
    let valid = true;

    if(name.value == '' || name.length < 2) {
        name.nextElementSibling.innerHTML = 'Devi inserire il nome'
        valid = false;
    } else {
        name.nextElementSibling.innerHTML = ''
    }
    if(password.value == '' || password.length < 2) {
        password.nextElementSibling.innerHTML = 'Devi inserire la password'
        valid = false;
    }else {
        password.nextElementSibling.innerHTML = ''
    }

    if(valid) {
        //invia il form
        //si possono inviare i dati con una chiamata ajax in POST. Oppure:
        document.querySelector('#myForm').submit()
    }

    
}) 