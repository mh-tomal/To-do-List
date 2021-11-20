


let form = document.querySelector('form');
let newTask = document.querySelector('#new-task');
let incompleteUl = document.querySelector('#items');
let completeUl= document.querySelector('.complete-list ul');


//create incomplete task

let createTask = function(task){
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkbox.type = 'checkbox';

    
    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;
}


let addTask = function(event){
    event.preventDefault();

    let listItem = createTask(newTask.value);
    if (newTask.value === '') {
    
        showAlert("Please fill the field!","error");
    } else {
    
        incompleteUl.appendChild(listItem);

        newTask.value = "";

        bindInCompleteTask(listItem,completeTask);
    }
    
}

let completeTask = function(){

    let item = this.parentNode;
    let deleteBtn = document.createElement('button');

    deleteBtn.innerText = 'Delete';
    deleteBtn.className = "delete";

    item.appendChild(deleteBtn);

    let checkbox = item.querySelector('input[type="checkbox"]');

    checkbox.remove();

    completeUl.appendChild(item);

    bindCompleteTask(item,deleteTask);
}

let bindInCompleteTask = function(taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}

let deleteTask = function(){
    let deleteItem = this.parentNode;
    let ul = deleteItem.parentNode;
    ul.removeChild(deleteItem);

}

let bindCompleteTask = function(taskItem,deleteclick){

    let deleteClick = taskItem.querySelector('.delete');

    deleteClick.onclick = deleteclick; 
}


for(let i=0; i< incompleteUl.children.length; i++ ) {
    bindInCompleteTask(incompleteUl.children[i], completeTask);
}

for(let i=0; i< completeUl.children.length; i++ ) {
    bindCompleteTask(completeUl.children[i], deleteTask);
}


//let showAlert = function(){
  //  alert("Please fill the field!");
//}



form.addEventListener('submit', addTask);



let showAlert = function(message, className) {
    let div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    let container = document.querySelector('.container');
    let form = document.querySelector('form');
    container.insertBefore(div, form);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}