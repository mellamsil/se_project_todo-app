class formValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings._inputSelector;
    this._formSelector = settings.formSelector;
    this._submitButtonSelector = settings._submitButtonSelector;
    this._errorClass = settings._errorClass;
    this._inputErrorClass = settings._inputErrorClass;
    this._inactiveButtonClass = settings._inactiveButtonClass;
    this._formEl = formEl;
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState(inputList, submitButtonSelector) {
    if(this._hasInvalidInput(inputList, submitButtonSelector)) {
        this._submitButtonSelector.classList.add(this._inactiveButtonClass);
        this._submitButtonSelector.disabled = true
    } else {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.disabled = false;
    }
}

_hasInvalidInput() {
  return this._inputList.some((inputElement)) => {
    return !inputElement.validity.valid;
  }
}

_setEventListeners() {
  this._inputList = Array.from(
    this._formElement.querySelectorAll(this._inputSelector)
  );
  this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
  this._buttonElement = formElement.querySelector(
      settings.submitButtonSelector
    );

_showInputError(inputElement) {
  this._errorElementId = `#${inputElement.id}-error`;
  this._errorElement = formElement.querySelector(errorElementId);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._errorClass);
}

    _hideInputError(inputElement) {
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = "";
    }
  
    // toggleButtonState(inputList, buttonElement, settings);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        toggleButtonState(inputList, buttonElement, settings);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default formValidator;
