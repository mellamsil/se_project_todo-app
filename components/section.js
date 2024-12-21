class Section {
  constructor({ items, renderer, containerSelector }) {
    // an array of items that will be rendered on the page when we call renderItems
    this._items = items;
    // a function that takes in 'raw data' and converts it to html and places it on the page
    this._renderer = renderer;
    // the element that we will render the items within
    this._container = document.querySelector(containerSelector);
  }

  // render all the items in this._items on that page
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  // stick an element on the page
  addItem(element) {
    // Add element to the container
    this._container.append(element);
    // todosList.append(todo);
  }
}

export default Section;
