import { v4 as uuidv4 } from "https://jspm.dev/uuid";
class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._completed = data.completed || false;
    this._name = data.name;
    this._date = data.date;
    this._id = data.id || uuidv4();
    this._selector = selector;
    this._handlecheck = handleCheck;
    this._handleDelete = handleCheck;

    //this._templateElement = document.querySelector(selector);
  }
  _setEventListener() {
    this._todoDeleteBtn.addEventListener("click", () => {
      this._handleDelete(this._completed);
      this._remove();
    });
    this._todoCheckboxEl.addEventListener("change", () => {
      // this._toggleCompletion();
      this._completed = !this._completed;
      this._handlecheck(this._completed);
    });

    //   this._data.completed = !this._data.completed;
    // this._todoDeleteBtn.addEventListener("click", () => {
    //   this._todoElement.remove();
    //   this._todoElement = null;
    // });
  }
  _getTemplate() {
    return document
      .querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);
  }

  _generateName() {
    this._todoNameEl = this._todoElement.querySelector(".todo__name");
    this._todoNameEl.textContent = this._name;
  }

  _generateDateEl() {
    this._dateEl = this._todoElement.querySelector(".todo__date");
    const _dueDate = new Date(this._date);
    if (!isNaN(_dueDate)) {
      this._dateEl.textContent = `Due: ${_dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }
  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._completed;
    this._todoCheckboxEl.id = `todo-${this._id}`;
    this._todoLabel.setAttribute("for", `todo-${this._id}`);
  }

  // _toggleCompletion = () {
  //   this._completed = this._completed;
  // }

  _remove = () => {
    this._todoElement.remove();
  };

  getView() {
    this._todoElement = this._getTemplate();
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    this._generateName();
    this._generateDateEl();
    this._generateCheckboxEl();
    this._setEventListener();

    return this._todoElement;
  }
}
export default Todo;

// this._todoElement = this._templateElement.content
// .querySelector(".todo")
// .cloneNode(true);
// this._todoNameEl = this._todoElement.querySelector(".todo__name");
// this._todoDate = this._todoElement.querySelector(".todo__date");
// this._todoNameEl.textContent = this._data.name;
// this._dueDate = new Date(this._data.date);
// if (!isNaN(this._dueDate)) {
// this._todoDate.textContent = `Due: ${this._dueDate.toLocaleString(
//   "en-US",
//   {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   }
// )}`;
// }

// this._generateCheckboxEl();
// this._setEventListener();
