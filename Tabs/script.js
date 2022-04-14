const buttons = document.querySelectorAll('button');  
const tabs = document.querySelectorAll('.brief');
const tabContainer = document.querySelectorAll('tabs_briefs');
const titles = document.querySelectorAll('h4');


function changeTab(){
    
}  
buttons.forEach((button,index)=>{
    button.addEventListener('click', ()=>{
        tabs.forEach((tab)=>{
            tab.classList.remove('open')
        })
        buttons.forEach((button)=>{
            button.classList.remove('open')
        })
        titles.forEach((title)=>{
            title.classList.remove('open')
        })
        tabs[index].classList.add('open');
        titles[index].classList.add('open');
        buttons[index].classList.add('open');
    })})