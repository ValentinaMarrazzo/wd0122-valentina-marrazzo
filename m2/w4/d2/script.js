//ENUM
//L'uso delle enumerazioni può semplificare la documentazione: consentono di definire un insieme di costanti denominate.
var Mesi;
(function (Mesi) {
    Mesi[Mesi["Gennaio"] = 1] = "Gennaio";
    Mesi[Mesi["Febbraio"] = 2] = "Febbraio";
    Mesi[Mesi["Marzo"] = 3] = "Marzo";
    Mesi[Mesi["Aprile"] = 4] = "Aprile";
})(Mesi || (Mesi = {})); //è come se Mesi fosse un oggetto con due serie di coppie chiave valore: l'indice dei mesi e i mesi, i mesi e il loro valore assegnato. 
//enum permette di dare un nome ad un insieme di proprietà
var Color;
(function (Color) {
    Color["Bianco"] = "#fff";
    Color["Nero"] = "#000";
})(Color || (Color = {}));
var colore = Color.Bianco;
//FUNZIONI E OGGETTI
var states = {
    italy: 'rome',
    england: 'london',
    id: function () {
        return this.italy + ' ' + this.england;
    }
};
function somma(a, b, c) {
    return a + b;
} //Il punto interrogativo indica che quella proprietà non è obbligatoria
