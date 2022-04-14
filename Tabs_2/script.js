const container = document.querySelector('.tabs_container');
const buttons = document.querySelectorAll('button');
const briefs = document.querySelectorAll('.brief');

function changeContent(e){

    if(e.target.innerHTML){
        buttons.forEach(button=>{
            button.classList.remove('open');
            e.target.classList.add('open');
        });
        briefs.forEach(brief=>{
            brief.classList.remove('open');

        });
        let selectedBrief = document.getElementById(e.target.innerHTML);
        selectedBrief.classList.add('open');
    }
}

container.addEventListener('click',changeContent);