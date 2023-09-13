

const toDoListInput = document.querySelector('.add-to-do-input')
const addBtn = document.querySelector('.add-Btn')
const toDoItemsGroup = document.querySelector('.to-do-items')
const trashCan = document.querySelector('.fa-trash-can')
let toDoItemInput
let toDoText
let item
const ls = localStorage
const tasks = []
// GET TO-DO-ITEM
addBtn.addEventListener('click', function() {
    toDoItemInput = toDoListInput.value
    console.log(`The inputted Task: ${toDoItemInput}`)
    toDoListInput.value = ''
    createToDoItem(toDoItemInput)

})

// ALLOW USER TO SUBMIT TASK WITH ENTER BUTTON
toDoListInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        toDoItemInput = toDoListInput.value
        console.log(`The inputted Task: ${toDoItemInput}`)
        toDoListInput.value = ''
        createToDoItem(toDoItemInput)
        console.log('work')
    }
    
})



// CREATE TO-DO-ITEM
function createToDoItem(toDoItemInput) {
    console.log(`a list item will be made using: ${toDoItemInput}`)
    item = document.createElement('li')
    const itemLeft = document.createElement('div')
    const checkbox = document.createElement('input')
    let toDoText = document.createElement('p')
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
            handleCheckboxClick(checkedTask)
        }
        else {
            console.log(checkedTask, 'has been unchecked')
            handleCheckboxClick(checkedTask)
        }
    })
    storeInLocalStorage(item)

}

// ABILITY TO EDIT/DELETE/SET AS COMPLETED TO-DO-ITEM
function deleteTask(toDoItemInput) {
    console.log('the item to be deleted is:', toDoItemInput)
    toDoItemsGroup.removeChild(toDoItemInput)
}


function handleCheckboxClick(toDoItemInput) {
    const checkedElement = toDoItemInput
    const checkedToDoText = checkedElement.querySelector('p')
    console.log(checkedToDoText)
    checkedToDoText.classList.toggle('completed')
    
}

// STORE TO-DO-LIST ITEMS IN LOCAL STORAGE
function storeInLocalStorage(item) {
    
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i])
        tasks.push(tasks[i])
        ls.setItem('tasks', JSON.stringify(tasks) )
    }
    
}
