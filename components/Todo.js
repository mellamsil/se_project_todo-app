class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }

  _setEventListener() {
    // TODO - set up the delete button handler
    // this._todoDeleteBtn.addEventListener("change", () => {
    //   this._datatodoElement.remove();
    // });
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });
    // when clicked, change completion status from true to false, or vice versa
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoDate = this._todoElement.querySelector(".todo__date");
    const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;
    // TODO - implement dates

    this._generateCheckboxEl();
    this._setEventListener();

    return this._todoElement;
  }
}

export default Todo;