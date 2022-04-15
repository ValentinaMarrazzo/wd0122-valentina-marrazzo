const DISPLAY = document.querySelector('#display');

function addNum(btn) {
    let num = btn.innerHTML;
    if(btn === document.querySelector('.op')) {

        if(DISPLAY.value.includes('+') || DISPLAY.value.includes('-') || DISPLAY.value.includes('*') || DISPLAY.value.includes('/')) {
           //
        }else{
            DISPLAY.value +=num;
        }
    }else {
        DISPLAY.value +=num;
        
    }
    
    
    
}


function mul(btn) {
    let op = '*';
    DISPLAY.value += op;
}

function div(btn) {
    let op = '/';
    DISPLAY.value += op;
}

function sqrtCalc(btn) {
    let sqrtResult = Math.sqrt(DISPLAY.value);
    DISPLAY.value = sqrtResult;
}

function result(btn) {
    let tot = eval(DISPLAY.value);
    DISPLAY.value = tot;
}

function cancThis(btn) {
    DISPLAY.value = ' ';
}
