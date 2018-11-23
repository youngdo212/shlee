import {menuItemView as template} from './template.js';

export default class MenuView {
  constructor({menuItems, wrapper, toggleButton, color}) {
    this.menuItems = menuItems;
    this.wrapper = wrapper;
    this.toggleButton = toggleButton;
    this.isActive = !!toggleButton ? false : true;

    this.render({
      hasToggleButton: !!toggleButton,
      color,
    });
    this.toggleButton && this.registerToggleButtonHandler();
  }

  render({hasToggleButton, color}) {
    this.menuItems.forEach((menuItem => {
      const styledMenuItem = Object.assign({color}, menuItem);
      const html = template(styledMenuItem);

      this.wrapper.insertAdjacentHTML('beforeend', html);
    }))

    hasToggleButton && this.wrapper.classList.add('menu-animation')
  }

  registerToggleButtonHandler() {
    this.toggleButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.isActive ? this.deactivate() : this.activate();
    })
  }

  activate() {
    this.wrapper.classList.add('menu-animation--active');
    this.wrapper.classList.remove('menu-animation--deactive');
    this.isActive = true;
    this.registerCloseMenuHandler();
  }

  registerCloseMenuHandler() {
    window.addEventListener('scroll', () => {
      this.deactivate();
    }, {once: true});
  }

  deactivate() {
    this.wrapper.classList.remove('menu-animation--active');
    this.wrapper.classList.add('menu-animation--deactive');
    this.isActive = false;
  }
}