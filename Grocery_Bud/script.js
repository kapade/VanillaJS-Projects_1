const groceries = document.querySelector(".groceries");
const groceriesItem = document.querySelector(".item_container");
const fruit = document.querySelector(".item");
const form = document.querySelector("form");
const usersInput = document.querySelector(".text");
const btn = document.querySelector(".submit");
const clearList = document.querySelector("h4");
const alertmsg = document.querySelector(".message");
let editMode = false;
let fruitList = [];
let editedFruit;

function createGrocery(){
if(usersInput.value===""){
    alert("Please Enter Value", "alert");
    groceries.style.display = "none";
    clearList.style.display = "none";
}else{
    groceries.innerHTML += `<div id="container_${usersInput.value}" class="item_container">
    <p class="item">${usersInput.value}</p>
    <div class="icons_container">
    <i id="edit_${usersInput.value}" class="fas fa-solid fa-pen-to-square"></i>
    <i id="delete_${usersInput.value}" class="fas fa-solid fa-trash"></i>
</div>
</div>`;
const edit = document.querySelector(".fa-pen-to-square");
const deletebtn = document.querySelector(".fa-trash");
edit.addEventListener('click',editItem);
deletebtn.addEventListener('click',deleteItem);
usersInput.value = '';
}
}

function getSaveItem(e) {
  e.preventDefault();
  if(editMode){
   let selectedFruitId = usersInput.value;
   document.getElementById(`container_${editedFruit}`).remove();
   createGrocery();
   alert('item edited successfully','success');
    editMode= false;
  }else{
    groceries.style.display = "flex";
    groceries.style.flexDirection = "column";
    clearList.style.display = "flex";
    fruitList.push(usersInput.value);
    createGrocery();
alert('item added successfully','success');

  }
}


function alert(msg, className) {
  alertmsg.innerHTML = msg;
  alertmsg.classList.add(`message-${className}`);
  setTimeout(() => {
    alertmsg.innerHTML = "";
    alertmsg.classList.remove(`message-${className}`);
  }, 1500);
}


function removeAllItems(e) {
    if(e.target === clearList ){
        fruitList.length = 0;
        groceries.innerHTML =``;
        clearList.style.display = "none";
        alert('empty list','alert'); 
    }
}
function deleteItem(e){
    let selectedFruitId = e.target.id;
    let deletedFruit = selectedFruitId.substring(7);
    document.getElementById(`container_${deletedFruit}`).remove();
    alert('item removed','alert');
    if(fruitList.length = 0){
        clearList.style.display = 'none';
    }
}
function editItem(e){
    let selectedFruitId = e.target.id;
    editedFruit = selectedFruitId.substring(5);
    usersInput.value = editedFruit;
    editMode = true;
    
}

clearList.addEventListener("click", removeAllItems);
form.addEventListener("submit", getSaveItem);

