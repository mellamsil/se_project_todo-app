import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import formValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const counter = new TodoCounter(initialTodos, ".counter__text");

function handleCheck(checked) {
  counter.updateCompleted(checked);
}

const handleDelete = (completed) => {
  counter.updateTotal(false);

  if (completed) {
    counter.updateCompleted(false);
  }
};

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

function handleTodoSubmit(inputValues) {
  const name = inputValues.name;
  const dateInput = inputValues.date;
  const date = new Date(dateInput);
  const id = uuidv4();
  const todo = generateTodo(values);
  addTodoPopup.close();
}

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const name = inputValues.name;
    const date = inputValues.date;
    renderTodo({ name, date });
    addTodoPopup.close();
    newTodoValidator.resetValidation();
    counter.updateTotal(true);
  },
});

const renderTodo = (item) => {
  const todo = generateTodo(item);
  section.addItem(todo);
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => renderTodo(item),

  containerSelector: ".todos__list",
});

section.renderItems();

const newTodoValidator = new formValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
