const reviews = [
{    name : "susan smith",
    job : "software engineer",
    img : "susan.png",
    brief : `I'm baby meggings twee health goth +1. Bicycle rights tumeric
    chartreuse before they sold out chambray pop-up. Shaman humblebrag
    pickled coloring book salvia hoodie, cold-pressed four dollar toast
    everyday carry `},
{    name : "sara jones",
    job : "ux designer",
    img : "sara.png",
    brief : `I'm baby meggings twee health goth +1. Bicycle rights tumeric
    chartreuse before they sold out chambray pop-up. Shaman humblebrag
    pickled coloring book salvia hoodie, cold-pressed four dollar toast
    everyday carry `},
{    name : "katia demagkou",
    job : "Geoinformatics Engineer",
    img : "katia.png",
    brief : `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', `},
{    name : "sachin moor",
    job : "web developer-katia's boss",
    img : "sachin.png",
    brief : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s `}
]


const surpriseMeButton = document.querySelector('.random')
const previousButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');
let image = document.querySelector('img');
let jobs = document.querySelector('.job_title') 
let names = document.querySelector('h3')
let briefs = document.querySelector('.brief')
let lastRender;
let initalPerson = 0 ;

function handleSurpriseMe(){
    let review = reviews[Math.floor(Math.random() * reviews.length)];
       names.innerHTML = review.name 
       jobs.innerHTML = review.job
       briefs.innerHTML = review.brief
       image.src = review.img
       if(review === lastRender){
           return handleSurpriseMe();
       }
   }

function domElementsChange(){
    const item = reviews[initalPerson];
    names.innerHTML = item.name 
    jobs.innerHTML = item.job
    briefs.innerHTML = item.brief
    image.src = item.img
}

function handleNext(){
    if(initalPerson < reviews.length-1) {
        initalPerson++;
    }else{
        initalPerson = 0;
    }
    domElementsChange()
}
function handlePrevious(){
    if(initalPerson< reviews.length-1) {
        initalPerson--;
    }else{
        initalPerson = 0;
    }
    domElementsChange()
}


previousButton.addEventListener('click',handlePrevious)

nextButton.addEventListener('click',handleNext)

surpriseMeButton.addEventListener('click',handleSurpriseMe)
