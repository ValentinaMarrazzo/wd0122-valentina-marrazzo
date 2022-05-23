var g1 = Math.round((Math.random() * (20 - 1) + 1));
var g2 = Math.round((Math.random() * (20 - 1) + 1));
var num = Math.round((Math.random() * (20 - 1) + 1));
console.log("Il numero da indovinare \u00E8 ".concat(num));
if ((num - g1) < (num - g2) && g1 < num) {
    console.log("Nessuno ha indovinato, ma il Giocatore 1 ci \u00E8 andato pi\u00F9 vicino: ".concat(g1, ". Il Giocatore 2 invece ha inserito ").concat(g2));
}
else if ((num - g1) > (num - g2) && g2 < num) {
    console.log("Nessuno ha indovinato, ma il Giocatore 2 ci \u00E8 andato pi\u00F9 vicino: ".concat(g2, ". Il Giocatore 1 invece ha inserito ").concat(g1));
}
else if (g1 === num) {
    console.log("Il Giocatore 1 ha indovinato!");
}
else if (g2 === num) {
    console.log("Il Giocatore 2 ha indovinato!");
}
else {
    if (g1 > g2) {
        console.log("Nessuno ha indovinato, ma il Giocatore 2 ci \u00E8 andato pi\u00F9 vicino: ".concat(g2, ". Il Giocatore 1 invece ha inserito ").concat(g1));
    }
    else {
        console.log("Nessuno ha indovinato, ma il Giocatore 1 ci \u00E8 andato pi\u00F9 vicino: ".concat(g1, ". Il Giocatore 2 invece ha inserito ").concat(g2));
    }
}
