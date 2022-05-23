let arrayAnimali = ['🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐰', '🐯', '🐱', '🦉', '🐾', '🦁', '🦋', '🐛', '🐝', '🐬', '🦊', '🐨', '🐯', '🐰'];
//libreria per icone
//https://html-css-js.com/html/character-codes/


let arrayComparison = [];


// mi serviranno alcune variabili 1. interval 2. una agganciata alla classe find 
// 3. una agganciata al'id modal 4. una agganciata alla classe timer
let interval;
let find = document.getElementsByClassName('find');
let modal = document.querySelector('#modal');
let timer = document.querySelector('.timer');


//una funzione che serve a mescolare in modo random gli elementi dell'array che viene passato 
// (l'array contiene le icone degli animali)
function shuffle(a) {
    var currentIndex = a.length;
    var temporaryValue, randomIndex;
    
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = a[currentIndex];
        a[currentIndex] = a[randomIndex];
        a[randomIndex] = temporaryValue;
    }
    return a;
}
// una funzione che rimuove la classe active e chiama la funzione startGame()

let active = document.getElementsByClassName('active');
function playAgain() {
    active.classList.remove('active');
    //  startGame()
}

// la funzione startGame che pulisce il timer, dichiara un array vuoto, mescola casualmente l'array degli animali
// (var arrayShuffle = shuffle(arrayAnimali);), aggancia il contenitore con id griglia, 
// pulisce tutti gli elementi che eventualmente contiene
// poi fa ciclo per creare i 24 div child -> aggiunge la class e l'elemento dell'array in base all'indice progressivo
// chiama la funzione timer e associa a tutti gli elementi (div) di classe icon l'evento click e le due funzioni definit sotto

function startGame() {
    let arrayShuffle = shuffle(arrayAnimali);
    
    clearInterval();
    arrayComparison = [];
    
    let list = document.getElementById('griglia');
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    
    for(let i = 0; i < 24; i++) {
        let card = document.createElement('div');
        let iconDiv = document.createElement('div')
        iconDiv.classList.add('icon');
        document.getElementById('griglia').appendChild(card);
        card.appendChild(iconDiv)
        iconDiv.innerHTML = arrayShuffle[i]
    }
    
    startTimer()
    
    let icon = document.getElementsByClassName('icon');
    let icons = [...icon];
    
    for(let i = 0; i < icons.length; i++) {
        icons[i].addEventListener('click', displayIcon);
        icons[i].addEventListener('click', openModal)
    }
}

document.body.onload = startGame();


function displayIcon() {
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    
    /*
    var icon = document.getElementsByClassName("icon");
    var icons = [...icon];
    è uguale a 
    var icons = document.getElementsByClassName("icon");
    //var icons = [...icon];
    è un operatore che serve per passare un array come argomento:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax 
    https://www.tutorialspoint.com/es6/es6_operators.htm (cerca spread nella pagina)
    */
   
   //mette/toglie la classe show
   this.classList.toggle("show");
   //aggiunge l'oggetto su cui ha cliccato all'array del confronto
   arrayComparison.push(this);
   
   var len = arrayComparison.length;
   //se nel confronto ci sono due elementi
   if (len === 2) {
       //se sono uguali aggiunge la classe find
       if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
           arrayComparison[0].classList.add("find", "disabled");
           arrayComparison[1].classList.add("find", "disabled");
           arrayComparison = [];
        } else {
            //altrimenti (ha sbagliato) aggiunge solo la classe disabled
            icons.forEach(function(item) {
                item.classList.add('disabled');
            });
            // con il timeout rimuove  la classe show per nasconderli
            setTimeout(function() {
                arrayComparison[0].classList.remove("show");
                arrayComparison[1].classList.remove("show");
                icons.forEach(function(item) {
                    item.classList.remove('disabled');
                    for (var i = 0; i < find.length; i++) {
                        find[i].classList.add("disabled");
                    }
                });
                arrayComparison = [];
            }, 700);
        }
    }
}

//una funzione che viene mostrata alla fine quando sono tutte le risposte esatte

// una funzione che nasconde la modale alla fine e riavvia il gioco
function openModal() {
    if (find.length == 24) {
        clearInterval(interval);
        modal.classList.add("active");
        document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;
        closeModal();
    }
}

function closeModal() {
    closeicon.addEventListener("click", function () {
        modal.classList.remove("active");
        startGame();
    });
}

// una funzione che calcola il tempo e aggiorna il contenitore sotto
function startTimer() {
    let s = 0;
    let m = 0;
    let h = 0;
    let interval = setInterval(function(){
        s++;
        timer.innerHTML = 'Tempo: ' + m + ' min ' + s + ' sec ';
        if(s === 59){
            m++;
            s = 0;
        } 
        
        if(m === 59){
            h++;
            m = 0;
        }
    }, 1000);
    
}