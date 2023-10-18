import "./css/base.css";
import { sayHello, createTodo } from "./js/utils";

const main = document.getElementById('main');
const footer = document.getElementById('footer');
const createInput = document.getElementById('new-todo');

createInput.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        console.log(createInput.value);
        createTodo(createInput.value)
    }
});

console.log(sayHello("Hello"));
