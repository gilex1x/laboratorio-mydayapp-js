const main = document.getElementById("main");
const footer = document.getElementById("footer");

export const initApp = () => {
  let store = window.localStorage.getItem("mydayapp-js");
  if (JSON.parse(store)) {
    let items = createItems();
    drawItems(items);
  } else {
    window.localStorage.setItem("mydayapp-js", JSON.stringify([]));
    main.style.display = "none";
    footer.style.display = "none";
  }
};

export const createTodo = (todo) => {
  let randomId = Math.floor(Math.random() * 1000);
  let todoItem = {
    title: todo,
    id: `${randomId}`,
    completed: false,
  };
  updateStore(todoItem);
  let items = createItems();
  drawItems(items);
};

const drawItems = (items) => {
  let container = document.getElementById("todo-list-container");
  container.append(...items);
};

const createItems = () => {
  //get items from localStorage
  let items = window.localStorage.getItem("mydayapp-js");
  let itemsList = JSON.parse(items);
  let drawItems = [];
  itemsList.forEach((element) => {
    let listElement = document.createElement("li");
    listElement.className = `${element.completed ? "completed" : null}`;
    listElement.innerHTML = `
      <div class="view">
        <input class="toggle" type="checkbox" ${
          element.completed ? "cheked" : null
        } />
        <label>${element.title}</label>
        <button class="destroy" id="${element.id ? element.id : "0"}"></button>
      </div>
      <input class="edit"  value="Learn JavaScript" />`;
    drawItems.push(listElement);
  });
  return drawItems;
};

const updateStore = (todo) => {
  let items = JSON.parse(window.localStorage.getItem("mydayapp-js"));
  let updateTask = items.findIndex((task) => task.id == todo.id);
  if (updateTask == -1) {
    items.push(todo);
    main.style.display = "";
    footer.style.display = "";
  } else {
    items[updateTask] = todo;
  }
  window.localStorage.setItem("mydayapp-js", JSON.stringify(items));
};
