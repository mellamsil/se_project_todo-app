class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    // this._completed = 0;
    this._completed = todos.filter((todo) => todo.completed).length;
    this._total = todos.length;
    this._updateText();
  }

  updateCompleted = (increment) => {
    if (increment) {
      this._completed += 1;
    } else if (this._completed > 0) {
      this._completed -= 1;
    }
    this._updateText();
    // this._completed += increment ? 1 : -1;
  };

  updateTotal = (increment) => {
    if (increment) {
      this._total += 1;
    } else {
      this._total -= 1;
    }

    this._updateText();
  };

  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
