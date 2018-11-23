import ProjectView from './projectView.js';
import template from './template.js';

export default class ProjectSectionView {
  constructor({projects, wrapper}) {
    this.projectViews = projects.map((project) => {
      return new ProjectView({
        project,
        template,
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