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
        
        
        

        
        deleteButton.addEventListener('click', function() {
            shoppingList.removeChild(itemDiv);
            footer.classList.add("show-result"); 
        });

        
        itemDiv.appendChild(checkbox);
        itemDiv.appendChild(itemSpan);
        itemDiv.appendChild(deleteButton);

        
        shoppingList.appendChild(itemDiv);

        
        itemInput.value = '';
    }
}


addItemButton.addEventListener('click', addItem);

// function deleteButton {
//     try {
//       // Aplica a classe que exibe o footer para mostrar o resultado.
//       footer.classList.add("show-result")
//     } catch {
//       // Remove a classe do footer removendo ele da tela.
//       footer.classList.remove("show-result")
      
//       console.log(error)
//       alert("Não foi possível converter. Tente novamente mais tarde.")
//     }
//   }