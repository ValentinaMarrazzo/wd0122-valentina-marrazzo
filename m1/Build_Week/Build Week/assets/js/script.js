


//slide
//freccia
var counter = 0;
var imgContainer = document.querySelector('#imgslide').style;
function forward() {
  imgContainer.transform = 'translateX(-' + 200 * counter + 'px)';
  counter++
  if (counter > 7) {
    imgContainer.transform = 'translateX(0)';
    counter = 0;
  }
  imgContainer.transition = 'transform 0.5s ease-in-out'
}

//pallini

function page(n) {
  counter*n
  imgContainer.transform = 'translateX(-'+ 200 * n + 'px';
  imgContainer.transition = 'transform 0.5s ease-in-out'
  if(forward()) {
    counter = 0;
  }

  document.querySelector(".point.active").classList.remove("active")
  document.getElementsByClassName("point")[n].classList.add("active")
}

//scroll pagina

//nav
var ab = document.querySelector("#about").offsetTop - 5;
var bl = document.querySelector("#blog").offsetTop - 5;
var me = document.querySelector("#menu").offsetTop + 300;
var sub =  document.querySelector("#subscribe").offsetTop + 100;
var con = document.querySelector("#contacts").offsetTop - 5;
window.addEventListener("scroll", function(e) {
  let positionScroll = this.scrollY;
  //console.log("STO SCROLLANDO", positionScroll)
  if(positionScroll >= 0 && positionScroll < ab) {
    this.document.querySelectorAll("nav li")[0].style.borderBottom = "solid 2px orangered"
  } else  {
    this.document.querySelectorAll("nav li")[0].style.borderBottom = "none" 

  }

  if(positionScroll >= ab && positionScroll < bl) {
    this.document.querySelectorAll("nav li")[1].style.borderBottom = "solid 2px orangered"
  } else  {
    this.document.querySelectorAll("nav li")[1].style.borderBottom = "none" 

  }

  if(positionScroll >= bl && positionScroll < me) {
    this.document.querySelectorAll("nav li")[2].style.borderBottom = "solid 2px orangered"
  } else  {
    this.document.querySelectorAll("nav li")[2].style.borderBottom = "none"
  }

  if(positionScroll >= me && positionScroll < sub) {
    this.document.querySelectorAll("nav li")[3].style.borderBottom = "solid 2px orangered"
  } else  {
    this.document.querySelectorAll("nav li")[3].style.borderBottom = "none"
  }

  if(positionScroll >= sub && positionScroll < con) {
    this.document.querySelectorAll("nav li")[4].style.borderBottom = "solid 2px orangered"
  } else  {
    this.document.querySelectorAll("nav li")[4].style.borderBottom = "none"
  }

  if(positionScroll >= con) {
    this.document.querySelectorAll("nav li")[5].style.borderBottom = "solid 2px orangered"
  } else  {
    this.document.querySelectorAll("nav li")[5].style.borderBottom = "none"
  }
})

//altri elementi