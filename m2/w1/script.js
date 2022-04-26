//Switch consente di creare una struttura di controllo delle condizioni che segue la logica del costrutto if implementando diverse opzioni che al verificarsi eseguono le istruzioni prescritte. E' necessario inserire un dato di entrata. Lo switch si basa su situazioni ben definite. Omettere il break funge da or.

//Un ciclo esegue un set di istruzioni n volte. 

//for() richiede tre argomenti per le istruzioni separati da punto e virgola. 

//forEach() è un metodo che richiama una funzione per ogni elemento dell'array. forOf() è considerato più efficiente e innovativo. Non dà la possibilità di creare loop infiniti. Non restituisce un array.

//map resituisce un array contenente il risultato delle istruzioni date. Va sempre usato il return

num = [1, 2, 3, 4, 5, 6, 7, 8]
let numeriMoltiplicati = num.map(function(el){
    return el * 2
})
console.log(numeriMoltiplicati)

//filter() è un metodo che restituisce un array contenenti i valori che rispettano la condizione data
let filtro = num.filter(el => el > 4)
console.log(filtro)

//reduce() ritorna un unico valore applicando una funzione a tutti gli elementi di un array, la cui direzione di default è da sinistra a destra.