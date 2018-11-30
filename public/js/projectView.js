import {projectView as template} from './template.js';

export default class ProjectView {
  constructor({project, wrapper}) {
    this.project = project;
    this.quickViewButton = null;
    this.image = null;
    this.render({wrapper});
    this.registerImageLoadHandler();
  }

  render({wrapper}) {
    const html = template(this.project);
    wrapper.insertAdjacentHTML('beforeend', html);

    const renderedProjectView = wrapper.lastElementChild;
    this.quickViewButton = renderedProjectView.querySelector('.project__quick-view');
    this.image = renderedProjectView.querySelector('.project__image');
  }

  registerImageLoadHandler() {
    this.image.addEventListener('load', ({target}) => {
      target.setAttribute('src', target.dataset.src);
      this.image.addEventListener('load', ({target}) => {
        target.removeAttribute('data-src');
      }, {once: true})
    }, {once: true})
  }

  bindQuickViewHandler(handler) {
    if(!this.quickViewButton) return;
    
    this.quickViewButton.addEventListener('click', (e) => {
      e.stopPropagation();
      handler(this.project);
    });
  }
}