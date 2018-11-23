import {projectView as template} from './template.js';

export default class ProjectView {
  constructor({project, wrapper}) {
    this.project = project;
    this.quickViewButton = null;
    this.render({wrapper});
  }

  render({wrapper}) {
    const html = template(this.project);
    wrapper.insertAdjacentHTML('beforeend', html);
    this.quickViewButton = wrapper.lastElementChild.querySelector('.project__quick-view');
  }

  bindQuickViewHandler(handler) {
    if(!this.quickViewButton) return;
    
    this.quickViewButton.addEventListener('click', (e) => {
      e.stopPropagation();
      handler(this.project);
    });
  }
}