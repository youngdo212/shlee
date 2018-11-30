export default class Loader {
  constructor({loader, handler, baseUrl}) {
    this.index = 0;
    this.loader = loader;
    this.handler = handler;
    this.baseUrl = baseUrl;
    this.createObserver();
  }

  createObserver() {
    const observer = new IntersectionObserver((entries, observe) => {
      entries.forEach((entry) => {
        if(!entry.isIntersecting) return;

        const oReq = new XMLHttpRequest();

        oReq.addEventListener('load', () => {
          this.loader.classList.remove('loader--loading');
          const projectsAll = JSON.parse(oReq.response);
          const projects = projectsAll[this.index++];

          if(!projects) {
            observe.unobserve(entry.target);
            return;
          }

          this.handler(projects);
        })
        oReq.open('GET', this.baseUrl);
        oReq.send();

        this.loader.classList.add('loader--loading');
      });
    });

    observer.observe(this.loader);
  }
}