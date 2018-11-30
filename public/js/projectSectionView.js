import ProjectView from './projectView.js';

export default class ProjectSectionView {
  constructor({projects, wrapper, observer}) {
    this.projectViews = projects.map((project) => {
      return new ProjectView({
        project,
        wrapper,
        observer,
      })}
    );
  }

  registerQuickViewHandler(handler) {
    this.projectViews.forEach((projectView) => {
      projectView.bindQuickViewHandler(handler);
    });
  }
}