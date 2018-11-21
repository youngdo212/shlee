export default class Modal {
  constructor({modal, activeButtons}) {
    const closeButton = modal.querySelector('.modal__close-button');

    this.modal = modal;
    this.video = this.modal.querySelector('.modal__video > iframe');
    this.title = this.modal.querySelector('.modal__title');
    this.description = this.modal.querySelector('.modal__description');

    this.registerActivateListener(activeButtons);
    this.registerDeactivateListener(closeButton);
  }

  registerActivateListener(buttons) {
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.stopPropagation();

        const project = e.currentTarget.closest('.project');
        const videoUrl = project.dataset.videoUrl;
        const title = project.querySelector('.project__title').textContent;
        const description = project.querySelector('.project__description').textContent;

        this.activate({videoUrl, title, description});
      })
    })
  }

  registerDeactivateListener(button) {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      this.deactivate();
    })
  }

  activate({videoUrl, title, description}) {
    this.video.src = videoUrl;
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