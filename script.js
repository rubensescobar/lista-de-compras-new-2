const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const shoppingList = document.getElementById('shoppingList');
const footer = document.querySelector('footer')


function addItem() {
    const itemText = itemInput.value.trim(); 

    if (itemText !== '') {
        
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');

        
        const itemSpan = document.createElement('span');
        itemSpan.classList.add('text');
        itemSpan.textContent = itemText;

        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerHTML = '<img src="./assets/icons/Frame (3).svg" alt="Deletar">';

        const closeAlert = document.getElementById('close-alert');
        
        
        

        
        deleteButton.addEventListener('click', function() {
            shoppingList.removeChild(itemDiv);
            footer.classList.add("show-result"); 
        });

        closeAlert.addEventListener('click', function() {
            footer.classList.remove("show-result"); 
        });

        
        itemDiv.appendChild(checkbox);
        itemDiv.appendChild(itemSpan);
        itemDiv.appendChild(deleteButton);

        
        shoppingList.appendChild(itemDiv);

        
        itemInput.value = '';
    }
}


addItemButton.addEventListener('click', addItem);








