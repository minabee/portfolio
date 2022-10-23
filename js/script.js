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


//REMOVE NAV MOBILE 
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-wrap')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))


//SHOW NAV BORDER
const scrollNav = document.getElementById('nav')
window.onscroll = function(){
    if(window.scrollY >= 700){
        scrollNav.classList.add('scroll-nav')
    }else{
        scrollNav.classList.remove('scroll-nav')
    }
}

//SHOW NAV ACTIVE
window.addEventListener('scroll', function(){
    const scrollY = window.pageYOffset; //문서가 수직으로 얼마나 스크롤 됐는지 px 단위로 반환
    const sections = document.querySelectorAll('section[id]'); //querySelectorAll : section태그의 id값 가져와 배열 형태로 반환
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight; //offsetHeight : 요소의 높이 
        const headerHeight = 88;
        const sectionTop = current.offsetTop - headerHeight; //offsetTop : 요소 경계의 맨 윗부분
        const sectionId = current.getAttribute('id'); //getAttribute는 선택한 요소(element)의 특정 속성(attribute)의 값을 가져옴
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_item a[href*=' + sectionId + ']').classList.add('nav-active');
        }
        else{
            document.querySelector('.nav_item a[href*=' + sectionId + ']').classList.remove('nav-active');
        }
    });
});

//SCROLL SKILLS
const skillSection = document.getElementById('skill-section');
const progressBar = document.querySelectorAll('.progress_bar');

function showProgress(){
    progressBar.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`
    });
}
function hideProgress(){
    progressBar.forEach(p =>{
        p.style.opacity = 0;
        p.style.width = 0;
    });
}
window.addEventListener('scroll',() => {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if(sectionPos < screenPos){
        showProgress();
    }else{
        hideProgress();
    }
});

//SHOW MODAL
const modalBtn = document.querySelectorAll('.modal_btn')
const modal = document.querySelectorAll('.modal')
const modalClose = document.querySelectorAll('.modal_top_close')

modalBtn.forEach(function(target,index){
    target.addEventListener('click',function(){
        modal[index].style.display = 'block'
        document.body.classList.add("none-scroll")
        cursor.classList.add('active')
    })
})

modalClose.forEach(function(target,index){
    target.addEventListener('click',function(){
        modal[index].style.display = 'none'
        document.body.classList.remove("none-scroll")
        cursor.classList.remove('active')
    })
})


modal.forEach(function(target,index){
    target.addEventListener('click',function(e){
        if(this == e.target) 
        target.style.display = 'none'
        document.body.classList.remove("none-scroll")
        cursor.classList.remove('active')
    })
})
