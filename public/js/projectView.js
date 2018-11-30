import {projectView as template} from './template.js';

export default class ProjectView {
  constructor({project, wrapper, observer}) {
    this.project = project;
    this.element = null;
    this.quickViewButton = null;
    this.render({wrapper});
    observer.observe(this.element);
  }

  render({wrapper}) {
    const html = template(this.project);
    wrapper.insertAdjacentHTML('beforeend', html);

    this.element = wrapper.lastElementChild;
    this.quickViewButton = this.element.querySelector('.project__quick-view');
  }

  bindQuickViewHandler(handler) {
    if(!this.quickViewButton) return;
    
    this.quickViewButton.addEventListener('click', (e) => {
      e.stopPropagation();
      handler(this.project);
    });
  }
}