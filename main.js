

const toDoListInput = document.querySelector('.add-to-do-input')
const addBtn = document.querySelector('.add-Btn')
const toDoItemsGroup = document.querySelector('.to-do-items')
let toDoItemInput
let toDoText
let item
// GET TO-DO-ITEM
addBtn.addEventListener('click', function() {
    toDoItemInput = toDoListInput.value
    console.log(`The inputted Task: ${toDoItemInput}`)
    toDoListInput.value = ''
    createToDoItem(toDoItemInput)
})



// CREATE TO-DO-ITEM
function createToDoItem(toDoItemInput) {
    console.log(`a list item will be made using: ${toDoItemInput}`)
    item = document.createElement('li')
    const itemLeft = document.createElement('div')
    const checkbox = document.createElement('input')
    toDoText = document.createElement('p')
    const itemRight = document.createElement('div')
    const deleteBtn = document.createElement('button')
    const trashcan = document.createElement('div')

    item.classList = 'to-do-item'
    itemLeft.classList = 'to-do-item-left'
    checkbox.classList = 'to-do-item-checkbox'
    checkbox.type = 'checkbox'
    toDoText.classList = 'to-do-text'
    itemRight.classList = 'to-do-item-right'
    deleteBtn.classList = 'delete-btn'
    trashcan.classList = 'fa-solid fa-trash-can'

    toDoText.textContent = toDoItemInput


    itemLeft.append(checkbox, toDoText)
    deleteBtn.append(trashcan)
    itemRight.append(deleteBtn)
    item.append(itemLeft, itemRight)
    toDoItemsGroup.append(item)

    deleteBtn.addEventListener('click', function(e) {
        console.log('item will be deleted')
        const taskToBeDeleted = e.target.parentNode.parentNode.parentNode.parentNode
        deleteTask(taskToBeDeleted)
    })

    checkbox.addEventListener('change', function(e) {
        const checkedTask = e.target.parentNode.parentNode
        if (checkbox.checked) {
            console.log(checkedTask, 'has been checked')
            handleCheckboxClick()
        }
        else {
            console.log(checkedTask, 'has been unchecked')
            handleCheckboxClick()
        }
    })


}

// ABILITY TO EDIT/DELETE/SET AS COMPLETED TO-DO-ITEM
function deleteTask(toDoItemInput) {
    console.log('the item to be deleted is:', toDoItemInput)
    toDoItemsGroup.removeChild(toDoItemInput)
}

function handleCheckboxClick() {
    toDoText.classList.toggle('completed')
    if (toDoText.classList.contains('completed')) {
        item.style.background = 'green'
    }
    else {
        item.style.background = '#eee'
    }
}

// STORE TO-DO-LIST ITEMS IN LOCAL STORAGE

