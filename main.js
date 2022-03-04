/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da página quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function newHeaderPage() {

  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}


/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 600,
  reset: true
})

// scrollReveal.reveal(
//   `#home .image, #home .text,
//   #about .image, #about .text,
//   #services header, #services .card,
//   #testimonials header, #testimonials .testimonials
//   #contact .text, #contact .links
//   footer .brand, footer .social
//   `,
//   { interval: 10 }
// )

/* button return top */ 

const getButtonBackToTop = document.querySelector('.back-to-top')
function backToTop() {

  if(window.scrollY >= 1000) {
    getButtonBackToTop.classList.add('show')
  } else {
    getButtonBackToTop.classList.remove('show') 
  }
}

// trocar a cor da pagina

function getColor() {
  const getColorPage = document.querySelector('#header .container a')

  if(window.scrollY >= 500) {
    getColorPage.classList.add('newColor')
  } else {
    getColorPage.classList.remove('newColor')
  }
}

function getColor1() {
  const getColorPage = document.querySelector('#header .container a')

  if(window.scrollY >= 900) {
    getColorPage.classList.add('newColor1')
  } else {
    getColorPage.classList.remove('newColor1')
  }
}

function getColor2() {
  const getColorPage = document.querySelector('#header .container a')

  if(window.scrollY >= 1400) {
    getColorPage.classList.add('newColor2')
  } else {
    getColorPage.classList.remove('newColor2')
  }
}

// activate menu according to the section visible on the page
function activateMenuAtCurrentSection() {
  const sections = document.querySelectorAll('main section[id]')

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for( const section of sections ) {
    sectionTop = section.offsetTop
    sectionHeight = section.offsetHeight
    sectionId = section.getAttribute('id')

   const checkpointStart = checkpoint >= sectionTop  
   const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if ( checkpointStart && checkpointEnd) {
      document
      .querySelector( 'nav ul li a[href*=' + sectionId +  ']')
      .classList.add('active')
    } else (
      document
      .querySelector( 'nav ul li a[href*=' + sectionId +  ']')
      .classList.remove('active')
    )
  }

}


/*when scroll*/
window.addEventListener('scroll', function() {
  backToTop()
  newHeaderPage()
  activateMenuAtCurrentSection() 
  getColor()
  getColor1()
  getColor2()

})







