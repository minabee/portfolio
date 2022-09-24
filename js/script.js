//HOME ANIMATION
const home_ani = document.querySelectorAll('.home_ani')
window.onload = function(){
    for(let i of home_ani){
        i.classList.add('ani_on')
    }
}


//SHOW MENU
const navWrap = document.getElementById('nav-wrap'),
      navHamburger = document.getElementById('nav-hamburger'),
      navClose = document.getElementById('nav-close')

if(navHamburger){
    navHamburger.addEventListener('click', () =>{
        navWrap.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        navWrap.classList.remove('show-menu')
    })
}


//SCROLL NAV
const scrollNav = document.getElementById('nav')
window.onscroll = function(){
    if(window.scrollY >= 700){
        scrollNav.classList.add('scroll-nav')
    }else{
        scrollNav.classList.remove('scroll-nav')
    }
}

window.addEventListener('scroll', function(){
    const scrollY = window.pageYOffset;
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const headerHeight = 88;
        const sectionTop = current.offsetTop - headerHeight;
        const sectionId = current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_item a[href*=' + sectionId + ']').classList.add('nav-active');
        }
        else{
            document.querySelector('.nav_item a[href*=' + sectionId + ']').classList.remove('nav-active');
        }
    });

});