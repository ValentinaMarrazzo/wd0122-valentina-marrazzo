//i getter e i setter sono metodi che non possono essere lanciati. E' un modo per ottenere una sintassi abbreviata. Il getter non può avere parametri perché non è utilizzato per l'inserimento di dati, ma per leggerli; è protetto. Invece, un setter è utilizzato per la modifica di dati, quindi deve avere sempre un parametro; il return non funziona.
class Pizza{
    constructor(g, p){
        this.gusto = g
        this.prezzo = p
    }

    get leggiPrezzo() {
        return this.prezzo + '€'
    }
    set cambiaPrezzo(p) {
        this.prezzo = p + '€'

    }

}

let margherita = new Pizza('margherita', 5)

console.log(margherita.leggiPrezzo);
console.log(margherita.cambiaPrezzo = 8); //con un setter non si usano le parentesi ma l'operatore di assegnamento

//extends e super()
class Cibo{
    constructor(c, t, d){
        this.calorie = c
        this.tipo = t
        this.durata = d
    }
}

class Calzone extends Cibo{
    constructor(g, c, t, d){
        super(c, t, d)//Si possono non mettere i parametri al cotruttore della classe che estende basta che siano valorizzati in super
        this.gusto = g 
    }
} 

let panzerotto = new Calzone('Pomodoro')

console.log(panzerotto);

//JSON
fetch("file.json") //permette di richiamare un file o una pagina web dall'esterno nello script
.then(res => {
    if(res.ok)
    console.log('caricamento completato')
    return res.json()//res è il parametro della funzione freccia. Trasforma in formato json il contenuto della pagina in risposta. Json si usa solo se il tipo di dato richiesto è json, per gli altri si usa text(). Questo metodo restituisce una promise: qualunque dato in return di un then viene passato al then successivo
}).then(res => {
    console.log(res)
})

localStorage.setItem('nome', 'Marta')//localStorage è una classe. Ciò che è stato creato con setItem è disponibile nelle altre pagine perché i dati vengono salvati in locale. getItem è usato per la lettura. setItem accetta solo dati convertibili in stringa

sessionStorage.setItem('nome', 'Maria')//ha la stessa funzione di localStorage, ma cambia la durata della permanenza dei dati, perché la permanenza dei dati corrisponde alla permanenza nel sito web
