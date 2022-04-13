
function giveMeAnswer(a) {
    let age = document.querySelector('#age').value;
   if(parseInt(age, 10) >= 0 && parseInt(age, 10) <= 1) {
    document.querySelector('#result').innerText = 'Fase orale';
    document.querySelector('p').innerText = 'Caspita! Come fai a leggere? Sei nella fase orale e il tuo dilemma è della fiducia-sfiducia. In questi anni la tua capacità di fidarti è condizionata da quanto bene i tuoi genitori riescono a soddisfare i tuoi bisogni'
    }else if(parseInt(age, 10) >= 2 && parseInt(age, 10) <= 3){
        document.querySelector('#result').innerText = 'Fase anale';
    document.querySelector('p').innerText = 'Caspita! Come fai a leggere? Sei nella fase anale e il tuo dilemma è dell\'autonomia-vergogna e dubbio. E\' in questa fase che impari quali sono i tuoi limiti e cosa siano la vergogna e il dubbio. Perché si chiama fase anale? Perché impari ad avere un controllo sui tuoi sfinteri'

    }else if (parseInt(age, 10) >= 4 && parseInt(age, 10) <= 6){
        document.querySelector('#result').innerText = 'Fase fallica';
    document.querySelector('p').innerText = 'Sei nella fase fallica. Come va il tuo rapporto con il genitore del tuo stesso sesso? Il tuo dilemma è lo spirito di iniziativa-senso di colpa. Stai sperimentando e scoprendo il mondo, ma stai anche imparando a superare il senso di colpa che ne deriva.'
    }else if(parseInt(age, 10) >= 7 && parseInt(age, 10) <= 12){
        document.querySelector('#result').innerText = 'Fase di latenza';
        document.querySelector('p').innerText = 'Sei nella fase di latenza e il tuo dilemma è dell\'industriosità-senso di inferiorità. Ti identifichi nei tuoi successi, ma i tuoi insuccessi potrebbero determinare come ti percepisci rispetto ai tuoi coetanei. Tieni duro!'
    }else {
        document.querySelector('#result').innerText = 'Fase di genitalità';
        if(parseInt(age, 10) >= 13 && parseInt(age, 10) <= 20) {
            document.querySelector('p').innerText = 'Il tuo dilemma è dell\'identità e dispersione: è in questo momento che conquisti la tua identità di genere e di collocazione nel mondo sociale e professionale. Sperimenti più ruoli per vedere quale ti rimane addosso. Buona scoperta!'
        }else if (parseInt(age, 10) >= 21 && parseInt(age, 10) <= 40) {
            document.querySelector('p').innerText = 'Il tuo dilemma è dell\'intimità e isolamento. Hai l\'esigenza di fonderti con gli altri e contemporaneamente quella di preservare la tua identità isolandoti. Mantieni un equilibrio tra i due aspetti! '
        }else {
            document.querySelector('p').innerText = 'Il tuo dilemma è della generatività e stagnazione. Avverti l\'esigenza che gli altri hanno bisogno di te. Ciò che realizzi riflette questa esigenza sotto tutti i punti di vista.'
        }

    } 

    
    
}