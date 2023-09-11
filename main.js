

const toDoListInput = document.querySelector('.add-to-do-input')
const addBtn = document.querySelector('.add-Btn')
const itemCheckbox = document.querySelector('.to-do-item-checkbox')
const deleteBtn = document.querySelector('.delete-btn')
let toDoItemInput

// GET TO-DO-ITEM
addBtn.addEventListener('click', function() {
    console.log('input submitted')
    toDoItemInput = toDoListInput.value
    console.log(toDoItemInput)
    toDoListInput.value = ''
})

function getToDoItem(toDoItemInput) { 
    console.log(toDoItemInput)
    
    
    
}


// CREATE TO-DO-ITEM
function createToDoItem() {
    console.log('item created')
    const toDoItem = getToDoItem()
    console.log(toDoItem)
}
// DISPLAY STORED TO-DO-ITEM
// ABILITY TO EDIT/DELETE/SET AS COMPLETED TO-DO-ITEM
// STORE TO-DO-LIST ITEMS IN LOCAL STORAGE

