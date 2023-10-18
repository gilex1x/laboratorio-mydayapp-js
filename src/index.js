import "./css/base.css";
import { createTodo, initApp } from "./js/utils";

const createInput = document.getElementById("new-todo");
initApp();
createInput.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    console.log(createInput.value);
    createTodo(createInput.value);
    createInput.value = "";
  }
});
