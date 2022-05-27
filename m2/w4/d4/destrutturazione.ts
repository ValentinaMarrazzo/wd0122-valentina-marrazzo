let lista:any[] = [1, 2, 3, 4]

let [n1,,n4] = lista//così è possibile selezionare degli elementi specifici dell'array

console.log(n1, n4);

//destrutturazione oggetti
let oggetto = {
    nome: 'Marco',
    nazione: "Italia"
}

let {nome, nazione} = oggetto //estrae le due variabili dall'oggetto selezionato 