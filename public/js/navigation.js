export default class Navigation {
  constructor({navigation, top}) {
    this.navigation = navigation;
    this.top = top;
    this.scrollTop = 0;
    this.registerListener();
  }

  registerListener() {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop;

      scrollTop < this.top ? this.navigation.classList.remove('nav--visible') : this.checkScrollDirection(scrollTop);
      this.scrollTop = scrollTop;
    })
  }

  checkScrollDirection(scrollTop) {
    this.scrollTop < scrollTop ? this.navigation.classList.remove('nav--visible') : this.navigation.classList.add('nav--visible');
  }
}