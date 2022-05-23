let g1:number = Math.round((Math.random() * (20 - 1) + 1))

let g2:number = Math.round((Math.random() * (20 - 1) + 1))
let num:number = Math.round((Math.random() * (20 - 1) + 1))

console.log(`Il numero da indovinare è ${num}`);

if((num - g1) < (num - g2) && g1 < num) {
    console.log(`Nessuno ha indovinato, ma il Giocatore 1 ci è andato più vicino: ${g1}. Il Giocatore 2 invece ha inserito ${g2}`)
} else if ((num - g1) > (num - g2) && g2 < num){
    console.log(`Nessuno ha indovinato, ma il Giocatore 2 ci è andato più vicino: ${g2}. Il Giocatore 1 invece ha inserito ${g1}`)
} else if (g1 === num) {
    console.log(`Il Giocatore 1 ha indovinato!`) 
} else if (g2 === num) {
    console.log(`Il Giocatore 2 ha indovinato!`)
} else {
    if(g1 > g2) {
        console.log(`Nessuno ha indovinato, ma il Giocatore 2 ci è andato più vicino: ${g2}. Il Giocatore 1 invece ha inserito ${g1}`)
    } else{
        console.log(`Nessuno ha indovinato, ma il Giocatore 1 ci è andato più vicino: ${g1}. Il Giocatore 2 invece ha inserito ${g2}`)
    }
}
