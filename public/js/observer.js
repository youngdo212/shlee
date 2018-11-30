const option = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
}

const callback = (projectViewIntersections, observer) => {
  projectViewIntersections.forEach((projectViewIntersection) => {
    if(!projectViewIntersection.isIntersecting) return;

    const projectView = projectViewIntersection.target;
    const projectViewImage = projectView.querySelector('img');

    projectViewImage.setAttribute('src', projectViewImage.dataset.src);
    projectViewImage.addEventListener('load', () => {
      projectViewImage.removeAttribute('data-src');
      projectView.classList.remove('project--invisible');
    }, {once: true});
    observer.unobserve(projectView);
  })
}

const observer = new IntersectionObserver(callback, option);

export default observer;