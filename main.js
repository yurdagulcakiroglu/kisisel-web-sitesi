/* menu show y hidden*/
const navMenu= document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose= document.getElementById('nav-close')

/* menu show */  
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}    
/* menu hidden */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/* Remove Menu Mobile */
const navLink= document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu= document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n=>n.addEventListener('click',linkAction))

/* Skills */
const skillsContent= document.getElementsByClassName('skills_content'),
      skillsHeader= document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass =this.parentNode.className

    for(i=0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass=== 'skills_content skills_close' ){
        this.parentNode.className= 'skills_content skills_open'
    }
}    

skillsHeader.forEach((e1)=>{
    e1.addEventListener('click', toggleSkills)
})

/*SCROLL */
const sections =document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY= window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight= current.offsetHeight,
              sectionTop= current.offsetTop - 50,
              sectionId= current.getAttribute('id')
        
        if(scrollY> sectionTop&& scrollY<= sectionTop+ sectionHeight){
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* header arka planı */

function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY>= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll',scrollHeader)

/*show scroll up */
function scrollUp(){
        const scrollUp = document.getElementById('scroll-up')

        if(this.scrollY>= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)