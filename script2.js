

    const groceryItem = document.createElement('div');
    // groceryItem.classList.add('item_container');
    const att = document.createAttribute('class');
    att.value = 'item_container';
    groceryItem.setAttributeNode(att);
    groceryItem.innerHTML = 
    ` <p class="item">${usersInput.value}</p>
    <div class="icons_container">
        <i class="fas fa-solid fa-pen-to-square"></i>
        <i class="fas fa-solid fa-trash"></i>
    </div>`;
    groceries.appendChild(groceryItem);
    alert('item added successfully','success'); 
    groceries.style.display = "flex";
    groceries.style.flexDirection = "column";
    clearList.style.display = 'flex';
    usersInput.value = '';