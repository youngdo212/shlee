import ProjectView from './projectView.js';

export default class ProjectSectionView {
  constructor({projects, wrapper}) {
    this.projectViews = projects.map((project) => {
      return new ProjectView({
        project,
        wrapper,
      })}
    );
  }

  registerQuickViewHandler(handler) {
    this.projectViews.forEach((projectView) => {
      projectView.bindQuickViewHandler(handler);
    });
  }
}