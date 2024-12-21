import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this._handleFormSubmit = handleFormSubmit;
    this.setEventListeners();
  }

  _getInputValues() {
    // move to constructor
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;

      // TODO
      // to do this section, refer back to sprint, the first lesson on object
      // add a key/value pair to the values object for eaach input
      // the key is input.name
      // the value is input.value
      // need to use brackets notation, not dot notation
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListener();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();

      // TODO - Pass results of _getInputValues to submission handler
      this._handleFormSubmit(inputValues);
    });
  }
}

export default PopupWithForm;
