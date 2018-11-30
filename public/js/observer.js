const projectObserverOption = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
}

const projectObserverCallback = (projectViewIntersections, observer) => {
  projectViewIntersections.forEach((projectViewIntersection) => {
    if(!projectViewIntersection.isIntersecting) return;

    const projectView = projectViewIntersection.target;
    projectView.classList.remove('project--invisible');
    observer.unobserve(projectView);
  })
}

const projectObserver = new IntersectionObserver(projectObserverCallback, projectObserverOption);

export {projectObserver};