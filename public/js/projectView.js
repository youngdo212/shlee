export default class ProjectView {
  constructor({project, template, wrapper}) {
    this.project = project;
    this.quickViewButton = null;
    this.render({template, wrapper});
  }

  render({template, wrapper}) {
    const html = template(this.project);
    wrapper.insertAdjacentHTML('beforeend', html);
    this.quickViewButton = wrapper.lastElementChild.querySelector('.project__quick-view');
  }

  bindQuickViewHandler(handler) {
    this.quickViewButton.addEventListener('click', (e) => {
      e.stopPropagation();
      handler(this.project);
    });
  }
}