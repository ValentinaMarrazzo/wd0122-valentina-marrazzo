let bottoni = document.querySelectorAll('button');
let contents = document.querySelectorAll('.content');

/*for(let bottone of bottoni){
    bottone.addEventListener('click', function(){
        bottone.nextElementSibling.classList.toggle('open')
    })
}*/

/*bottoni.forEach(bottone => {
    bottone.addEventListener('click', function(){
        bottone.nextElementSibling.classList.toggle('open')
        bottone.nextElementSibling.id = 'bottone-'+ i;
    })
})//forEach funziona solo con i query selector*/

for(let bottone of bottoni){
    bottone.addEventListener('click', function(){
    let altriOpen = document.querySelector('.content.open')
    if(altriOpen != null){
        altriOpen.classList.remove('open')
    }
   let target =  bottone.getAttribute('data-target');
   let targetContent = document.querySelector(target)
   if(altriOpen != targetContent) {
       document.querySelector(target).classList.toggle('open')
   }
   
    })
}
