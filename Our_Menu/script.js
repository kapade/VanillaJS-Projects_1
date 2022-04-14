const menu = [
    {
        title:'Pancakes',
        type: "breakfast",
        price: 15.99,
        img:'../Our_Menu/img/item-1.jpeg',
        brief:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
        title:'Diner Double',
        type: "lunch",
        price: 13.99,
        img:'../Our_Menu/img/item-2.jpeg',
        brief:"Ivaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },
    {
        title:'Godzilla Milkshake',
        type: "shakes",
        price: 6.99,
        img:'../Our_Menu/img/item-3.jpeg',
        brief:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
        title:'Country Delight',
        type: "lunch",
        price: 20.99,
        img:'../Our_Menu/img/item-5.jpeg',
        brief:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
        title:'Oreo Dream',
        type: "shakes",
        price: 18.99,
        img:'../Our_Menu/img/item-6.jpeg',
        brief:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    },
    {
        title:'American Classic',
        type: "lunch",
        price: 12.99,
        img:'../Our_Menu/img/item-5.jpeg',
        brief:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    },
    {
        title:'Quarantine Buddy',
        type: "lunch",
        price: 16.99,
        img:'../Our_Menu/img/item-7.jpeg',
        brief:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    },
    {
        title:'Steak Dinner',
        type: "dinner",
        price: 39.99,
        img:'../Our_Menu/img/item-8.jpeg',
        brief:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    },
]

const titles = document.querySelectorAll('title_plate');
const prices = document.querySelectorAll('h3.price');
const images = document.querySelectorAll('img');
const briefs = document.querySelectorAll('.text');
const menuItems = document.querySelector('.menu_items');
const buttons = document.querySelectorAll('.btn');
// console.log(buttons)



function load(itemsForDisplay){
   let content = itemsForDisplay.map((e)=>{
       return `<div class="menu_item">
       <img src=${e.img} alt="">
       <div class="menu_item_info">
           <div class="menu_item_title">
               <h3 class="title">${e.title}</h3>
               <h3 class="price">$${e.price}</h3>
           </div>
           <div class="menu_item_brief">
               <p class="text">${e.brief}</p>
           </div>
       </div>
   </div>`
   }).join("")
   menuItems.innerHTML = content;
}
window.addEventListener('DOMContentLoaded',()=>{load(menu)});


buttons.forEach(button=>button.addEventListener('click',handleButton));

function handleButton(){
    const type = this.textContent;
    const menuForType = menu.filter((menuItem)=>{
        if(menuItem.type === type){
            return menuItem;
        }
    })
    if(type==="all"){
        load(menu);
    }else{
        load(menuForType);
    }
}