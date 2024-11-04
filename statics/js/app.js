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

// Sélectionne toutes les sections avec la classe "section"
const sections = document.querySelectorAll('.section');

// Fonction pour ajuster la hauteur
function setMinHeight() {
    let maxHeight = 0;

    // Trouver la hauteur maximale parmi les sections
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        if (sectionHeight > maxHeight) {
            maxHeight = sectionHeight;
        }
    });

    // Appliquer la hauteur maximale comme min-height à toutes les sections
    sections.forEach(section => {
        section.style.minHeight = maxHeight + 'px';
    });
}

// Appeler la fonction au chargement de la page et lors du redimensionnement
window.addEventListener('load', setMinHeight);
window.addEventListener('resize', setMinHeight);


