import ProjectView from './projectView.js';

export default class ProjectSectionView {
  constructor({wrapper, projectObserver, quickViewHandler}) {
    this.wrapper = wrapper;
    this.projectObserver = projectObserver;
    this.quickViewHandler = quickViewHandler;
  }

  addProject(projects) {
    const newProjectViews = projects.map((project) => {
      return new ProjectView({
        project,
        wrapper: this.wrapper,
        observer: this.projectObserver,
      })
    });

    newProjectViews.forEach((projectView) => {
      projectView.bindQuickViewHandler(this.quickViewHandler);
    });
  }
}