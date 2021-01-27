// selectors

const todoInput = document.querySelector('#add');
const todoButton = document.querySelector('.fa-arrow-down');
const todoList = document.querySelector('.to-do-list');


//event listeners

todoButton.addEventListener ('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions 

function addTodo(event) {

    event.preventDefault()
    
     // create to-do item
    
     const todoListItem = document.createElement('li');
     todoListItem .classList.add('to-do-list-item');
     todoList.appendChild(todoListItem);

    // create default checkbutton
     const defaultCheck = document.createElement ('input');
     defaultCheck.type ='checkbox';
     defaultCheck.classList.add('default-checkbox');
     todoListItem.appendChild(defaultCheck);

     // create custom checkbutton
     const customCheck = document.createElement ('span');
     customCheck.classList.add('custom-checkbox');
     todoListItem.appendChild(customCheck);

     //create task text
     const writenTask = document.createElement('p');
     writenTask.classList.add('task');
     writenTask.innerText = todoInput.value;
     todoListItem.appendChild(writenTask);

     //create delete button
     const deleteButton = document.createElement('i');
     deleteButton.classList.add('fas','fa-times');
     todoListItem.appendChild(deleteButton);

     // clear input value
     todoInput.value = '';
    
    }

    function deleteCheck(e) {

        const item = e.target;

        //delete task
    if (item.classList[0] === 'fas') {
        const todo = item.parentElement;
        todo.remove();
      }

        //check task
    if (item.classList[0] === 'default-checkbox') {
        const writenTask = document.querySelector('.task');
        writenTask.classList.toggle('completed');
      }

    }

