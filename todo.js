// const itemsText = document.querySelector('#items-text');
// const todoList = document.querySelector('ul');
// const btn = document.querySelector('#basic-addon1');
// const shadowElement = document.getElementById('shadowDisplay');
// const listInput = document.querySelector('.list-input input');

// let typingTimeout;

// btn.addEventListener('click', function() {
//     const itemValue = itemsText.value;

//     if (itemValue !== '') {
//         const listItem = document.createElement('li');
//         listItem.className = "d-flex align-items-center gap-2";
//         listItem.innerHTML = `<input type="checkbox" class="checkbox">${itemValue}`;
//         todoList.appendChild(listItem);
//         const checkbox = listItem.querySelector('.checkbox');
//         checkbox.addEventListener('change', function() {
//             if (checkbox.checked) {
//                 listItem.classList.add('checked');
//             } else {
//                 listItem.classList.remove('checked');
//             }
//         });
//         setupListItemDoubleClick(listItem);

//     }

//     itemsText.value = '';
//     shadowElement.style.display = 'none';
// });

// function setupListItemDoubleClick(listItem) {
//     const listItemValue = listItem.textContent.trim();
//     listItem.addEventListener('dblclick', function() {
//         listItem.innerHTML = `<input type='text' class='form-control mt-2 mb-2' id='inputList' value='${listItemValue}'>
//         <i class="bi bi-check"></i> <i class="bi bi-x"></i> `;

//         const saveIcon = listItem.querySelector('.bi-check');
//         const deleted = listItem.querySelector('.bi-x');

//         const input = listItem.querySelector('#inputList');

//         deleted.addEventListener('click',function(){
//          listItem.remove();
//             setupListItemDoubleClick(listItem);
//         })

//         saveIcon.addEventListener('click', function() {
//             const updatedValue = input.value;
//             listItem.innerHTML = `<input type="checkbox" class="checkbox">${updatedValue}`;
//             const checkbox = listItem.querySelector('.checkbox');

//             checkbox.addEventListener('change', function() {
//                 if (checkbox.checked) {
//                     listItem.classList.add('checked');
//                 } else {
//                     listItem.classList.remove('checked');
//                 }
//             });
//             setupListItemDoubleClick(listItem);
//         });
//     });
// }




// itemsText.addEventListener('input', function(e) {
//     clearTimeout(typingTimeout);

//     typingTimeout = setTimeout(() => {
//         const inputText = e.target.value;

//         if (inputText !== '') {
//             shadowElement.innerText = inputText;
//             shadowElement.style.display = 'block';
//         } else {
//             shadowElement.style.display = 'none';
//         }
//     }, 100); 
// });

// itemsText.addEventListener('keydown', function(e) {
//     clearTimeout(typingTimeout);

//     if (e.key == 'Enter') {
//         const itemValue = itemsText.value;

//         if (itemValue !== '') {
//             const listItem = document.createElement('li');
//             listItem.className = "d-flex align-items-center gap-2";
//             listItem.innerHTML = `<input type="checkbox" class="checkbox">${itemValue}`;
//             todoList.appendChild(listItem);

//             const checkbox = listItem.querySelector('.checkbox');

//             checkbox.addEventListener('change', function() {
//                 if (checkbox.checked) {
//                     listItem.classList.add('checked');
//                 } else {
//                     listItem.classList.remove('checked');
//                 }
//             });

//             setupListItemDoubleClick(listItem);

//         }

//         itemsText.value = '';
//         shadowElement.style.display = 'none';

//     }
// });

const input = document.querySelector('#input');
const btn = document.querySelector('.btn');
const lists =document.querySelector('.lists');
let array = [];

btn.addEventListener('click',function(){
    const inputValue = input.value;

    if(inputValue !== '' ){
        array.push(inputValue)
        input.value ='';
        console.log(array);
        movement(); 
    }
});


    function setupListItemDoubleClick(listItem) {

        const EditItem = listItem.querySelector('.input-list');

        EditItem.addEventListener('dblclick',function(e){
            console.log(e);
            const listItemValue = listItem.textContent.trim();
            listItem.innerHTML = `<input type='text' class='form-control input-list mt-2 mb-2' id='inputList'  value='${listItemValue}'>
            <i class="bi bi-check"></i> <i class="bi bi-x"></i>`;
            
        const saveIcon = listItem.querySelectorAll('.bi-check');
        const deleted = listItem.querySelectorAll('.bi-x');
    
            const input = listItem.querySelectorAll('#inputList');
                
            deleted.forEach(function(deleted){
                deleted.addEventListener('click',function(){
                    listItem.remove();
                        setupListItemDoubleClick(listItem);
                        if (array.length > 0) {
                            // Remove the first string from the array
                            array.shift();
                        }
                        console.log(array);
                    })
            })
            saveIcon.forEach(function(saveIcon){
                saveIcon.addEventListener('click', function() {
                    input.forEach(function(updatedValue){
                        const InputValue = updatedValue.value
    
                        listItem.innerHTML = `<li class="d-flex align-items-revert gap-1 input-list  overflow-hidden"><input type='checkbox' id='checktext'>${InputValue}</li>`;
                        setupListItemDoubleClick(listItem);
                        newListCheckbox(listItem)
                    })
                });
            })
    
    
    
        })



}


function newListCheckbox(newList){
    const checkbox = newList.querySelector('#checktext');
    const list = newList.querySelector('.input-list')
    checkbox.addEventListener('change',function(){
        if(checkbox.checked){
            list.style.textDecoration = 'line-through'
        }else{
            list.style.textDecoration = 'none'
        }
    })
}
function movement(){
    const newList = document.createElement('div');
    array.forEach(function(items){
    newList.style.margingitTop='10px';
    newList.innerHTML = `<li class="d-flex align-items-revert gap-1 input-list  overflow-hidden"><input type='checkbox' id='checktext'>${items}</li>`;
        lists.appendChild(newList)
    })
    newListCheckbox(newList)
    setupListItemDoubleClick(newList)
}
input.addEventListener('keydown',function(e){
    const inputValue = input.value;
    if(e.key == 'Enter'){
        if(inputValue !== '' ){
            array.push(inputValue)
            input.value ='';
            console.log(array);
            movement();
        }
    }

})

