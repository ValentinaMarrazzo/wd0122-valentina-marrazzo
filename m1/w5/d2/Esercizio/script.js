let euro = 10;
document.querySelector('#euro').innerText = euro;

const BTN = document.querySelector('#buy');


function buy(){
    document.querySelector('#msg').innerHTML += '<ul>' 
    while (euro >= 0.80){ 
        euro = Math.floor(euro - 0.80)
        document.querySelector('#msg').innerHTML += `<li> Hai comprato un caffè. Ti restano ${euro} euro. </li>`
        if(euro <= 1.20 && euro >= 0.80) {
            document.querySelector('#msg').innerHTML += `<p>Ti restano i soldi solo per un altro caffè</p>`
        } 
        if(euro <= 0.80) {
            document.querySelector('#msg').innerHTML += `<p>Basta! Troppi caffè</p>`
        }
    } 
    document.querySelector('#msg').innerHTML += '</ul>'
    

}
BTN.addEventListener("click", buy);
