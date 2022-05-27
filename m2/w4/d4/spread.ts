let array:number[] = [1,2,3]
let array2:number[] = [4, 5, 6]

let spread:number[] = [...array, ...array2]//i tre punti significano 'vari parametri'

console.log(spread); //spread può essere usato come alternativa non proprio uguale di concat()

function somma(...numeri:number[]){ // l'operatore di spread ci permette in questo caso di inserire n argomenti che verranno inseriti nell'array numeri
    let totale:number = numeri.reduce((c:number, n:number) => c + n)

}

somma(2,2) //spread restituisce i parametri di questa funzione come array