let left = document.querySelector('#left')
let right = document.querySelector('#right')
let countL = 0;

function rotateLeft() {
    countL++;
let face = document.querySelectorAll('.face')
//console.log(face)
switch(countL) {
    case 1:
        face[0].style.transform = 'rotateY(90deg) translateZ(16vh)'
        face[1].style.transform = 'rotateY(180deg) translateZ(16vh)'
        face[2].style.transform = 'rotateY(0deg) translateZ(16vh)'
        face[3].style.transform = 'rotateY(-90deg) translateZ(16vh)'
        break;
    case 2:
        face[0].style.transform = 'rotateY(0deg) translateZ(16vh)'
        face[1].style.transform = 'rotateY(90deg) translateZ(16vh)'
        face[2].style.transform = 'rotateY(-90deg) translateZ(16vh)'
        face[3].style.transform = 'rotateY(180deg) translateZ(16vh)'
        break;
    case 3:
        face[0].style.transform = 'rotateY(-90deg) translateZ(16vh)'
        face[1].style.transform = 'rotateY(0deg) translateZ(16vh)'
        face[2].style.transform = 'rotateY(180deg) translateZ(16vh)'
        face[3].style.transform = 'rotateY(90deg) translateZ(16vh)'
        break;
    case 4:
        face[0].style.transform = 'rotateY(180deg) translateZ(16vh)'
        face[1].style.transform = 'rotateY(-90deg) translateZ(16vh)'
        face[2].style.transform = 'rotateY(90deg) translateZ(16vh)'
        face[3].style.transform = 'rotateY(0deg) translateZ(16vh)'
        break;
    default:
        countL = 0;
}

}

let countR = 0;

function rotateRight() {
    countR++
let face = document.querySelectorAll('.face')
switch(countR) {
    case 1:
        face[0].style.transform = 'rotateY(-90deg) translateZ(16vh)'
        face[1].style.transform = 'rotateY(0deg) translateZ(16vh)'
        face[2].style.transform = 'rotateY(180deg) translateZ(16vh)'
        face[3].style.transform = 'rotateY(90deg) translateZ(16vh)'
        break;
    case 2:
        face[0].style.transform = 'rotateY(0deg) translateZ(16vh)'
        face[1].style.transform = 'rotateY(90deg) translateZ(16vh)'
        face[2].style.transform = 'rotateY(-90deg) translateZ(16vh)'
        face[3].style.transform = 'rotateY(180deg) translateZ(16vh)'
        break;
    case 3:
        face[0].style.transform = 'rotateY(90deg) translateZ(16vh)'
        face[1].style.transform = 'rotateY(180deg) translateZ(16vh)'
        face[2].style.transform = 'rotateY(0deg) translateZ(16vh)'
        face[3].style.transform = 'rotateY(-90deg) translateZ(16vh)'
        break;
    case 4:
        face[0].style.transform = 'rotateY(180deg) translateZ(16vh)'
        face[1].style.transform = 'rotateY(-90deg) translateZ(16vh)'
        face[2].style.transform = 'rotateY(90deg) translateZ(16vh)'
        face[3].style.transform = 'rotateY(0deg) translateZ(16vh)'
        break;
    default:
        countR = 0;
}

}

left.addEventListener('click', rotateLeft)
right.addEventListener('click', rotateRight)