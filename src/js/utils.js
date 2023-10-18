export const sayHello = (text) => {
  return text;
};

export const createTodo = (todo) => {
  let todoItem = {
    title: todo,
    id: '',
    completed: false
  };
  window.localStorage.setItem('todos', JSON.stringify([todoItem]));
  //Ad to localStorage
  drawItems();
}

const drawItems = () => {
  //get items from localStorage
  let items = window.localStorage.getItem('todos');
  let itemsList = JSON.parse(items);
  let drawItems = [];
  itemsList.forEach(element => {
    let listElement = document.createElement('li');
    listElement.className = `${element.completed ? 'completed' : null}`;
    listElement.innerHTML = `
      <div class="view">
        <input class="toggle" type="checkbox" ${element.completed ? 'cheked' : null} />
        <label>${element.title}</label>
        <button class="destroy" id="${element.id ? element.id : '0'}"></button>
      </div>
      <input class="edit"  value="Learn JavaScript" />`;
    drawItems.push(listElement);
  });

  let container = document.getElementById('todo-list-container');
  container.append(...drawItems);

}
