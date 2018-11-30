const option = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
}

const callback = (projectViewIntersections, observer) => {
  projectViewIntersections.forEach((projectViewIntersection) => {
    if(!projectViewIntersection.isIntersecting) return;

    const projectView = projectViewIntersection.target;
    projectView.classList.remove('project--invisible');
    observer.unobserve(projectView);
  })
}

const observer = new IntersectionObserver(callback, option);

export default observer;