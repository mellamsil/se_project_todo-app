import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import formValidator from "../components/FormValidator.js";
import Section from "../components/section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const counter = new TodoCounter(initialTodos, ".counter__text");

// const openModal = (modal) => {
//   modal.classList.add("popup_visible");
// };

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

function handleCheck(checked) {
  counter.updateCompleted(checked);
}

// Your cards are still being deleted by your _remove() function in your todo.js
// This is the function that be deleting them.
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

// addTodoCloseBtn.addEventListener("click", () => {
//   addTodoPopup.close();
// });

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
    const todoElement = generateTodo({ name, date });
    section.addItem(todoElement);
    addTodoPopup.close();
    newTodoValidator.resetValidation();
    counter.updateTotal(true);
  },
});

// addTodoPopup.setEventListeners();

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todoElement = generateTodo(item);
    section.addItem(todoElement);
  },
  containerSelector: ".todos__list",
});

// call section instance's renderItems method
section.renderItems();

// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;
//   const dateInput = evt.target.date.value;

//   // Create a date object and adjust for timezone
//   const date = new Date(dateInput);
//   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//   const id = uuidv4();
//   const values = { name, date, id };
//   const todo = generateTodo(values);
//   todosList.append(todo); // Use addItem method instead
//   // addTodoFormValidator.resetValidation();
//   closeModal(addTodoPopupEl);
//   newTodoValidator.resetValidation();

addTodoPopup.close();
// });

// initialTodos.forEach((item) => {
//   const todo = generateTodo(item);
//   todosList.append(todo); // use addItem method instead
// });

const newTodoValidator = new formValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
