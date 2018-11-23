export default class Modal {
  constructor({modal}) {
    
    this.modal = modal;
    this.closeButton = this.modal.querySelector('.modal__close-button');
    this.video = this.modal.querySelector('.modal__video > iframe');
    this.title = this.modal.querySelector('.modal__title');
    this.description = this.modal.querySelector('.modal__description');

    this.registerCloseButtonHandler(this.deactivate.bind(this));
  }

  registerCloseButtonHandler(handler) {
    this.closeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      handler();
    })
  }

  activate({video, title, description}) {
    this.video.src = video;
    this.title.textContent = title;
    this.description.textContent = description;
    this.modal.classList.remove('modal--deactive');
    this.modal.classList.add('modal--active');
  }

  deactivate() {
    this.modal.addEventListener('transitionend', () => {
      this.video.src = "";
      this.title.textContent = "";
      this.description.textContent = "";
    }, {once: true});
    
    this.modal.classList.remove('modal--active');
    this.modal.classList.add('modal--deactive');
  }
}