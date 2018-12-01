import {ajax} from './helper.js';

export default class Loader {
  constructor({loader, handler, url}) {
    this.index = 0;
    this.loader = loader;
    this.handler = handler;
    this.url = url;
    this.createObserver();
  }

  createObserver() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if(!entry.isIntersecting) return;

        this.loader.classList.add('loader--loading');

        ajax({
          method: 'GET',
          url: this.url,
          callback: this.load.bind(this, observer),
        });
      });
    });

    observer.observe(this.loader);
  }

  load(observer, data) {
    const projectsAll = JSON.parse(data);
    const projects = projectsAll[this.index++];

    !!projects ? this.handler(projects) : observer.unobserve(this.loader);
    this.loader.classList.remove('loader--loading');
  }
}