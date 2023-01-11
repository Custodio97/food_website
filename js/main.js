// menu-mobile navbar
const $nav = document.querySelector('nav ul')
const $toggle = document.querySelector('.toggle')
const $icon = document.querySelector('.fa-bars')

$toggle.addEventListener('click', ()=> {
    if ($icon.classList.contains('fa-bars')) {
        $icon.classList.replace('fa-bars', 'fa-times')
    } else {
        $icon.classList.replace('fa-times', 'fa-bars')
    }

    $nav.classList.toggle('active')
})

// scroll Js
window.addEventListener('scroll', () => {
    let elementHome = document.querySelector('.context')
    let distanceToTop = window.scrollX + elementHome.getBoundingClientRect().top
    
    let scrollTop = document.documentElement.scrollTop
    
    let opacity = 1
    if (scrollTop > distanceToTop) {
        opacity=1 - (scrollTop - distanceToTop)
    }

    if (opacity>=0) {
        elementHome.style.opacity = opacity
        elementHome.style.transitionDuration='0.8s'
    }
})

function showBox() {
    const boxes = document.querySelectorAll('.box')
    boxes.forEach((box) => {
        const windowHeight = window.innerHeight
        const elementTop = box.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < windowHeight - elementVisible) {
            box.classList.add('active')
        } 
    })
}

window.addEventListener('scroll', showBox)