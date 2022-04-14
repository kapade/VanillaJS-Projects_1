const lines = document.querySelector('.lines');
const navbar = document.querySelector('.navbar')
const buttons = document.querySelector('.buttons ul');
const links = document.querySelectorAll('.buttons ul li');
const sections = document.querySelectorAll('section');
const homepage = document.querySelector('.home');
console.log()
function handleMenu(){
    if(buttons.style.display === "none"){
        buttons.style.display = 'block';
    }else{
        buttons.style.display = 'none'
    }
    // buttons.classList.add('.active')
}
function handleNavBar(){
    if(this.scrollY > 200){
        navbar.style.position = 'fixed'
        navbar.style.background = 'white'
        navbar.style.top = 0;
        navbar.style.left = 0;
        navbar.style.width = "100vw";
        navbar.style.boxShadow = "0 3px 15px black"
    }else{
        navbar.style.boxShadow = "none"
    }

// navbar.classList.add('scrolled')
}

function handleScroll(){
    // console.log(this.textContent)
    for(i=0;i<sections.length;i++){
        if(this.textContent === sections[i].classList[0] ) {
            sections[i].scrollIntoView({behavior: "smooth"});
        }else if(this.textContent === homepage.classList[0]){
            homepage.scrollIntoView({behavior: "smooth"})
        }
    }
 
}
links.forEach(link=>link.addEventListener('click',handleScroll))
lines.addEventListener('click',handleMenu)
window.addEventListener('scroll',handleNavBar)
