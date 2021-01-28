// selectors

const todoInput = document.querySelector('#add');
const todoButton = document.querySelector('.fa-arrow-down');
const todoList = document.querySelector('.to-do-list');

const taskCountDisplay = document.querySelector('.task-count');
const listItemCount = document.getElementsByClassName('to-do-list-item');

const showAll = document.querySelector('.show-all');
const showActive = document.querySelector('.show-active');
const showCompleted = document.querySelector('.show-completed');

const clearCompleted = document.querySelector('.clear', clearCompletedtasks);



//event listeners

todoButton.addEventListener ('click', addTodo);
todoList.addEventListener('click', deleteCheck);
showAll.addEventListener('click', showAllfunction);
showActive.addEventListener('click', showActivefunction);
showCompleted.addEventListener('click', showCompletedfunction);
clearCompleted.addEventListener ('click', clearCompletedtasks);

//Functions 

function addTodo(event) {

    event.preventDefault()

    if (todoInput.value === '') {

      // alert if the user doesn't type anything

      alert('Write something!')
    } 
    
    else { 
    
     // create to-do item
    
     const todoListItem = document.createElement('li');
     todoListItem.classList.add('to-do-list-item');
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

    // Task count info
    taskCountDisplay.innerHTML = listItemCount.length + ' task(s) left';

    }
    }

    function deleteCheck(e) {

        const item = e.target;

        //delete task
    if (item.classList[0] === 'fas') {
        const todo = item.parentElement;
        todo.remove();

        taskCountDisplay.innerHTML = listItemCount.length + ' task(s) left';
      }

        //check task
    if (item.classList[0] === 'default-checkbox') {
        const writenTask = item.parentElement;
        writenTask.classList.toggle('completed');
      }

    }

    function showAllfunction () {

      const todotasks = document.querySelectorAll('.to-do-list-item');
      const todotasksCompleted = document.querySelectorAll('.completed');
      var i;
      for (i = 0; i < todotasksCompleted.length; i++) {
        todotasksCompleted[i].style = 'display: flex'
        todotasks[i].style = 'display: flex'
      }

    }

    function showActivefunction () {

      const todotasks = document.querySelectorAll('.to-do-list-item');
      const todotasksCompleted = document.querySelectorAll('.completed');
      var i;
      for (i = 0; i < todotasks.length; i++) {
        todotasks[i].style = 'display: flex'
      }
      for (i = 0; i < todotasksCompleted.length; i++) {
        todotasksCompleted[i].style = 'display: none'
      }

    }

    function showCompletedfunction () {

      const todotasks = document.querySelectorAll('.to-do-list-item');
      const todotasksCompleted = document.querySelectorAll('.completed');
      var i;
      for (i = 0; i < todotasksCompleted.length; i++) {
        todotasksCompleted[i].style = 'display: flex'
      }


    }

    function clearCompletedtasks (e) {

      const todotasks = document.querySelectorAll('.to-do-list-item');
      const todotasksCompleted = document.querySelectorAll('.completed');
      var i;
      for (i = 0; i < todotasksCompleted.length; i++) {
        todotasksCompleted[i].remove();
      }

      
    }



  

    


  
    


