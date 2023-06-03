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