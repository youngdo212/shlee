export default class Modal {
  constructor({modal, activeButtons}) {
    const closeButton = modal.querySelector('.modal__close-button');

    this.modal = modal;
    this.registerActivateListener(activeButtons);
    this.registerDeactivateListener(closeButton);
  }

  registerActivateListener(buttons) {
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        this.activate();
      })
    })
  }

  registerDeactivateListener(button) {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      this.deactivate();
    })
  }

  activate() {
    this.modal.classList.remove('modal--deactive');
    this.modal.classList.add('modal--active');
  }

  deactivate() {
    this.modal.classList.remove('modal--active');
    this.modal.classList.add('modal--deactive');
  }
}