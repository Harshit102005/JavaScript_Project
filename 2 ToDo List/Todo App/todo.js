let todoList = [
  {
    Item:'By milk',
    dueDate: '18/08/2025'
  },
  {
    Item: 'Go to Collage',
    dueDate: '21/10/2025'
  }
];
displayItems();


function addTodo() {
  let inputElement = document.querySelector('#todo-input');

  let dateElement = document.querySelector("#todo-date");

  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({Item: todoItem, dueDate: todoDate});
  inputElement.value = '';
  dateElement.value = '';

  displayItems();

}



function displayItems() {
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    // let Item = todoList[i].Item;
    // let todoDate = todoList[i].dueDate;
    let {Item, dueDate} = todoList[i];
    newHtml +=`
    
    <span>${Item}</span><span>${dueDate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
    
    `;
  }
  containerElement.innerHTML = newHtml;

}