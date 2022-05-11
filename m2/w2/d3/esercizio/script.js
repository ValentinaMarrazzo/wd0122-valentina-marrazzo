const SECONDS = document.querySelector('span')
let n = 0

init()

function init(){
    let watching = sessionStorage.getItem('w')
    if(!watching) {
        sessionStorage.setItem('w', true)
    }
    writeN()
    
    if(watching){
        setInterval(writeN, 1000)
       
}else{
    SECONDS.innerHTML = 'Qualcosa non va'
    
}
}
function writeN() {
    let m = 0
SECONDS.innerHTML = n++

}
