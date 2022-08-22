const header = document.querySelector('.navbar')
const about = document.querySelector('.about')
window.onscroll = function(){
    var top = window.scrollY
    if (top>=100){
        header.classList.add('navbar-dark')
    }else{
        header.classList.remove('navbar-dark')
    }
}


function reveal() {
    var reveals = document.querySelectorAll(".reveal")
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight
      var elementTop = reveals[i].getBoundingClientRect().top
      var elementVisible = 150
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active")
      } else {
        reveals[i].classList.remove("active")
      }
    }
  }
  
  window.addEventListener("scroll", reveal)