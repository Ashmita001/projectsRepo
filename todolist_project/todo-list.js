const todoList = [
    {
        name: 'breakfast',
        dueDate: '2020-12-22',
    },
    {
        name: 'snacks',
        dueDate: '2020-12-22',
    }
];

renderTodoList();
// todoList.spl

const arrowFunction = () => {
    console.log
}



// generating html 2
function renderTodoList() {
    let todoHTML = '';
    todoList.forEach((todoObject, index) => {

        // const todoObject = todoList[i];
        const { name, dueDate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-button js-delete-button">Delete</button>
        `;
        // onclick="
        // todoList.splice(${index},1);
        // renderTodoList();
        // " 
        todoHTML += html;

    });
    // console.log(todoHTML);

    document.querySelector('.js-todo-list').innerHTML = todoHTML;

    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () =>{
            todoList.splice( index , 1);
            renderTodoList();
        });

    })
}


document.querySelector('.js-add-button').addEventListener('click', () => {
    addTodo();
}
);





// // generating html 1
// function renderTodoList() {
//     let todoHTML = '';
//     for (let i = 0; i < todoList.length; i++) {
//         const todoObject = todoList[i];
//         // const name=todoObject.name;
//         // const dueDate=todoObject.dueDate;

//         const { name, dueDate } = todoObject;
//         const html = `
//         <div>${name}</div>
//         <div>${dueDate}</div>
//         <button onclick="
//         todoList.splice(${i},1);
//         renderTodoList();
//         " class="delete-button">Delete</button>
//         `;
//         todoHTML += html;

//     }
//     // console.log(todoHTML);

//     document.querySelector('.js-todo-list').innerHTML = todoHTML;
// }




function addTodo() {
    const inputElement = document.querySelector('.js-name-input');//retreive the the text from input field
    const name = inputElement.value;
    // console.log(name);

    const dateinputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateinputElement.value;

    todoList.push({
        name: name,
        dueDate: dueDate
    }
    );//adding to list

    // console.log(todoList);

    inputElement.value = '';//clearing the input field
    renderTodoList();
}